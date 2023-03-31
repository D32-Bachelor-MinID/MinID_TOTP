package d32.minid.mfa_totp_minid.repository;

import d32.minid.mfa_totp_minid.crypto.Crypto;
import org.springframework.data.repository.CrudRepository;

public interface CryptoRepository extends CrudRepository<Crypto, String> {

    Crypto findByCryptoId(String id);
}
