import { Component }                  from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router }                             from '@angular/router';

import   Swal                                 from 'sweetalert2';
import { AuthService }                        from '../../services/auth.service';
import { ValidatorService } from '../../validators/validator.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  miForm: FormGroup = this.fb.group({
    nombre      :['prueba',   [Validators.required,Validators.minLength(4)] ],
    correo      :['prueba@prueba.com',   [Validators.required,Validators.pattern(this.validator.emailPattern)] ],
    telefono    :['123456',   [Validators.required] ],
    password    :['123456',   [Validators.required,Validators.minLength(6)]],
    password2   :['123456'],
    edad        :['21',   [Validators.required,Validators.min(18),Validators.max(120)]],
  },{
    validators  :       [this.validator.camposIguales('password','password2')]
  })

  constructor(
    private fb:FormBuilder,
    private router:Router,
    private authService:AuthService,
    private validator:ValidatorService
  ) { }

  register(){
    const {nombre,correo,password,telefono,edad} = this.miForm.value;
    this.authService.register(nombre,correo,password,telefono,edad)
        .subscribe(ok=>{
          if(ok === true){
            this.router.navigateByUrl('/media')
          }else{
            Swal.fire('Error',ok[0].msg,'error');
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
