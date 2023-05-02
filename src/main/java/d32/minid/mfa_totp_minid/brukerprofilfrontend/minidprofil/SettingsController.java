package d32.minid.mfa_totp_minid.brukerprofilfrontend.minidprofil;

import d32.minid.mfa_totp_minid.idportenbackend.DAO.repository.UserRepository;
import d32.minid.mfa_totp_minid.idportenbackend.totpauthentication.security.SessionHandler;
import d32.minid.mfa_totp_minid.idportenbackend.minidprofil.User;
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
    SessionHandler sessionHandler;
    @GetMapping("/settings")
    public String settings(HttpSession session, Model model) {

        this.sessionHandler = new SessionHandler(session);

        if (!sessionHandler.hasAttribute(session)) {
            session.invalidate();
            return "redirect:/";
        }

        String pid = (String) session.getAttribute("PID");
        User user = userRepository.findByPid(pid);
        String mfa = user.getMfa_method();
        String phone = MockKRR.findUser(pid);

        mfa = switch (mfa) {
            case "OTC" -> "KODE PÅ SMS (" + phone + ")";
            case "APP" -> "MinID-app";
            case "TOTP" -> "TOTP applikasjon";
            default -> "None";
        };

        model.addAttribute("changePhone", false);
        model.addAttribute("unit", "IPhone 13 - IOS 16.5 Public Beta 3");
        model.addAttribute("mfa", mfa);
        model.addAttribute("phone", phone);
        return "settings";
    }




    @GetMapping("newPhone")
    public String newPhone(HttpSession session, Model model) {

        if (!sessionHandler.hasAttribute(session)) {
            session.invalidate();
            return "redirect:/";
        }

        String pid = (String) session.getAttribute("PID");
        User user = userRepository.findByPid(pid);
        String mfa = user.getMfa_method();
        String phone = MockKRR.findUser(pid);

        mfa = switch (mfa) {
            case "OTC" -> "KODE PÅ SMS (" + phone + ")";
            case "APP" -> "MinID-app";
            case "TOTP" -> "TOTP applikasjon";
            default -> "None";
        };

        model.addAttribute("changePhone", true);
        model.addAttribute("unit", "IPhone 13 - IOS 16.5 Public Beta 3");
        model.addAttribute("mfa", mfa);
        model.addAttribute("phone", phone);
        return "settings";
    }
}
