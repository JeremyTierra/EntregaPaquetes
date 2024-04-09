package ec.sasf.prueba.jeremy.tierra.service;

import ec.sasf.prueba.jeremy.tierra.persistence.entity.RutaEntregaEntity;
import ec.sasf.prueba.jeremy.tierra.persistence.repository.RutaEntregaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Service
public class RutaEntregaService {

    private final RutaEntregaRepository rutaEntregaRepository;

    @Autowired
    public RutaEntregaService(RutaEntregaRepository rutaEntregaRepository) {
        this.rutaEntregaRepository = rutaEntregaRepository;
    }

    @Transactional
    public RutaEntregaEntity saveRutaEntrega(RutaEntregaEntity rutaEntrega) {
        return rutaEntregaRepository.save(rutaEntrega);
    }

    public Optional<RutaEntregaEntity> findById(Long id) {
        return rutaEntregaRepository.findById(id);
    }

    public List<RutaEntregaEntity> findAllRutasEntrega() {
        return (List<RutaEntregaEntity>) rutaEntregaRepository.findAll();
    }

    @Transactional
    public void deleteRutaEntregaById(Long id) {
        rutaEntregaRepository.deleteById(id);
    }

    @Transactional
    public void updateRutaEntrega(RutaEntregaEntity updatedRutaEntrega) {
        if (!rutaEntregaRepository.existsById(updatedRutaEntrega.getId())) {
            throw new IllegalArgumentException("No se encontró una ruta de entrega con el ID proporcionado.");
        }
        rutaEntregaRepository.save(updatedRutaEntrega);
    }
}
