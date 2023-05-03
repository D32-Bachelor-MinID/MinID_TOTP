package d32.minid.mfa_totp_minid.idportenservices.DAO.repository;

import d32.minid.mfa_totp_minid.idportenservices.minidprofil.Crypto;
import org.springframework.data.repository.CrudRepository;

public interface CryptoRepository extends CrudRepository<Crypto, String> {

    Crypto findByUuid(String uuid);
}
