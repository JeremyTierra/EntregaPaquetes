package ec.sasf.prueba.jeremy.tierra.service.dto;

import jakarta.persistence.Column;
import lombok.Data;

@Data
public class IngresoFichaRecluso {
    private Long id;

    private boolean validez;

    private String observaciones;

    private String delitos;

    private String sentencia;

    private String informacionAdicional;

    private String nombreCompleto;

    private String cedula;
}
