import { Component ,OnInit ,Output} from '@angular/core';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
datos:any[]=[{nombre:'Carlos',apellido:'Portillo',carrera:'Front-end Developer'}]

@Output() repuesta:string='';
public formLogin!: FormGroup;

ngOnInit(): void {
}

registrar(nombre:string,apellido:string,carrera:string){
  this.datos.push({nombre,apellido,carrera})
  
 }
 eliminar(index:number){
  this.datos.splice(index,1) 
 }
}
