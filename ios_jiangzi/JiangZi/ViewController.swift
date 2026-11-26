import UIKit
import WebKit
import AVFoundation

final class ViewController: UIViewController, WKScriptMessageHandler, WKNavigationDelegate {
    private var webView: WKWebView!
    private let speechSynthesizer = AVSpeechSynthesizer()
    private var isDarkTheme = false
    private let storageBackupKey = "JiangZiLocalStorageBackup_v1"

    override var preferredStatusBarStyle: UIStatusBarStyle {
        return isDarkTheme ? .lightContent : .darkContent
    }

    override func viewDidLoad() {
        super.viewDidLoad()
        view.backgroundColor = UIColor(red: 0.918, green: 0.941, blue: 0.973, alpha: 1.0) // #EAF0F8

        let contentController = WKUserContentController()
        contentController.add(self, name: "jiangziNative")

        // Restore & mirror localStorage into native iOS UserDefaults so progress never gets evicted
        let savedDict = (UserDefaults.standard.dictionary(forKey: storageBackupKey) as? [String: String]) ?? [:]
        if let jsonData = try? JSONSerialization.data(withJSONObject: savedDict, options: []),
           let jsonString = String(data: jsonData, encoding: .utf8) {
            let bootstrapJS = """
            (function() {
              try {
                var backup = \(jsonString);
                Object.keys(backup).forEach(function(k) {
                  if (localStorage.getItem(k) === null) {
                    localStorage.setItem(k, backup[k]);
                  }
                });
              } catch (e) {}
              var origSet = Storage.prototype.setItem;
              var origRem = Storage.prototype.removeItem;
              Storage.prototype.setItem = function(k, v) {
                origSet.call(this, k, v);
                if (this === window.localStorage && window.webkit && window.webkit.messageHandlers && window.webkit.messageHandlers.jiangziNative) {
                  window.webkit.messageHandlers.jiangziNative.postMessage({ type: 'kvSet', key: String(k), value: String(v) });
                }
              };
              Storage.prototype.removeItem = function(k) {
                origRem.call(this, k);
                if (this === window.localStorage && window.webkit && window.webkit.messageHandlers && window.webkit.messageHandlers.jiangziNative) {
                  window.webkit.messageHandlers.jiangziNative.postMessage({ type: 'kvRem', key: String(k) });
                }
              };
            })();
            """
            let script = WKUserScript(source: bootstrapJS, injectionTime: .atDocumentStart, forMainFrameOnly: true)
            contentController.addUserScript(script)
        }

        let config = WKWebViewConfiguration()
        config.userContentController = contentController
        config.allowsInlineMediaPlayback = true
        config.mediaTypesRequiringUserActionForPlayback = []

        webView = WKWebView(frame: view.bounds, configuration: config)
        webView.autoresizingMask = [.flexibleWidth, .flexibleHeight]
        webView.navigationDelegate = self
        webView.isOpaque = false
        webView.backgroundColor = .clear
        webView.scrollView.backgroundColor = .clear
        webView.scrollView.bounces = false
        webView.scrollView.contentInsetAdjustmentBehavior = .never
        if #available(iOS 16.4, *) {
            webView.isInspectable = true
        }
        view.addSubview(webView)

        loadBundledJiangZiApp()
    }

    private func loadBundledJiangZiApp() {
        guard let indexURL = Bundle.main.url(forResource: "index", withExtension: "html", subdirectory: "WebApp") else {
            let fallbackHTML = "<h2 style='font-family:-apple-system;padding:40px'>Không tìm thấy thư mục WebApp trong Bundle.</h2>"
            webView.loadHTMLString(fallbackHTML, baseURL: nil)
            return
        }
        let webAppDir = indexURL.deletingLastPathComponent()
        webView.loadFileURL(indexURL, allowingReadAccessTo: webAppDir)
    }

    func userContentController(_ userContentController: WKUserContentController, didReceive message: WKScriptMessage) {
        guard let body = message.body as? [String: Any],
              let type = body["type"] as? String else { return }

        switch type {
        case "theme":
            if let theme = body["theme"] as? String {
                isDarkTheme = (theme == "dark")
                setNeedsStatusBarAppearanceUpdate()
            }

        case "speak":
            guard let text = body["text"] as? String, !text.isEmpty else { return }
            let jsRate = (body["rate"] as? Double) ?? 0.9
            if speechSynthesizer.isSpeaking {
                speechSynthesizer.stopSpeaking(at: .immediate)
            }
            let utterance = AVSpeechUtterance(string: text)
            utterance.voice = AVSpeechSynthesisVoice(language: "zh-CN")
            utterance.rate = max(0.25, min(0.62, AVSpeechUtteranceDefaultSpeechRate * Float(jsRate)))
            speechSynthesizer.speak(utterance)

        case "haptic":
            let kind = (body["kind"] as? String) ?? "light"
            switch kind {
            case "tick":
                let sel = UISelectionFeedbackGenerator()
                sel.selectionChanged()
            case "success":
                let notif = UINotificationFeedbackGenerator()
                notif.notificationOccurred(.success)
            case "error":
                let notif = UINotificationFeedbackGenerator()
                notif.notificationOccurred(.error)
            case "heavy":
                let imp = UIImpactFeedbackGenerator(style: .medium)
                imp.impactOccurred()
            default:
                let imp = UIImpactFeedbackGenerator(style: .light)
                imp.impactOccurred()
            }

        case "kvSet":
            guard let k = body["key"] as? String, let v = body["value"] as? String else { return }
            var dict = (UserDefaults.standard.dictionary(forKey: storageBackupKey) as? [String: String]) ?? [:]
            dict[k] = v
            UserDefaults.standard.set(dict, forKey: storageBackupKey)

        case "kvRem":
            guard let k = body["key"] as? String else { return }
            var dict = (UserDefaults.standard.dictionary(forKey: storageBackupKey) as? [String: String]) ?? [:]
            dict.removeValue(forKey: k)
            UserDefaults.standard.set(dict, forKey: storageBackupKey)

        default:
            break
        }
    }
}
