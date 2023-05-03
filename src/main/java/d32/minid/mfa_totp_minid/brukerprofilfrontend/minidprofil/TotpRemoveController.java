package d32.minid.mfa_totp_minid.brukerprofilfrontend.minidprofil;

import d32.minid.mfa_totp_minid.idportenbackend.DAO.repository.UserRepository;
import d32.minid.mfa_totp_minid.idportenbackend.minidprofil.User;
import jakarta.servlet.http.HttpSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.oauth2.client.OAuth2AuthorizedClient;
import org.springframework.security.oauth2.client.annotation.RegisteredOAuth2AuthorizedClient;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;

@Controller
public class TotpRemoveController {
    @Autowired
    private UserRepository userRepository;

    @GetMapping("/totpRemove")
    public String totpRemove(@RegisteredOAuth2AuthorizedClient("idporten") OAuth2AuthorizedClient authorizedClient, HttpSession session){
        if (session.getAttribute("PID") == null) {
            return "redirect:/loginn";
        }
        return "totpRemove";
    }
    @PostMapping("/totpRemove")
    public String totpRemovePost(HttpSession session) {
        User user = userRepository.findByPid((String) session.getAttribute("PID"));
        user.setMfa_method("OTC");
        return "redirect:/mfa_options";
    }
}
