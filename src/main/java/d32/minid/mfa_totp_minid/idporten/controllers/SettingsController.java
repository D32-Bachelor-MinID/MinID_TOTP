package d32.minid.mfa_totp_minid.idporten.controllers;

import d32.minid.mfa_totp_minid.idportenservices.DAO.repository.UserRepository;
import d32.minid.mfa_totp_minid.idportenservices.utils.security.SessionHandler;
import d32.minid.mfa_totp_minid.idportenservices.user.User;
import d32.minid.mfa_totp_minid.kkr.MockKRR;
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
        String phone = MockKRR.findUser((session.getAttribute("PID").toString()));

        mfa = switch (mfa) {
            case "OTC" -> "KODE PÅ SMS (" + phone + ")";
            case "APP" -> "MinID-app";
            case "TOTP" -> "TOTP applikasjon";
            default -> "None";
        };

        model.addAttribute("unit", "IPhone 13 - IOS 16.5 Public Beta 3");
        model.addAttribute("mfa", mfa);
        model.addAttribute("phone", phone);
        System.out.println(session.getAttribute("PID"));
        System.out.println(session.getId());
        return "settings";
    }
}
