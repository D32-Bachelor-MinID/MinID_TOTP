package d32.minid.mfa_totp_minid.controllers;

import d32.minid.mfa_totp_minid.repository.UserRepository;
import d32.minid.mfa_totp_minid.security.SessionHandler;
import d32.minid.mfa_totp_minid.user.User;
import jakarta.servlet.http.HttpSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class SettingsController {
    @Autowired
    UserRepository userRepository;
    @GetMapping("/settings")
    public String settings(HttpSession session, Model model) {
        SessionHandler sessionHandler = new SessionHandler(session);

        if (!sessionHandler.hasAttribute(session)) {
            session.invalidate();
            return "redirect:/";
        }

        User user = userRepository.findByPid((String) session.getAttribute("PID"));
        String mfa = user.getMfa_method();
        // TODO hent telefonnummer fra KRR api og vis det
        // temp for testing
        String phone = "99887766";

        mfa = switch (mfa) {
            case "OTC" -> "KODE PÅ SMS (" + phone + ")";
            case "APP" -> "MinID-app";
            case "TOTP" -> "TOTP applikasjon";
            default -> "None";
        };
        model.addAttribute("mfa", mfa);
        model.addAttribute("phone", phone);
        System.out.println(session.getAttribute("PID"));
        System.out.println(session.getId());
        return "settings";
    }
}
