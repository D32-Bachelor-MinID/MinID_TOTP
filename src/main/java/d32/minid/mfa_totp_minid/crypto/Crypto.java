package d32.minid.mfa_totp_minid.crypto;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "crypto")
public class Crypto {
    @Id
    private String id;
    private String secret;

    public Crypto(String id, String secret){
        this.id = id;
        this.secret = secret;
    }
    public Crypto(){
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getSecret() {
        return secret;
    }

    public void setSecret(String secret) {
        this.secret = secret;
    }
}
