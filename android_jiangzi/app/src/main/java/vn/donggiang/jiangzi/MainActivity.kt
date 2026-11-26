package vn.donggiang.jiangzi

import android.annotation.SuppressLint
import android.content.Context
import android.graphics.Color
import android.os.Bundle
import android.speech.tts.TextToSpeech
import android.webkit.JavascriptInterface
import android.webkit.WebResourceRequest
import android.webkit.WebResourceResponse
import android.webkit.WebSettings
import android.webkit.WebView
import android.webkit.WebViewClient
import androidx.activity.ComponentActivity
import androidx.activity.OnBackPressedCallback
import androidx.core.view.WindowCompat
import androidx.core.view.WindowInsetsControllerCompat
import androidx.webkit.WebViewAssetLoader
import org.json.JSONObject
import java.util.Locale

class MainActivity : ComponentActivity(), TextToSpeech.OnInitListener {
    private lateinit var webView: WebView
    private var tts: TextToSpeech? = null
    private var ttsReady = false
    private val prefsName = "JiangZiStorageBackup_v1"

    @SuppressLint("SetJavaScriptEnabled")
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)

        // Clean status & navigation bar styling matching JiangZi themes
        window.statusBarColor = Color.parseColor("#EAF0F8")
        window.navigationBarColor = Color.parseColor("#EAF0F8")
        WindowCompat.getInsetsController(window, window.decorView).apply {
            isAppearanceLightStatusBars = true
            isAppearanceLightNavigationBars = true
        }

        tts = TextToSpeech(this, this)

        // Serve bundled hanzi_web over https://appassets.androidplatform.net/assets/www/
        // so Service Worker, localStorage, and CDN fetches work cleanly with HTTPS origin!
        val assetLoader = WebViewAssetLoader.Builder()
            .addPathHandler("/assets/", WebViewAssetLoader.AssetsPathHandler(this))
            .build()

        webView = WebView(this).apply {
            setBackgroundColor(Color.parseColor("#EAF0F8"))
            overScrollMode = WebView.OVER_SCROLL_NEVER
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
                    injectStorageMirror()
                }
            }
        }

        setContentView(webView)
        webView.loadUrl("https://appassets.androidplatform.net/assets/www/index.html")

        // Intercept Android Back button / gesture so inner screens close smoothly first
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

    private fun injectStorageMirror() {
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
              var origSet = Storage.prototype.setItem;
              var origRem = Storage.prototype.removeItem;
              Storage.prototype.setItem = function(k, v) {
                origSet.call(this, k, v);
                if (this === window.localStorage && window.JiangZiAndroid) {
                  window.JiangZiAndroid.kvSet(String(k), String(v));
                }
              };
              Storage.prototype.removeItem = function(k) {
                origRem.call(this, k);
                if (this === window.localStorage && window.JiangZiAndroid) {
                  window.JiangZiAndroid.kvRem(String(k));
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
        fun setTheme(theme: String) {
            runOnUiThread {
                val bgHex = when (theme) {
                    "classic" -> "#F4F6F9"
                    "paper" -> "#F5EFE0"
                    "dark" -> "#0B1120"
                    else -> "#EAF0F8"
                }
                val isLight = theme != "dark"
                val color = Color.parseColor(bgHex)
                window.statusBarColor = color
                window.navigationBarColor = color
                WindowInsetsControllerCompat(window, window.decorView).apply {
                    isAppearanceLightStatusBars = isLight
                    isAppearanceLightNavigationBars = isLight
                }
            }
        }

        @JavascriptInterface
        fun kvSet(key: String, value: String) {
            getSharedPreferences(prefsName, Context.MODE_PRIVATE)
                .edit()
                .putString(key, value)
                .apply()
        }

        @JavascriptInterface
        fun kvRem(key: String) {
            getSharedPreferences(prefsName, Context.MODE_PRIVATE)
                .edit()
                .remove(key)
                .apply()
        }
    }
}
