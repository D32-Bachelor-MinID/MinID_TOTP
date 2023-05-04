package d32.minid.mfa_totp_minid.idportenbackend.utils;

import at.favre.lib.crypto.bcrypt.BCrypt;
import d32.minid.mfa_totp_minid.idportenbackend.DAO.repository.CryptoRepository;
import d32.minid.mfa_totp_minid.idportenbackend.DAO.repository.UserRepository;
import d32.minid.mfa_totp_minid.idportenbackend.minidprofil.Crypto;
import d32.minid.mfa_totp_minid.idportenbackend.minidprofil.User;
import d32.minid.mfa_totp_minid.idportenbackend.totpauthentication.qrcode.QrData;
import d32.minid.mfa_totp_minid.idportenbackend.totpauthentication.qrcode.QrGenerator;
import d32.minid.mfa_totp_minid.idportenbackend.totpauthentication.security.Validator;
import d32.minid.mfa_totp_minid.idportenbackend.totpauthentication.totp.Totp;
import d32.minid.mfa_totp_minid.idportenbackend.totpauthentication.totp.timeprovider.TimeProvider;
import d32.minid.mfa_totp_minid.kkr.MockKRR;
import jakarta.servlet.http.HttpSession;
import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.stereotype.Service;

@Service
public class Utils {
    @Autowired
    private UserRepository userRepository;
    @Autowired
    CryptoRepository cryptoRepository;
    Validator validator = new Validator();
    public Utils() {

    }
    public boolean sessionContainsPid(HttpSession session) {
        return session.getAttribute("PID") != null;
    }
    public boolean userExists(String pid) {
        User user = userRepository.findByPid(pid);
        return user != null;
    }
    public boolean userIsQuarantined(String pid) {
        User user = userRepository.findByPid(pid);
        return user.getQuarantine_expiry_ms() > System.currentTimeMillis();
    }
    public boolean loginSuccess(String pid, String password) {
        User user = userRepository.findByPid(pid);
        assert user != null;
        if(validator.validPassword(user, password)) {
            user.setPassword_error_counter(0);
            userRepository.save(user);
            System.out.println("Login success");
            return true;
        }
        user.setPassword_error_counter(user.getPassword_error_counter() + 1);
        userRepository.save(user);
        System.out.println("Login Failed");
        return false;
    }
    public boolean userErrorCounterExceeded(String pid) {
        User user = userRepository.findByPid(pid);
        assert user != null;
        return user.getPassword_error_counter() >= 3;
    }
    public void quarantineUser(String pid) {
        User user = userRepository.findByPid(pid);
        assert user != null;
        user.setQuarantine_expiry_ms(System.currentTimeMillis() + 3600000);
        user.setPassword_error_counter(0);
        userRepository.save(user);
    }
    public User getUser(HttpSession session) {
        String pid = (String) session.getAttribute("PID");
        return userRepository.findByPid(pid);
    }
    public void otcSuccess(User user) {
        user.setLast_login_ms(System.currentTimeMillis());
        user.setMfa_error_counter(0);
        userRepository.save(user);
    }
    public void mfaErrorIncrement(User user) {
        user.setMfa_error_counter(user.getMfa_error_counter() + 1);
        userRepository.save(user);
    }
    public boolean totpSuccess(User user, String totp) {
        Validator validator = new Validator(new Totp(), new TimeProvider());
        Crypto crypto = cryptoRepository.findByUuid(user.getUuid());
        assert crypto != null;
        if(validator.validTotp(crypto, totp)) {
            crypto.setPrevinput(totp);
            cryptoRepository.save(crypto);
            user.setLast_login_ms(System.currentTimeMillis());
            user.setMfa_error_counter(0);
            userRepository.save(user);
            return true;
        }
        user.setMfa_error_counter(user.getMfa_error_counter() + 1);
        userRepository.save(user);
        return false;
    }
    public String userPhone(HttpSession session) {
        String pid = (String) session.getAttribute("PID");
        User user = userRepository.findByPid(pid);
        assert user != null;
        return MockKRR.findUser(user.getPid());
    }
    public String userMfaMethod(HttpSession session) {
        String pid = (String) session.getAttribute("PID");
        User user = userRepository.findByPid(pid);
        assert user != null;
        return user.getMfa_method();
    }
    public void updateMfaMethod(HttpSession session, String method) {
        String pid = (String) session.getAttribute("PID");
        User user = userRepository.findByPid(pid);
        assert user != null;
        user.setMfa_method(method);
        userRepository.save(user);
    }
    public void updatePassword(HttpSession session, String password) {
        String pid = (String) session.getAttribute("PID");
        User user = userRepository.findByPid(pid);
        assert user != null;
        user.setPassword(BCrypt.withDefaults().hashToString(12, password.toCharArray()));
        userRepository.save(user);
    }
    public String generateQrCode(HttpSession session) {
        QrGenerator qrGenerator = new QrGenerator();
        User user = getUser(session);
        assert user != null;
        QrData qrData = qrGenerator.qrSetup(user);
        cryptoRepository.save(new Crypto(user.getUuid(), qrData.getSecret(),""));
        return qrGenerator.getUriForImage(qrData, "image/png");
    }
    public boolean validateTotpSetup(String totp, HttpSession session) {
        User user = getUser(session);
        Crypto crypto = cryptoRepository.findByUuid(user.getUuid());
        Validator validator = new Validator(new Totp(), new TimeProvider());
        assert crypto != null;
        return validator.validTotp(crypto, totp);
    }
    public String recreateQrCode(HttpSession session) {
        User user = getUser(session);
        QrData qrData = new QrData("totp", user.getPid(), cryptoRepository.findByUuid(user.getUuid()).getSecret(), "MinID", "SHA1", 6,30);
        QrGenerator qrGenerator = new QrGenerator();
        return qrGenerator.getUriForImage(qrData, "image/png");
    }
}
