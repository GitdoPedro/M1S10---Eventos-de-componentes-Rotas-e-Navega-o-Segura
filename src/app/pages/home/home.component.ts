import { Component } from '@angular/core';

@Component({
  selector: 'ntap-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

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
