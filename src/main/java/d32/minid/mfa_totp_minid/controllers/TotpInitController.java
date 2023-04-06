package d32.minid.mfa_totp_minid.controllers;

import d32.minid.mfa_totp_minid.crypto.Crypto;
import d32.minid.mfa_totp_minid.qrcode.QrData;
import d32.minid.mfa_totp_minid.qrcode.QrGenerator;
import d32.minid.mfa_totp_minid.repository.CryptoRepository;
import d32.minid.mfa_totp_minid.repository.UserRepository;
import d32.minid.mfa_totp_minid.user.User;
import jakarta.servlet.http.HttpSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

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
}
