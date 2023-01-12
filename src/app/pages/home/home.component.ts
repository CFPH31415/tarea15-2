import { Component ,OnInit} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
datos:any[]=[{nombre:'Carlos',apellido:'Portillo',carrera:'Front-end Developer'}]

ngOnInit(): void {
}

registrar(nombre:string,apellido:string,carrera:string){
  if(nombre.length && apellido.length && carrera.length ){
  this.datos.push({nombre,apellido,carrera});

}else{
  alert('Rellenar datos');
}
 }
 eliminar(index:number){
  if (confirm("¿Deseas eliminar el registro?")) {
  this.datos.splice(index,1) 
 }
}
}
