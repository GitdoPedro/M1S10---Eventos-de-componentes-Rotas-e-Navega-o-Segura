import { Component ,EventEmitter, Input, Output  } from '@angular/core';

@Component({
  selector: 'ntap-filtro',
  templateUrl: './filtro.component.html',
  styleUrls: ['./filtro.component.scss']
})
export class FiltroComponent {

  @Output()
  botaoTodos= new EventEmitter<string>();

  @Output()
  botaoLidos = new EventEmitter<string>();

  @Output()
  botaoNaoLidos = new EventEmitter<string>();


  dispararTodos() {
    this.botaoTodos.emit('Todos');
  }

  dispararLidos() {
    this.botaoLidos.emit('Lidos');
  }

  dispararNaoLidos() {
    this.botaoNaoLidos.emit('Não Lidos');
  }

}
