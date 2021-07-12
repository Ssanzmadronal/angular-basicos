import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent {
  
  heroes: string[] = ['Spiderman','Goku','Superman','Batman','Thor'];
  heroeBorrado: string = '';

  borrarHeroe(){
    /*borra el primer elemento de la lista*/
    this.heroeBorrado = this.heroes.shift()|| '';
  }
  
}
