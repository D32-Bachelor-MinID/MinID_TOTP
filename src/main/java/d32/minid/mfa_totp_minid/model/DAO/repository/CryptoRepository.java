package d32.minid.mfa_totp_minid.model.DAO.repository;

import d32.minid.mfa_totp_minid.model.DAO.Crypto;
import org.springframework.data.repository.CrudRepository;

public interface CryptoRepository extends CrudRepository<Crypto, String> {

    Crypto findByUuid(String uuid);
}
