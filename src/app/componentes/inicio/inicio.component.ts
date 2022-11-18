import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup , Validators } from '@angular/forms';
import { FormularioService } from 'src/app/servicios/formulario.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  formulario:any;

  constructor(
    private formularioSrv:FormularioService,
    private fb:FormBuilder) { }




  ngOnInit(): void {
    this.formulario = this.fb.group({
      nombre:['',[Validators.required, Validators.minLength(4)]],
      apellido:['',[Validators.required, Validators.minLength(4)]],
      edad:['',[Validators.required, Validators.min(4)]],
      email:['',[Validators.required]]
    });
  }



  
  get formularioReactivo(){
    return this.formulario.controls;
  }

  botonEnviar(){
    this.formularioSrv.obtener_datos(this.formularioReactivo)
    //console.log(this.formulario.value);
  }
}
