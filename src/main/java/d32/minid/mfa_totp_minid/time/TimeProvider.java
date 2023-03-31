package d32.minid.mfa_totp_minid.time;

import java.time.Instant;

public class TimeProvider {

    public long getTime(){
        return Instant.now().getEpochSecond();
    }
}
