import { Component, OnInit } from '@angular/core';
import { PaqueteEntity } from 'src/app/models/PaqueteEntity';
import { PaqueteService } from 'src/app/services/paquete.service';

@Component({
  selector: 'app-repartidor',
  templateUrl: './repartidor.component.html',
  styleUrls: ['./repartidor.component.scss']
})
export class RepartidorComponent implements OnInit {
  paquetes: PaqueteEntity[] | any;

  constructor(private paqueteService: PaqueteService) { }

  ngOnInit(): void {
    this.getPaquetesAsignados();
  }

  getPaquetesAsignados(): void {
    this.paqueteService.getAllPaquetes().subscribe(paquetes => this.paquetes = paquetes);
  }

  actualizarEstadoPaquete(paquete: PaqueteEntity, nuevoEstado: string): void {
    console.log(paquete,nuevoEstado)
    if (nuevoEstado == 'EN_TRANSITO' || nuevoEstado == 'ENTREGADO') {
      // Verificar si el estado actual es diferente al estado nuevo
      if (paquete.estado !== nuevoEstado) {
        paquete.estado = nuevoEstado; // Cambiar el estado
        this.paqueteService.updatePaquete(paquete.id, paquete).subscribe(() => {
          alert('Estado del paquete actualizado correctamente.');
          // Actualizar la lista de paquetes después de la actualización
          this.getPaquetesAsignados();
        });
      } else {
        alert('El paquete ya está en el estado deseado.');
      }
    } else {
      alert('Estado no válido');
    }
  }
  
}
