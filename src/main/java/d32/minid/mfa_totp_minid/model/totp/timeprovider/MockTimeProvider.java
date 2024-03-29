package d32.minid.mfa_totp_minid.model.totp.timeprovider;

public class MockTimeProvider implements ITimeProvider {

    long testTime;

    public MockTimeProvider() {
        testTime = 2000000000L; // default testing value
    }

    @Override
    public long getTime() {
        return testTime;
    }

    public void setTime(long time) {
        testTime = time;
    }

}
