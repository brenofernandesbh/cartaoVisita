import { Component, OnInit } from '@angular/core';
import { Card } from "../interface/card";
import { CardService } from "../card-service/card-service";
import { ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-card-delete',
  templateUrl: './card-delete.component.html',
  styleUrls: ['./card-delete.component.scss']
})
export class CardDeleteComponent implements OnInit{

  card: Card = {
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
  ) {  }
  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id')
    this.service.getCardById(parseInt(id!)).subscribe((card) => {
      this.card = card
    })
  }

  delete() {
    if(this.card.id){
      this.service.cardDelete(this.card.id).subscribe(() => {
        this.router.navigate(['/exibirCard'])
      })
    }
  }

  cancel(){
    this.router.navigate(['/exibirCard'])
  }

}
