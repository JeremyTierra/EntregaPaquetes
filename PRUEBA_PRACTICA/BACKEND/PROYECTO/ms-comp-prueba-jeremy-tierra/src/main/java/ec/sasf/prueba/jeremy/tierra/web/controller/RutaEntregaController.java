package ec.sasf.prueba.jeremy.tierra.web.controller;

import ec.sasf.prueba.jeremy.tierra.persistence.entity.RutaEntregaEntity;
import ec.sasf.prueba.jeremy.tierra.service.RutaEntregaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/rutas-entrega")
public class RutaEntregaController {

    private final RutaEntregaService rutaEntregaService;

    @Autowired
    public RutaEntregaController(RutaEntregaService rutaEntregaService) {
        this.rutaEntregaService = rutaEntregaService;
    }

    @PostMapping
    public ResponseEntity<RutaEntregaEntity> saveRutaEntrega(@RequestBody RutaEntregaEntity rutaEntrega) {
        RutaEntregaEntity savedRutaEntrega = rutaEntregaService.saveRutaEntrega(rutaEntrega);
        return new ResponseEntity<>(savedRutaEntrega, HttpStatus.CREATED);
    }

    @GetMapping("/{id}")
    public ResponseEntity<RutaEntregaEntity> getRutaEntregaById(@PathVariable Long id) {
        Optional<RutaEntregaEntity> rutaEntrega = rutaEntregaService.findById(id);
        return rutaEntrega.map(value -> new ResponseEntity<>(value, HttpStatus.OK))
                .orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    @GetMapping("/all")
    public ResponseEntity<List<RutaEntregaEntity>> getAllRutasEntrega() {
        List<RutaEntregaEntity> rutasEntrega = rutaEntregaService.findAllRutasEntrega();
        return new ResponseEntity<>(rutasEntrega, HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteRutaEntregaById(@PathVariable Long id) {
        rutaEntregaService.deleteRutaEntregaById(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Void> updateRutaEntrega(@PathVariable Long id, @RequestBody RutaEntregaEntity updatedRutaEntrega) {
        if (!id.equals(updatedRutaEntrega.getId())) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }

        try {
            rutaEntregaService.updateRutaEntrega(updatedRutaEntrega);
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } catch (IllegalArgumentException e) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }
}
