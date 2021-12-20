import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment.prod';
import { HeaderUtil } from '../util/HeaderUtil';

@Injectable({ providedIn: 'root' })
export class LeilaoService {
 
  constructor( private http: HttpClient) {}

  public async cadastrar(leilao: any) {
    let resultado: any;
    await this.http
      .post(`${environment.apiUrl}`, leilao)
      .toPromise()
      .then(
        (data) => {
          resultado = data;
        },
        (error) => {
          resultado =error.error;
        }
      );
      return resultado;
  }

  public async editar(leilao: any) {
    let resultado: any;
    await this.http
      .put(`${environment.apiUrl}${leilao.id}`, leilao)
      .toPromise()
      .then(
        (data) => {
          resultado = data;
        },
        (error) => {
          resultado =error.error;
        }
      );
      return resultado;
  }

  public async deletar(leilaoId: any) {
    let resultado: any;
    await this.http
      .delete(`${environment.apiUrl}${leilaoId}`)
      .toPromise()
      .then(
        (data) => {
          resultado = data;
        },
        (error) => {
          resultado =error.error;
        }
      );
      return resultado;
  }

  public async listar() {
    let resultado: any;
    await this.http
      .get(`${environment.apiUrl}`)
      .toPromise()
      .then(
        (data) => {
          resultado = data;
        },
        (error) => {
          resultado =error.error;
        }
      );
      return resultado;
  }

  public async darLance(lance: any) {
    let resultado: any;
    await this.http
      .post(`${environment.apiUrl}lance`,lance)
      .toPromise()
      .then(
        (data) => {
          resultado = data;
        },
        (error) => {
          resultado =error.error;
        }
      );
      return resultado;
  }
}
