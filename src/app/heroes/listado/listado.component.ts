import { Component} from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent{

  heroes: string[] = ["Spiderman","Ironman","Hulk","Thor","Capitán América"];
  heroeEliminado: string = '';

  borrarHeroe() {
    this.heroeEliminado = this.heroes.shift() || '';
  }

}
