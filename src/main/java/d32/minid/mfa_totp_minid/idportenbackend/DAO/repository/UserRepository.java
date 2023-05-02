package d32.minid.mfa_totp_minid.idportenbackend.DAO.repository;

import d32.minid.mfa_totp_minid.idportenbackend.minidprofil.User;
import org.springframework.data.repository.CrudRepository;

public interface UserRepository extends CrudRepository<User, String> {

    User findByPid(String pid);

}
