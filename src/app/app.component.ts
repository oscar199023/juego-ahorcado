import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
 
})
export class AppComponent {
  
palabra = 'palta';
palabraOculta = '';

  letras = ['A', 'B', 'C', 'D', 'F', 'G', 'H', 'I', 'J',
            'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S',
            'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];


  constructor(){
    this.palabraOculta = '- '.repeat(this.palabra.length);
  }


}
