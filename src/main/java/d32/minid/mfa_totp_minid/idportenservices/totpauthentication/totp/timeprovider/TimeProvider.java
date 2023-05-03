package d32.minid.mfa_totp_minid.idportenservices.totpauthentication.totp.timeprovider;

import java.time.Instant;

public class TimeProvider implements ITimeProvider {

     @Override
    public long getTime(){
        return Instant.now().getEpochSecond();
    }
}
