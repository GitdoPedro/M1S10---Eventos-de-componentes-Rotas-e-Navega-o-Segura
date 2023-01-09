import { Component } from '@angular/core';

@Component({
  selector: 'ntap-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  botaoTodos(nome: string) {
     console.log(`Botão ${nome} clicado`);
   }

  botaoLidos(nome: string) {
    console.log(`Botão ${nome} clicado`);
  }

  botaoNaoLidos(nome: string) {
    console.log(`Botão ${nome} clicado`);
  }
}
