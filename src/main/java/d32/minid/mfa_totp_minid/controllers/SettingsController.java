package d32.minid.mfa_totp_minid.controllers;

import d32.minid.mfa_totp_minid.repository.UserRepository;
import d32.minid.mfa_totp_minid.security.SessionHandler;
import d32.minid.mfa_totp_minid.user.User;
import jakarta.servlet.http.HttpSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.PropertySource;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.client.RestTemplate;

@PropertySource("classpath:application.properties")
@Controller
public class SettingsController {
    @Autowired
    UserRepository userRepository;
    @Autowired
    RestTemplate template;
    @Value("${rest.api.url.base}")
    private String url;
    @GetMapping("/settings")
    public String settings(HttpSession session, Model model) {
        SessionHandler sessionHandler = new SessionHandler(session);

        if (!sessionHandler.hasAttribute(session)) {
            session.invalidate();
            return "redirect:/";
        }

        User user = userRepository.findByPid((String) session.getAttribute("PID"));
        String mfa = user.getMfa_method();

        String phone = template.getForEntity(url + "/tlf", String.class).getBody();

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
