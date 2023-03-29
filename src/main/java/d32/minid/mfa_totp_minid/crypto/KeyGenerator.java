package d32.minid.mfa_totp_minid.crypto;


public interface KeyGenerator {
    /**
     * @return A random base32 encoded string to use as the shared secret/key between the server and the client.
     */
    String generate();
}
