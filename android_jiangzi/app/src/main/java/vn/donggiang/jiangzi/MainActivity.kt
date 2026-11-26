package vn.donggiang.jiangzi

import android.annotation.SuppressLint
import android.content.Context
import android.graphics.Color
import android.os.Build
import android.os.Bundle
import android.speech.tts.TextToSpeech
import android.view.HapticFeedbackConstants
import android.view.View
import android.webkit.JavascriptInterface
import android.webkit.WebResourceRequest
import android.webkit.WebResourceResponse
import android.webkit.WebSettings
import android.webkit.WebView
import android.webkit.WebViewClient
import androidx.activity.ComponentActivity
import androidx.activity.OnBackPressedCallback
import androidx.core.view.ViewCompat
import androidx.core.view.WindowCompat
import androidx.core.view.WindowInsetsCompat
import androidx.core.view.WindowInsetsControllerCompat
import androidx.webkit.WebViewAssetLoader
import org.json.JSONObject
import java.util.Locale

class MainActivity : ComponentActivity(), TextToSpeech.OnInitListener {
    private lateinit var webView: WebView
    private var tts: TextToSpeech? = null
    private var ttsReady = false
    private val prefsName = "JiangZiStorageBackup_v1"
    private var safeTopPx = 0
    private var safeBottomPx = 0

    @SuppressLint("SetJavaScriptEnabled")
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)

        // True Edge-to-Edge Fullscreen on Android (90Hz/120Hz ready)
        WindowCompat.setDecorFitsSystemWindows(window, false)
        window.statusBarColor = Color.TRANSPARENT
        window.navigationBarColor = Color.TRANSPARENT
        WindowInsetsControllerCompat(window, window.decorView).apply {
            isAppearanceLightStatusBars = true
            isAppearanceLightNavigationBars = true
        }

        tts = TextToSpeech(this, this)

        val assetLoader = WebViewAssetLoader.Builder()
            .addPathHandler("/assets/", WebViewAssetLoader.AssetsPathHandler(this))
            .build()

        webView = WebView(this).apply {
            // Force GPU Hardware Layer for locked 60/90/120fps scrolling & transitions
            setLayerType(View.LAYER_TYPE_HARDWARE, null)
            setBackgroundColor(Color.parseColor("#EAF0F8"))
            overScrollMode = WebView.OVER_SCROLL_NEVER
            isVerticalScrollBarEnabled = false
            isHorizontalScrollBarEnabled = false
            settings.apply {
                javaScriptEnabled = true
                domStorageEnabled = true
                databaseEnabled = true
                mediaPlaybackRequiresUserGesture = false
                cacheMode = WebSettings.LOAD_DEFAULT
                allowFileAccess = false
                allowContentAccess = false
                textZoom = 100
            }
            addJavascriptInterface(JiangZiBridge(), "JiangZiAndroid")
            webViewClient = object : WebViewClient() {
                override fun shouldInterceptRequest(
                    view: WebView,
                    request: WebResourceRequest
                ): WebResourceResponse? {
                    return assetLoader.shouldInterceptRequest(request.url)
                }

                override fun onPageFinished(view: WebView?, url: String?) {
                    super.onPageFinished(view, url)
                    applySafeInsetsToCss()
                    injectDebouncedStorageMirror()
                }
            }
        }

        // Measure system status bar / camera cutout & gesture bar and pass to CSS --safe-top / --safe-bottom
        ViewCompat.setOnApplyWindowInsetsListener(webView) { _, insets ->
            val bars = insets.getInsets(WindowInsetsCompat.Type.systemBars() or WindowInsetsCompat.Type.displayCutout())
            val density = resources.displayMetrics.density.coerceAtLeast(1f)
            safeTopPx = (bars.top / density).toInt()
            safeBottomPx = (bars.bottom / density).toInt()
            applySafeInsetsToCss()
            WindowInsetsCompat.CONSUMED
        }

        setContentView(webView)
        webView.loadUrl("https://appassets.androidplatform.net/assets/www/index.html")

        onBackPressedDispatcher.addCallback(this, object : OnBackPressedCallback(true) {
            override fun handleOnBackPressed() {
                webView.evaluateJavascript("window.__jiangziHandleBack && window.__jiangziHandleBack()") { result ->
                    if (result != "true") {
                        isEnabled = false
                        onBackPressedDispatcher.onBackPressed()
                        isEnabled = true
                    }
                }
            }
        })
    }

    private fun applySafeInsetsToCss() {
        if (!::webView.isInitialized) return
        val js = "document.documentElement.style.setProperty('--safe-top','${safeTopPx}px');document.documentElement.style.setProperty('--safe-bottom','${safeBottomPx}px');"
        webView.evaluateJavascript(js, null)
    }

    private fun injectDebouncedStorageMirror() {
        val prefs = getSharedPreferences(prefsName, Context.MODE_PRIVATE)
        val json = JSONObject()
        for ((k, v) in prefs.all) {
            if (v is String) json.put(k, v)
        }
        val escaped = JSONObject.quote(json.toString())
        val js = """
            (function() {
              if (window.__jzMirrorInstalled) return;
              window.__jzMirrorInstalled = true;
              try {
                var backup = JSON.parse($escaped);
                var restored = false;
                Object.keys(backup).forEach(function(k) {
                  if (localStorage.getItem(k) === null) {
                    localStorage.setItem(k, backup[k]);
                    restored = true;
                  }
                });
                if (restored) { location.reload(); return; }
              } catch (e) {}
              var dirty = {};
              var flushTimer = null;
              function scheduleFlush() {
                clearTimeout(flushTimer);
                flushTimer = setTimeout(function() {
                  if (window.JiangZiAndroid && window.JiangZiAndroid.kvBatch) {
                    window.JiangZiAndroid.kvBatch(JSON.stringify(dirty));
                    dirty = {};
                  }
                }, 350);
              }
              var origSet = Storage.prototype.setItem;
              var origRem = Storage.prototype.removeItem;
              Storage.prototype.setItem = function(k, v) {
                origSet.call(this, k, v);
                if (this === window.localStorage) {
                  dirty[String(k)] = String(v);
                  scheduleFlush();
                }
              };
              Storage.prototype.removeItem = function(k) {
                origRem.call(this, k);
                if (this === window.localStorage) {
                  dirty[String(k)] = null;
                  scheduleFlush();
                }
              };
            })();
        """.trimIndent()
        webView.evaluateJavascript(js, null)
    }

    override fun onInit(status: Int) {
        if (status == TextToSpeech.SUCCESS) {
            val res = tts?.setLanguage(Locale.SIMPLIFIED_CHINESE)
            ttsReady = (res != TextToSpeech.LANG_MISSING_DATA && res != TextToSpeech.LANG_NOT_SUPPORTED)
        }
    }

    override fun onDestroy() {
        tts?.stop()
        tts?.shutdown()
        super.onDestroy()
    }

    inner class JiangZiBridge {
        @JavascriptInterface
        fun speak(text: String, rate: Double) {
            if (ttsReady && text.isNotBlank()) {
                tts?.setSpeechRate(rate.toFloat().coerceIn(0.45f, 1.5f))
                tts?.speak(text, TextToSpeech.QUEUE_FLUSH, null, "jz_utt")
            }
        }

        @JavascriptInterface
        fun haptic(kind: String) {
            runOnUiThread {
                val constant = when (kind) {
                    "tick" -> HapticFeedbackConstants.CLOCK_TICK
                    "light" -> HapticFeedbackConstants.KEYBOARD_TAP
                    "success" -> if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.R) HapticFeedbackConstants.CONFIRM else HapticFeedbackConstants.VIRTUAL_KEY
                    "error" -> if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.R) HapticFeedbackConstants.REJECT else HapticFeedbackConstants.LONG_PRESS
                    else -> HapticFeedbackConstants.LONG_PRESS
                }
                window.decorView.performHapticFeedback(constant)
            }
        }

        @JavascriptInterface
        fun setTheme(theme: String) {
            runOnUiThread {
                val isLight = theme != "dark"
                val bgHex = when (theme) {
                    "classic" -> "#F4F6F9"
                    "paper" -> "#F5EFE0"
                    "dark" -> "#0B1120"
                    else -> "#EAF0F8"
                }
                webView.setBackgroundColor(Color.parseColor(bgHex))
                WindowInsetsControllerCompat(window, window.decorView).apply {
                    isAppearanceLightStatusBars = isLight
                    isAppearanceLightNavigationBars = isLight
                }
            }
        }

        @JavascriptInterface
        fun kvBatch(jsonPayload: String) {
            try {
                val obj = JSONObject(jsonPayload)
                val editor = getSharedPreferences(prefsName, Context.MODE_PRIVATE).edit()
                val keys = obj.keys()
                while (keys.hasNext()) {
                    val k = keys.next()
                    if (obj.isNull(k)) editor.remove(k)
                    else editor.putString(k, obj.getString(k))
                }
                editor.apply()
            } catch (_: Exception) {}
        }
    }
}
