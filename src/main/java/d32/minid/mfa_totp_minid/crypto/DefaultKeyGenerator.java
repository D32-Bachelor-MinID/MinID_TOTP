package d32.minid.mfa_totp_minid.crypto;

import org.apache.commons.codec.binary.Base32;

import java.security.SecureRandom;

@SuppressWarnings("WeakerAccess")
public class DefaultKeyGenerator implements KeyGenerator {

    private final SecureRandom randomBytes = new SecureRandom();
    private final static Base32 encoder = new Base32();
    private final int numCharacters;

    public DefaultKeyGenerator() {
        this.numCharacters = 32;
    }

    /**
     * @param numCharacters The number of characters the secret should consist of.
     */
    public DefaultKeyGenerator(int numCharacters) {
        this.numCharacters = numCharacters;
    }

    @Override
    public String generate() {
        return new String(encoder.encode(getRandomBytes()));
    }

    private byte[] getRandomBytes() {
        // 5 bits per char in base32
        byte[] bytes = new byte[(numCharacters * 5) / 8];
        randomBytes.nextBytes(bytes);

        return bytes;
    }
}
