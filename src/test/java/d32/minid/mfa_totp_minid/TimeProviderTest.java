package d32.minid.mfa_totp_minid;

import d32.minid.mfa_totp_minid.model.totp.timeprovider.TimeProvider;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import static org.junit.jupiter.api.Assertions.*;

@RunWith(SpringRunner.class)
@SpringBootTest
public class TimeProviderTest {

    TimeProvider timeProvider;

    @Test
    public void shouldReturnTime() {
        timeProvider = new TimeProvider();
        long time = timeProvider.getTime();
        assertTrue(time > 0);
    }

}