import { Component }                  from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router }                             from '@angular/router';

import   Swal                                 from 'sweetalert2';
import { AuthService }                        from '../../services/auth.service';
import { ValidatorService } from '../../validators/validator.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {

  miForm: FormGroup = this.fb.group({
    correo    :['',[Validators.required,Validators.pattern(this.validator.emailPattern)] ],
    password  :['',[Validators.required,Validators.minLength(6)]],
  })

  constructor(
    private fb:FormBuilder,
    private router:Router,
    private authService:AuthService,
    private validator:ValidatorService
  ) { }

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
    if(this.miForm.get(campo)?.errors && this.miForm.controls[campo]?.touched){
      return this.miForm.get(campo)?.invalid || false;
    }
    return false
  }
}
