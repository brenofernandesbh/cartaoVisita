import {Component, OnInit} from '@angular/core';
import {Card} from "../interface/card";
import {CardService} from "../card-service/card-service";
import {Router} from "@angular/router";

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

    constructor(
        private service: CardService,
        private router: Router
    ) {
    }

    ngOnInit(): void {
    }

    criarCard(): void {
        this.service.criar(this.card).subscribe(() =>{
            this.router.navigate(['/exibirCard'])
        })

    };

    cancelar(): void {
        this.router.navigate(['/exibirCard'])
    }


}
