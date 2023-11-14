import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-card-create',
  templateUrl: './card-create.component.html',
  styleUrls: ['./card-create.component.scss']
})
export class CardCreateComponent implements OnInit{

  link = {
    name: 'rede social',
    url: 'url da rede social'
}

  card = {
    id: 0,
    name:'Matheus Fernandes',
    picture: 'picture',
    name1: 'Facebook',
    url1: 'https://www.facebook.com/',
    name2: 'Instagram',
    url2: 'https://www.instagram.com/',
    name3: 'Ikea',
    url3: 'https://www.ikea.com/pt/pt/',
    email: 'exemplo@e-mail.com',
    telefone: '3353353351'
  }

  constructor() {
  }
   ngOnInit():void { }

     criarCard(): void {
      alert("criou um novo card")

     };

     cancelar(): void {
       alert("cancelou a criação de um novo card")
     }



}
