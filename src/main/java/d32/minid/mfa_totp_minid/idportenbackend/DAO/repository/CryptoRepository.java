package d32.minid.mfa_totp_minid.idportenbackend.DAO.repository;

import d32.minid.mfa_totp_minid.idportenbackend.minidprofil.Crypto;
import org.springframework.data.repository.CrudRepository;

public interface CryptoRepository extends CrudRepository<Crypto, String> {

    Crypto findByUuid(String uuid);
}
