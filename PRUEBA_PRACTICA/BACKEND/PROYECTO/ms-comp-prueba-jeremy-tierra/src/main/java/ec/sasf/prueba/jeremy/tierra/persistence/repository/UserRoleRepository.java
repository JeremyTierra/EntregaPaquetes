package ec.sasf.prueba.jeremy.tierra.persistence.repository;


import ec.sasf.prueba.jeremy.tierra.persistence.entity.UserRoleEntity;
import ec.sasf.prueba.jeremy.tierra.persistence.entity.UserRoleId;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRoleRepository extends JpaRepository<UserRoleEntity, UserRoleId> {

}
