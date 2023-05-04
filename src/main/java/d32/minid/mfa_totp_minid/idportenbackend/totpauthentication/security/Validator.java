package d32.minid.mfa_totp_minid.idportenbackend.totpauthentication.security;

import at.favre.lib.crypto.bcrypt.BCrypt;
import d32.minid.mfa_totp_minid.idportenbackend.minidprofil.Crypto;
import d32.minid.mfa_totp_minid.idportenbackend.minidprofil.User;
import d32.minid.mfa_totp_minid.idportenbackend.totpauthentication.totp.Totp;
import d32.minid.mfa_totp_minid.idportenbackend.totpauthentication.totp.timeprovider.ITimeProvider;

public class Validator {

    private ITimeProvider timer;
    private Totp totp;
    private final int timePeriod = 30;

    public Validator(Totp totp, ITimeProvider tp) {
        this.totp = totp;
        this.timer = tp;
    }

    public Validator() {

    }


    public boolean validTotp(Crypto crypto, String userCode){
        if(!crypto.getPrevinput().equals(userCode)){
            return isCorrectTotp(crypto.getSecret(), userCode);
        } else {
            return false;
        }
    }

    public boolean isCorrectTotp(String secret, String userCode) {
        return totp.runTOTP(secret, timer.getTime()).equals(userCode) ||
                totp.runTOTP(secret, timer.getTime() - timePeriod).equals(userCode);
    }
    public boolean validPassword(User user, String password){
        return BCrypt.verifyer().verify(password.toCharArray(), user.getPassword()).verified;
    }
}
