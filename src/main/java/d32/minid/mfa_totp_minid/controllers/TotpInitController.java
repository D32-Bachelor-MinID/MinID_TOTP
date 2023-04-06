package d32.minid.mfa_totp_minid.controllers;

import d32.minid.mfa_totp_minid.crypto.Crypto;
import d32.minid.mfa_totp_minid.crypto.Totp;
import d32.minid.mfa_totp_minid.qrcode.QrData;
import d32.minid.mfa_totp_minid.qrcode.QrGenerator;
import d32.minid.mfa_totp_minid.repository.CryptoRepository;
import d32.minid.mfa_totp_minid.repository.UserRepository;
import d32.minid.mfa_totp_minid.security.Validator;
import d32.minid.mfa_totp_minid.time.TimeProvider;
import d32.minid.mfa_totp_minid.user.User;
import jakarta.servlet.http.HttpSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;

@Controller
public class TotpInitController {
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private CryptoRepository cryptoRepository;

    @GetMapping("/totpInit")
    public String totpinit() {
        return "totpinit";
    }

    @GetMapping("/stepTwo")
    public String stepTwo(HttpSession session, Model model) {
        QrGenerator qrGenerator = new QrGenerator();
        User user = userRepository.findByPid((String) session.getAttribute("PID"));
        QrData qrData = qrGenerator.qrSetup(user);

        cryptoRepository.save(new Crypto(user.getUuid(), qrData.getSecret(), ""));
        model.addAttribute("dataUri", qrGenerator.getUriForImage(qrData, "image/png"));

        return "totpReg";
    }
    @PostMapping ("/stepTwo")
    public String stepTwoPost(String totpinput, HttpSession session, Model model) {
        System.out.println("POST to stepTwo");
        User user = userRepository.findByPid((String) session.getAttribute("PID"));
        Crypto crypto = cryptoRepository.findByUuid(user.getUuid());
        Validator validator = new Validator(new Totp(), new TimeProvider());
        if (validator.validTotp(crypto, totpinput)) {
            System.out.println("TOTP valid, saving user");
            user.setMfa_method("TOTP");
            userRepository.save(user);
            return "redirect:/settings";
        }
        model.addAttribute("Error", "Invalid TOTP");
        System.out.println("TOTP invalid, returning to totpReg");
        QrData qr = new QrData("totp", user.getPid(), crypto.getSecret(), "MinID", "SHA1", 6, 30);
        QrGenerator qrGenerator = new QrGenerator();
        model.addAttribute("dataUri", qrGenerator.getUriForImage(qr, "image/png"));
        return "totpReg";
    }

}
