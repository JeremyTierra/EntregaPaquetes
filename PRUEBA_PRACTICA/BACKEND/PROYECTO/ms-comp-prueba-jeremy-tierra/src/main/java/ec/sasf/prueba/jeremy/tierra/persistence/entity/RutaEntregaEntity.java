package ec.sasf.prueba.jeremy.tierra.persistence.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;


@Getter
@Setter
@NoArgsConstructor
@Entity
@Table(name = "rutas_entrega")
public class RutaEntregaEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String nombreRuta;

    @ManyToOne
    @JoinColumn(name = "id_repartidor")
    private UserEntity repartidor;

}
