package ec.sasf.prueba.jeremy.tierra.persistence.repository;

import ec.sasf.prueba.jeremy.tierra.persistence.entity.PaqueteEntity;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PaqueteRepository extends CrudRepository<PaqueteEntity, Long> {
}
