import {Component, OnInit} from '@angular/core';
import {Card} from "../interface/card";
import {CardService} from "../card-service/card-service";
import {Router} from "@angular/router";

/**
 * Component create card
 */
@Component({
    selector: 'app-card-create',
    templateUrl: './card-create.component.html',
    styleUrls: ['./card-create.component.scss']
})
export class CardCreateComponent implements OnInit {

    /**
     * object empty
     */
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

    /**
     * Constructor of the class that takes parameters.
     * @param CardService - An injectable instance of the CardService.
     * @param router - The Angular Router service.
     */
    constructor(
        private service: CardService,
        private router: Router
    ) {
    }

    ngOnInit(): void {
    }
    cardCreate(): void {
        this.service.createCardService(this.card).subscribe(() =>{
            this.router.navigate(['/readCard'])
        })
    };

    cancelCard(): void {
        this.router.navigate(['/readCard'])
    }

  selectedFile: File | null = null;

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0] as File;

    // Converte a imagem para base64
    this.convertToBase64();
  }

  convertToBase64() {
    if (this.selectedFile) {
      const reader = new FileReader();
      reader.onload = (event: any) => {
        this.card.picture = event.target.result;
      };
      reader.readAsDataURL(this.selectedFile);
    }
  }

  onSubmit() {
    // Lógica para enviar o objeto 'card' para o backend
    console.log('Card object with base64 image:', this.card);
  }

}
