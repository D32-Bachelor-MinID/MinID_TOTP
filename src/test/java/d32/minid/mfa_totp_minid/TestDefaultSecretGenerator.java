package d32.minid.mfa_totp_minid;

import d32.minid.mfa_totp_minid.crypto.DefaultKeyGenerator;
import org.junit.Assert;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

@RunWith(SpringRunner.class)
@SpringBootTest
public class TestDefaultSecretGenerator {
    private DefaultKeyGenerator keygen = new DefaultKeyGenerator();

    @Test
    public void shouldGenerateKey() {
        String output = keygen.generate();
        Assert.assertNotNull(output);
        Assert.assertEquals(32, output.length());
    }

    @Test
    public void shouldMakeKeysOfDifferentLengths() {
        var keyGens16 = new DefaultKeyGenerator(16);
        var keyGens32 = new DefaultKeyGenerator(32);
        var keyGens64 = new DefaultKeyGenerator(64);
        Assert.assertEquals(16, keyGens16.generate().length());
        Assert.assertEquals(32, keyGens32.generate().length());
        Assert.assertEquals(64, keyGens64.generate().length());
    }
}