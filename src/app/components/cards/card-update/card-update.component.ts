import {Component, Input, OnInit} from '@angular/core';
import {Card} from "../interface/card";
import {CardService} from "../card-service/card-service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-card-update',
  templateUrl: './card-update.component.html',
  styleUrls: ['./card-update.component.scss']
})
export class CardUpdateComponent implements OnInit {

  @Input() card: Card = {
    id: 0,
    name: '',
    picture: '',
    name1: '',
    url1: '',
    name2: '',
    url2: '',
    name3: '',
    url3: '',
    email: '',
    telefone: '',
    modelo: ''
  }

  constructor(
      private service: CardService,
      private router: Router,
      private route: ActivatedRoute
              ) {
  }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id')
    this.service.getCardById(parseInt(id!)).subscribe((card) =>
    this.card = card
    )}

  cardUpdate() { //editarCard() cardUpdate()
    this.service.updateCardService(this.card).subscribe(() =>
        this.router.navigate(['/readCard'])
    )}
  cancelCard(){ //cancelar() cancelCard()
    this.router.navigate(['/readCard'])
  }
}
