package d32.minid.mfa_totp_minid.idporten.controllers;

import d32.minid.mfa_totp_minid.idportenservices.DAO.repository.UserRepository;
import d32.minid.mfa_totp_minid.idportenservices.user.User;
import jakarta.servlet.http.HttpSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

@Controller
public class ChangeMFAController {
    @Autowired
    private UserRepository userRepository;
    @GetMapping("/mfa_options")
    public String changeMFA(HttpSession session,Model model) {
        String phone = "99887766";
        User user = userRepository.findByPid((String) session.getAttribute("PID"));
        String mfaMethod = user.getMfa_method();

        boolean otc = false;
        boolean totp = false;
        boolean app = false;

        switch (mfaMethod) {
            case "OTC" -> otc = true;
            case "TOTP" -> totp = true;
            case "APP" -> app = true;
        }
        //display sms
        //display app if registered else blank
        //display totp if registered else link to register

        model.addAttribute("chosen-mfa", mfaMethod);
        model.addAttribute("otc", otc);
        model.addAttribute("totp", totp);
        model.addAttribute("app", app);
        model.addAttribute("phone", phone);


        System.out.println("get mfa_options");
        return "mfa_options";
    }

    @PostMapping("/mfa_options")
    public String changeMFA(HttpSession session, @RequestParam("chosen-mfa") String mfa) {

        System.out.println("post mfa_options");


        User user = userRepository.findByPid((String) session.getAttribute("PID"));
        if (mfa.equals(user.getMfa_method()))
            return "redirect:/settings";
        // Maybe add a check to see if user really want to change mfa method
        // redirect to a page where user can confirm change

        user.setMfa_method(mfa);
        userRepository.save(user);

        return "redirect:/settings";
    }
}