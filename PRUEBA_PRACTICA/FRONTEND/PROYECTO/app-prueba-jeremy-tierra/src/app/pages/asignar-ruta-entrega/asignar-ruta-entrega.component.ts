import { Component, OnInit } from '@angular/core';
import { RutaEntregaEntity } from 'src/app/models/RutaEntregaEntity';
import { RutaEntregaService } from 'src/app/services/ruta-entrega.service';


@Component({
  selector: 'app-asignar-ruta-entrega',
  templateUrl: './asignar-ruta-entrega.component.html',
  styleUrls: ['./asignar-ruta-entrega.component.scss']
})
export class AsignarRutaEntregaComponent implements OnInit {
  nombreRepartidor: string = '';
  rutasEntrega: RutaEntregaEntity[] | any;
  nuevaRuta: RutaEntregaEntity = { id: 0, nombreRuta: '' }; // Nuevo objeto para almacenar la nueva ruta

  constructor(private rutaEntregaService: RutaEntregaService) { }

  ngOnInit(): void {
    this.getAllRutasEntrega();
  }

  getAllRutasEntrega(): void {
    this.rutaEntregaService.getAllRutasEntrega().subscribe(rutas => {
      this.rutasEntrega = rutas;
    });
  }

  asignarRutaEntrega(repartidorId: number, rutaId: number): void {
    alert(`Ruta ${rutaId} asignada al repartidor ${repartidorId}`);
  }

  crearRutaEntrega(nuevaRutaForm: any): void {
    this.rutaEntregaService.saveRutaEntrega(this.nuevaRuta).subscribe(() => {
      console.log('Nueva ruta de entrega creada correctamente.');
      this.getAllRutasEntrega(); // Actualizar la lista de rutas después de crear una nueva
      nuevaRutaForm.resetForm(); // Limpiar el formulario después de crear una nueva ruta
    });
  }

}
