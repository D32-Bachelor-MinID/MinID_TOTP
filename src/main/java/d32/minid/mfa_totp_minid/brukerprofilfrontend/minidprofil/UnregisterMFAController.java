package d32.minid.mfa_totp_minid.brukerprofilfrontend.minidprofil;

import d32.minid.mfa_totp_minid.idportenbackend.utils.Utils;
import jakarta.servlet.http.HttpSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.oauth2.client.OAuth2AuthorizedClient;
import org.springframework.security.oauth2.client.annotation.RegisteredOAuth2AuthorizedClient;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;

@Controller
public class UnregisterMFAController {
    @Autowired
    Utils utils;

    @GetMapping("/unregistermfa")
    public String totpRemove(@RegisteredOAuth2AuthorizedClient("idporten") OAuth2AuthorizedClient authorizedClient, HttpSession session){
        if (!utils.sessionContainsPid(session)) {
            return "redirect:/loginn";
        }
        return "unregistermfa";
    }
    @PostMapping("/unregistermfa")
    public String totpRemovePost(HttpSession session) {
        utils.updateMfaMethod(session, "OTC");
        utils.removeCrypto(session);
        return "redirect:/settings";
    }
}
