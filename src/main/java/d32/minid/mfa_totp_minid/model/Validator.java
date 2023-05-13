package d32.minid.mfa_totp_minid.model;

import d32.minid.mfa_totp_minid.model.DAO.Crypto;
import d32.minid.mfa_totp_minid.model.totp.Totp;
import d32.minid.mfa_totp_minid.model.totp.timeprovider.ITimeProvider;

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
}
