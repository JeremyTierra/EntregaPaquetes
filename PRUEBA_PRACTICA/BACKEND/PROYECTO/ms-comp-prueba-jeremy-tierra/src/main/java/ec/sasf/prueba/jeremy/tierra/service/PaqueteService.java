package ec.sasf.prueba.jeremy.tierra.service;

import ec.sasf.prueba.jeremy.tierra.persistence.entity.PaqueteEntity;
import ec.sasf.prueba.jeremy.tierra.persistence.repository.PaqueteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Service
public class PaqueteService {

    private final PaqueteRepository paqueteRepository;

    @Autowired
    public PaqueteService(PaqueteRepository paqueteRepository) {
        this.paqueteRepository = paqueteRepository;
    }

    @Transactional
    public PaqueteEntity savePaquete(PaqueteEntity paquete) {
        return paqueteRepository.save(paquete);
    }

    public Optional<PaqueteEntity> findById(Long id) {
        return paqueteRepository.findById(id);
    }

    public List<PaqueteEntity> findAllPaquetes() {
        return (List<PaqueteEntity>) paqueteRepository.findAll();
    }

    @Transactional
    public void deletePaqueteById(Long id) {
        paqueteRepository.deleteById(id);
    }

    @Transactional
    public void updatePaquete(PaqueteEntity updatedPaquete) {
        if (!paqueteRepository.existsById(updatedPaquete.getId())) {
            throw new IllegalArgumentException("No se encontró un paquete con el ID proporcionado.");
        }
        paqueteRepository.save(updatedPaquete);
    }
}
