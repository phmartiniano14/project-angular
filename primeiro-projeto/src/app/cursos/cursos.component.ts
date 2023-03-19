import { Component, Input } from '@angular/core';
import { CursosService } from './cursos.service';
@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.scss']
})
export class CursosComponent {

  @Input() nomePortal ? : string;
  @Input() cursos ? : string[];
 

  constructor(private cursosServices : CursosService){
    this.nomePortal = 'http://loiane.training';

    //var servico = new CursosService();

    this.cursos = this.cursosServices.getCursos();
  }
   

}
