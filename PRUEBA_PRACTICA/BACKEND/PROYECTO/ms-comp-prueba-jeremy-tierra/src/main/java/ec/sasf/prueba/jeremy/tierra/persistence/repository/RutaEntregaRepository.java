package ec.sasf.prueba.jeremy.tierra.persistence.repository;

import ec.sasf.prueba.jeremy.tierra.persistence.entity.RutaEntregaEntity;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RutaEntregaRepository extends CrudRepository<RutaEntregaEntity, Long> {
}
