package d32.minid.mfa_totp_minid.brukerprofilfrontend.minidprofil;

import d32.minid.mfa_totp_minid.idportenbackend.utils.Utils;
import jakarta.servlet.http.HttpSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.oauth2.client.OAuth2AuthorizedClient;
import org.springframework.security.oauth2.client.annotation.RegisteredOAuth2AuthorizedClient;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;

import java.util.Objects;

@Controller
public class TotpInitController {
    @Autowired
    Utils utils;

    @GetMapping("/totpInit")
    public String totpinit(@RegisteredOAuth2AuthorizedClient("idporten") OAuth2AuthorizedClient authorizedClient, HttpSession session) {
        if (!utils.sessionContainsPid(session)) {
            return "redirect:/loginn";
        }
        return "totpinit";
    }

    @GetMapping("/stepTwo")
    public String stepTwo(HttpSession session, Model model) {

        model.addAttribute("dataUri", utils.generateQrCode(session));
        model.addAttribute("manualEntry", utils.getCrypto(session));
        return "totpReg";
    }
    @PostMapping ("/stepTwo")
    public String stepTwoPost(String totpinput, HttpSession session, Model model, String cancel) {
        if (Objects.equals(cancel, "cancel")) {
            utils.removeCrypto(session);
            return "redirect:/settings";
        }
        if (utils.validateTotpSetup(totpinput,session)) {
            utils.updateMfaMethod(session, "TOTP");
            return "redirect:/settings";
        }
        model.addAttribute("Error", "Invalid TOTP");
        model.addAttribute("dataUri", utils.recreateQrCode(session));
        model.addAttribute("manualEntry", utils.getCrypto(session));
        return "totpReg";
    }

}
