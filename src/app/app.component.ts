import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Users } from './interface/users.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'proyecto-angular';

  loginForm: FormGroup = new FormGroup({});

  formSchema: any[] = [
    {
      label: 'Cedula',
      id: 'cedula',
      type: 'text',
      formControlName: 'cedula',
      placeholder: 'Ingrese su cedula',
    },
    {
      label: 'Nombre',
      id: 'nombre',
      type: 'text',
      formControlName: 'nombre',
      placeholder: 'Ingrese su nombre',
    },
    {
      label: 'Apellido',
      id: 'apellido',
      type: 'text',
      formControlName: 'apellido',
      placeholder: 'Ingrese su apellido',
    },
    {
      label: 'Direccion',
      id: 'direccion',
      type: 'text',
      formControlName: 'direccion',
      placeholder: 'Ingrese su direccion',
    },
    {
      label: 'Correo Electronico',
      id: 'email',
      type: 'email',
      formControlName: 'email',
      placeholder: 'Ingrese su correo electronico',
    },
    {
      label: 'Numero de telefono',
      id: 'n_telefono',
      type: 'number',
      formControlName: 'n_telefono',
      placeholder: 'Ingrese su numero de telefono',
    },
  ];

  constructor(private formBuilder: FormBuilder) {
    this.loginForm = this.formBuilder.group({
      cedula: ['', [Validators.required, Validators.minLength(10)]],
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      direccion: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      n_telefono: ['', [Validators.required, Validators.minLength(10)]],
    });
  }

  formSubmitted = false;

  userData: Users = {
    cedula: '',
    nombre: '',
    apellido: '',
    direccion: '',
    email: '',
    n_telefono: 0,
  };

  onSubmit() {
    this.userData.cedula = this.loginForm.get('cedula')?.value;
    this.userData.nombre = this.loginForm.get('nombre')?.value;
    this.userData.apellido = this.loginForm.get('apellido')?.value;
    this.userData.direccion = this.loginForm.get('direccion')?.value;
    this.userData.email = this.loginForm.get('email')?.value;
    this.userData.n_telefono = this.loginForm.get('n_telefono')?.value;

    this.formSubmitted = true;

    if(this.loginForm.valid) {
      console.log(this.userData);
    } else {
      console.log('Formulario invalido');
    }
  }
}
