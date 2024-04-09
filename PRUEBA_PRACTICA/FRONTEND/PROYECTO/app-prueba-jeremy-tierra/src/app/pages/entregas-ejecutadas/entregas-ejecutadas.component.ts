import { Component, OnInit } from '@angular/core';
import { PaqueteEntity } from 'src/app/models/PaqueteEntity';
import { PaqueteService } from 'src/app/services/paquete.service';


@Component({
  selector: 'app-entregas-ejecutadas',
  templateUrl: './entregas-ejecutadas.component.html',
  styleUrls: ['./entregas-ejecutadas.component.scss']
})
export class EntregasEjecutadasComponent implements OnInit {

  paquetesEntregados: PaqueteEntity[] | any;

  constructor(private paqueteService: PaqueteService) { }

  ngOnInit(): void {
    this.getPaquetesEntregados();
  }

  getPaquetesEntregados(): void {
    this.paqueteService.getAllPaquetes().subscribe(paquetes => {
      this.paquetesEntregados = paquetes.filter(paquete => paquete.estado === 'ENTREGADO');
    });
  }

}
