import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Estado, PaqueteEntity } from 'src/app/models/PaqueteEntity';
import { PaqueteService } from 'src/app/services/paquete.service';


@Component({
  selector: 'registrar-paquete',
  templateUrl: './registrar-paquete.component.html',
  styleUrls: ['./registrar-paquete.component.scss']
})
export class RegistrarPaqueteComponent implements OnInit {
  paqueteForm: FormGroup | any;

  constructor(private fb: FormBuilder, private paqueteService: PaqueteService) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    this.paqueteForm = this.fb.group({
      estado:["PENDIENTE"],
      peso: ['', Validators.required],
      destino: ['', Validators.required],
      informacionEmisor: ['', Validators.required],
      informacionReceptor: ['', Validators.required],
      etiqueta: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.paqueteForm.invalid) {
      return;
    }

    const paquete: PaqueteEntity = this.paqueteForm.value;
    console.log(paquete);
    this.paqueteService.savePaquete(paquete)
      .subscribe(savedPaquete => {
        alert('Paquete registrado exitosamente:');
      });
  }
}
