package ec.sasf.prueba.jeremy.tierra.persistence.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@Entity
@Table(name = "paquetes")
public class PaqueteEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private Double peso;
    private String destino;
    private String informacionEmisor;
    private String informacionReceptor;
    private String etiqueta;

    @Enumerated(EnumType.STRING)
    private Estado estado;

    @ManyToOne
    @JoinColumn(name = "id_repartidor")
    private UserEntity repartidor;

    public enum Estado {
        EN_TRANSITO,
        ENTREGADO,
        PENDIENTE
    }

}
