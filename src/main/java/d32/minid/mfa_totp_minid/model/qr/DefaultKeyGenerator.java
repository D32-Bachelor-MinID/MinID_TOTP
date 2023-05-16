package d32.minid.mfa_totp_minid.model.qr;

import org.apache.commons.codec.binary.Base32;

import java.security.SecureRandom;

/**
 * Generates a random secret key.
 */
@SuppressWarnings("WeakerAccess")
public class DefaultKeyGenerator implements KeyGenerator {

    private final SecureRandom randomBytes = new SecureRandom();
    private final static Base32 encoder = new Base32();
    private final int numCharacters;

    /**
     * Generates a secret key consisting of 32 characters.
     */
    public DefaultKeyGenerator() {
        this.numCharacters = 32;
    }

    /**
     * @param numCharacters The number of characters the secret should consist of.
     *                      Must be a multiple of 8. Defaults to 32
     */
    public DefaultKeyGenerator(int numCharacters) {
        this.numCharacters = numCharacters;
    }

    /**
     * Generates a random secret key.
     * @return The secret key, with length specified by the constructor.
     */
    @Override
    public String generate() {
        return new String(encoder.encode(getRandomBytes()));
    }

    /**
     * Generates a random byte array. for use in generating a secret key.
     */
    private byte[] getRandomBytes() {
        // 5 bits per char in base32
        byte[] bytes = new byte[(numCharacters * 5) / 8];
        randomBytes.nextBytes(bytes);

        return bytes;
    }
}
