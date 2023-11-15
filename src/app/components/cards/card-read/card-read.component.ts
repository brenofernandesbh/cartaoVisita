import {Component, OnInit} from '@angular/core';
import {Card} from "../interface/card";
import {CardService} from "../card-service/card-service";

@Component({
  selector: 'app-card-read',
  templateUrl: './card-read.component.html',
  styleUrls: ['./card-read.component.scss']
})
export class CardReadComponent implements OnInit{

  cardList : Card [] = []

  constructor(private service: CardService) {
  }

  ngOnInit() {
    this.service.listar().subscribe((cardList) => {
      this.cardList = cardList
    })

  }

}
