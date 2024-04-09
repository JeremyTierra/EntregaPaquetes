package ec.sasf.prueba.jeremy.tierra.web.controller;

import ec.sasf.prueba.jeremy.tierra.persistence.entity.PaqueteEntity;
import ec.sasf.prueba.jeremy.tierra.service.PaqueteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/paquetes")
public class PaqueteController {

    private final PaqueteService paqueteService;

    @Autowired
    public PaqueteController(PaqueteService paqueteService) {
        this.paqueteService = paqueteService;
    }

    @PostMapping
    public ResponseEntity<PaqueteEntity> savePaquete(@RequestBody PaqueteEntity paquete) {
        PaqueteEntity savedPaquete = paqueteService.savePaquete(paquete);
        return new ResponseEntity<>(savedPaquete, HttpStatus.CREATED);
    }

    @GetMapping("/{id}")
    public ResponseEntity<PaqueteEntity> getPaqueteById(@PathVariable Long id) {
        Optional<PaqueteEntity> paquete = paqueteService.findById(id);
        return paquete.map(value -> new ResponseEntity<>(value, HttpStatus.OK))
                .orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    @GetMapping("/all")
    public ResponseEntity<List<PaqueteEntity>> getAllPaquetes() {
        List<PaqueteEntity> paquetes = paqueteService.findAllPaquetes();
        return new ResponseEntity<>(paquetes, HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deletePaqueteById(@PathVariable Long id) {
        paqueteService.deletePaqueteById(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Void> updatePaquete(@PathVariable Long id, @RequestBody PaqueteEntity updatedPaquete) {
        if (!id.equals(updatedPaquete.getId())) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }

        try {
            paqueteService.updatePaquete(updatedPaquete);
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } catch (IllegalArgumentException e) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }
}
