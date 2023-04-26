package d32.minid.mfa_totp_minid.idportenservices.DAO.repository;

import d32.minid.mfa_totp_minid.idportenservices.DAO.user.User;
import org.springframework.data.repository.CrudRepository;

public interface UserRepository extends CrudRepository<User, String> {

    User findByPid(String pid);

}
