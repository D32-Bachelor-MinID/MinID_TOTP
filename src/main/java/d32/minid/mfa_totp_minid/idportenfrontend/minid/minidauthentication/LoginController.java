package d32.minid.mfa_totp_minid.idportenfrontend.minid.minidauthentication;

import at.favre.lib.crypto.bcrypt.BCrypt;
import d32.minid.mfa_totp_minid.idportenbackend.DAO.repository.UserRepository;
import d32.minid.mfa_totp_minid.idportenbackend.totpauthentication.security.SessionHandler;
import d32.minid.mfa_totp_minid.idportenbackend.minidprofil.User;
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
public class LoginController {
    @Autowired
    private UserRepository userRepository;

    @GetMapping("/loginn")
    public String login(@RegisteredOAuth2AuthorizedClient("idporten") OAuth2AuthorizedClient authorizedClient, HttpSession session, Model model) {
        SessionHandler sessionHandler = new SessionHandler(session);
        if(sessionHandler.getSession().getAttribute("PID") == null) {
            model.addAttribute("service", "Digitaliseringsdirektoratet");
            return "loginn";
        }
        return "redirect:/mfa";
    }
    @PostMapping("/loginn")
    public String loginPost(String pid, String password, HttpSession session, Model model) {
        User user = userRepository.findByPid(pid);
        if (Objects.nonNull(user) && user.getQuarantine_expiry_ms() > System.currentTimeMillis()) {
            model.addAttribute("quarantineError", "Account is quarantined");
            System.out.println("Account is quarantined for " + (user.getQuarantine_expiry_ms() - System.currentTimeMillis()) / 1000 + " seconds");
            return "loginn";
        }
        if (Objects.nonNull(user) && BCrypt.verifyer().verify(password.toCharArray(), user.getPassword()).verified) {
            session.setAttribute("PID", pid);
            user.setPassword_error_counter(0);
            userRepository.save(user);
            return "redirect:/mfa";
        }
        user.setPassword_error_counter(user.getPassword_error_counter() + 1);
        if(user.getPassword_error_counter() >= 3) {
            user.setQuarantine_expiry_ms(System.currentTimeMillis() + 3600000);
            user.setPassword_error_counter(0);
        }
        userRepository.save(user);
        model.addAttribute("loginError", "Invalid username or password");
        return "loginn";
    }
}
