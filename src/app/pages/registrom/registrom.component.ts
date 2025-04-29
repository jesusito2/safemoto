import { invalid } from '@angular/compiler/src/render3/view/util';
import { Component, OnInit } from '@angular/core';
import { text } from '@angular/core/src/render3';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import { RegistroModel } from 'src/app/models/registro.model';
import { RegistrosService } from 'src/app/services/registros.service';
import Swal from 'sweetalert2';
import { Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-registrom',
  templateUrl: './registrom.component.html',
  styleUrls: ['./registrom.component.css']
})
export class RegistromComponent implements OnInit {

  registro: RegistroModel = new RegistroModel();


  constructor(private registrosService: RegistrosService,
    private location: Location,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  
  goBack() {
    this.location.back();
  }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');

    if (id !== 'nuevo'){

      this.registrosService.getRegistro(id)
      .subscribe((resp: RegistroModel) => {
        this.registro = resp;
        this.registro.id = id;
      });
    }
  }

  registrar(form: NgForm) {

    if (form.invalid) {
      console.log('Formulario no valido');
      return;

    }

    

    Swal.fire({
      title: 'espere',
      text: 'Guardando informacion',
      icon: 'info',
      allowOutsideClick: false
    });
    Swal.showLoading();

    let peticion: Observable<any>;



    if (this.registro.id) {

    peticion = this.registrosService.actualizarRegistro(this.registro);
     

    }else{

    peticion = this.registrosService.crearRegistro(this.registro)
    
    }

    peticion.subscribe(resp => {
      Swal.fire ({
        title: this.registro.numerodeserie,
        text: 'se actualizo correctamente',
        icon: 'success'
      });
    });

  }
}
