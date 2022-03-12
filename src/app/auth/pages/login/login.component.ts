import { Component, OnInit }                  from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router }                             from '@angular/router';

import   Swal                                 from 'sweetalert2';
import { AuthService }                        from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {

  miForm: FormGroup = this.fb.group({
    correo    :['sebaaignacio111@gmail.com',[Validators.required,Validators.pattern(this.authService.emailPattern)] ],
    password  :['123456',[Validators.required,Validators.minLength(6)]],
  })

  constructor(
    private fb:FormBuilder,
    private router:Router,
    private authService:AuthService
  ) { }

  ngOnInit(): void {
  }

  login(){
    const {correo,password} = this.miForm.value;
    this.authService.login(correo,password)
        .subscribe(ok=>{
          if(ok === true){
            this.router.navigateByUrl('/media')
          }else{
            Swal.fire('Error','Usuario o Contraseña incorrectos','error');
          }
        })
  }

  tieneError(campo:string):boolean{
    return this.miForm.get(campo)?.invalid || false;
  }
}
