import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RegistroModel } from '../models/registro.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RegistrosService {

  private url = 'https://logint-7f982-default-rtdb.firebaseio.com';
  

  constructor( private http: HttpClient) { }

  crearRegistro( registro: RegistroModel) {
    return this.http.post(`${this.url}/registros.json`,registro)
    .pipe(
      map((resp: any) =>  {
        registro.id = resp.name;
        return registro;
      })
    );
  }
  actualizarRegistro(registro: RegistroModel) {

    const registroTemp = {
      ...registro
    }

    delete registroTemp.id;

    return this.http.put(`${this.url}/registros/${registro.id}.json`,registroTemp);

  }

  borrarRegistro(id: string){
    return this.http.delete(`${this.url}/registros/${id}.json`);
  }

  getRegistro(id: string) {
    return this.http.get(`${this.url}/registros/${id}.json`);

  }
   
  getRegistros(){
    return this.http.get(`${this.url}/registros.json`)
    .pipe(
      map( this.crearArreglo)
    );
  }
  private crearArreglo(registroObj: object) {
    const registros: RegistroModel[] = [];

    if (registroObj === null) {return [];}
    Object.keys(registroObj).forEach(key => {
      const registro: RegistroModel = registroObj[key];
      registro.id = key;
      registros.push(registro)
    });
    return registros;
  }
}

