package d32.minid.mfa_totp_minid.security;

import d32.minid.mfa_totp_minid.crypto.Crypto;
import d32.minid.mfa_totp_minid.crypto.Totp;
import d32.minid.mfa_totp_minid.time.ITimeProvider;

public class Validator {

    private final ITimeProvider timer;
    private final Totp totp;
    private final int timePeriod = 30;

    public Validator(Totp totp, ITimeProvider tp) {
        this.totp = totp;
        this.timer = tp;
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
}
