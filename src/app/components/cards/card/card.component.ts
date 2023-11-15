import {Component, Input, OnInit} from '@angular/core';
import {Card} from "../interface/card";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit{

  @Input() card: Card = {
    id: 0,
    name:'Alice Barreiro',
    picture: 'myPictureWoman',
    name1: 'Facebook',
    url1: 'https://www.facebook.com/',
    name2: 'Instagram',
    url2: 'https://www.instagram.com/',
    name3: 'Ikea',
    url3: 'https://www.ikea.com/pt/pt/',
    email: 'exemplo@e-mail.com',
    telefone: '3353353351',
    modelo: 'card3'
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
