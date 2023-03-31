package d32.minid.mfa_totp_minid.security;

import d32.minid.mfa_totp_minid.crypto.Totp;
import d32.minid.mfa_totp_minid.time.TimeProvider;

public class Validator {

    private final TimeProvider tp;
    private final Totp totp;
    private final int timePeriod = 30;

    public Validator(Totp totp, TimeProvider tp) {
        this.totp = totp;
        this.tp = tp;
    }

    public boolean isCorrectTotp(String secret, String userCode) {
        long currentTimestep = Math.floorDiv(tp.getTime(), timePeriod);
        return totp.runTOTP(secret, currentTimestep).equals(userCode) ||
                totp.runTOTP(secret, currentTimestep - 1).equals(userCode);
    }
//ikke la mer enn 1 verifisering skje per totp kode
}
