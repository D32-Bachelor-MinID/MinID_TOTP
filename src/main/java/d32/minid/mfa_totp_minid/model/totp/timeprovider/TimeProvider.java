package d32.minid.mfa_totp_minid.model.totp.timeprovider;

import java.time.Instant;

public class TimeProvider implements ITimeProvider {

     @Override
    public long getTime(){
        return Instant.now().getEpochSecond();
    }
}
