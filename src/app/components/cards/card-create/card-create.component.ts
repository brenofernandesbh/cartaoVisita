import {Component, OnInit} from '@angular/core';
import {Card} from "../interface/card";
import {CardService} from "../card-service/card-service";

@Component({
    selector: 'app-card-create',
    templateUrl: './card-create.component.html',
    styleUrls: ['./card-create.component.scss']
})
export class CardCreateComponent implements OnInit {

    card: Card = {
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

    constructor(private service: CardService) {
    }

    ngOnInit(): void {
    }

    criarCard(): void {
        this.service.criar(this.card).subscribe()

    };

    cancelar(): void {
        alert("cancelou a criação de um novo card")
    }


}
