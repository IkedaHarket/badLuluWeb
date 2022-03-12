import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, of, tap, Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { Usuario, AuthResponse } from '../interfaces/interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  emailPattern           : string = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";
  private _baseUrl    : string = environment.API_URL;
  private _usuario   !: Usuario;

  get usuario(){
    return {...this._usuario};
  }

  constructor(private http:HttpClient) { }
  
  // registro(name:string,email:string,password:string){
  //   const url = `${this._baseUrl}/auth/new`;
  //   return this.http.post<AuthResponse>(url,{ email,password,name })
  //       .pipe(
  //         tap( resp => {
  //           if(resp.ok){
  //             localStorage.setItem('token',resp.token!);
  //             this._usuario = {
  //               name : resp.name!,
  //               uid  : resp.uid!
  //             }
  //           }
  //         }),
  //         map( resp => resp.ok),
  //         catchError(err => of(err.error.msg))
  //       )
  // }

  login( correo:string, password:string ){
    const url = `${this._baseUrl}/auth/login`;
    return this.http.post<AuthResponse>(url,{ correo,password })
        .pipe(
          tap( resp => {
            if(resp.ok){
              localStorage.setItem('token',resp.token!);
              console.log(resp)
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
