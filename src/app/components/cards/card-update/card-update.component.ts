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

  // Adicionamos um novo campo para lidar com a nova imagem
  newPicture: File | null = null;

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
    )
  }

  onFileSelected(event: any) {
    this.newPicture = event.target.files[0] as File;
  }

  cardUpdate() {
    // Se houver uma nova imagem, converte para base64
    if (this.newPicture) {
      const reader = new FileReader();
      reader.onload = (event: any) => {
        this.card.picture = event.target.result;
        // Chama o método para atualizar o card no backend
        this.updateCard();
      };
      reader.readAsDataURL(this.newPicture);
    } else {
      // Se não houver uma nova imagem, apenas chama o método para atualizar o card no backend
      this.updateCard();
    }
  }

// Método para atualizar o card no backend
  private updateCard() {
    this.service.updateCardService(this.card).subscribe(() => {
      this.router.navigate(['/readCard']);
    }, (error) => {
      console.error('Erro durante a atualização do card', error);
      // Adicione um tratamento de erro aqui, se necessário
    });
  }


  cancelCard() {
    this.router.navigate(['/readCard'])
  }
}

