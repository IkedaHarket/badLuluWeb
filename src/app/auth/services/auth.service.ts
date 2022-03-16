import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, of, tap, Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { Usuario, AuthResponse } from '../interfaces/interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _baseUrl    : string = environment.API_URL;
  private _usuario   !: Usuario;

  get usuario(){
    return {...this._usuario};
  }

  constructor(private http:HttpClient) { }
  
  register(nombre:string,correo:string,password:string,telefono:string,edad:number){
    const url = `${this._baseUrl}/auth/register`;
    return this.http.post<AuthResponse>(url,{ correo,password,nombre,telefono,edad })
        .pipe(
          tap( resp => {
            if(resp.ok){
              localStorage.setItem('token',resp.token!);
              this._usuario = {
                nombre : resp.usuario.nombre!,
                uid  : resp.usuario.uid!
              }
            }
          }),
          map( resp => resp.ok),
          catchError(err =>  of(err.error.errors))
        )
  }

  login( correo:string, password:string ){
    const url = `${this._baseUrl}/auth/login`;
    return this.http.post<AuthResponse>(url,{ correo,password })
        .pipe(
          tap( resp => {
            if(resp.ok){
              localStorage.setItem('token',resp.token!);
            }
          }),
          map( resp => resp.ok),
          catchError(err => of(false))
        )
  }

  validarToken():Observable<boolean>{
    const url = `${this._baseUrl}/auth/renew`;
    const headers = new HttpHeaders()
        .set('x-token',localStorage.getItem('token') || '')

    return this.http.get<AuthResponse>(url,{headers})
        .pipe(
          map(resp=>{
            localStorage.setItem('token',resp.token!);
              this._usuario = {
                nombre : resp.usuario.nombre!,
                uid  : resp.usuario.uid!
              }
            return resp.ok;
          }),
          catchError(err=> of(false))
        )
  }

  logout(){
    localStorage.removeItem('token');
  }

}
