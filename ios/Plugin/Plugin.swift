import Foundation
import Capacitor

@objc(IosSwipeBack)
public class IosSwipeBack: CAPPlugin {
    
    @objc func enable(_ call: CAPPluginCall) {
        self.webView?.allowsBackForwardNavigationGestures = true;
        call.resolve([
            "error": 0
            ]);
    }

    @objc func disable(_ call: CAPPluginCall) {
        self.webView?.allowsBackForwardNavigationGestures = false;
        call.resolve([
            "error": 0
            ]);
    }
}
