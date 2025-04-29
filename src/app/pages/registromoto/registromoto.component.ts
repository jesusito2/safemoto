import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { RegistrosService } from 'src/app/services/registros.service';
import { RegistroModel } from 'src/app/models/registro.model';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-registromoto',
  templateUrl: './registromoto.component.html',
  styleUrls: ['./registromoto.component.css']
})
export class RegistromotoComponent implements OnInit {
  registros: RegistroModel[] = [];

  constructor( private router: Router,
  private registrosService: RegistrosService
  ) { }
  
 
  

  ngOnInit() {
    this.registrosService.getRegistros()
    .subscribe(resp => this.registros = resp);
  }

  borrarRegistro(registro: RegistroModel, i:number) {

    Swal.fire({
      title:'¿Estas seguro?',
      text: `¿Esta seguro de querer borrar ${registro.modelo}`,
      icon:'question',
      showConfirmButton: true,
      showCancelButton: true

    }).then(resp => {
    if(resp.value) {
    this.registros.splice(i,1);
    this.registrosService.borrarRegistro(registro.id).subscribe();

    }

    })

  }

}
