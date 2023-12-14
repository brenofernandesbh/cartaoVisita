import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Card } from "../interface/card";
import {Observable, switchMap} from "rxjs";

/**
 * decorator
 * @Injectable is a service that can be injected into other components, services or modules
 */
@Injectable({
  providedIn: 'root'
})

export class CardService {

    /**
     * Constructor of the class that takes an HttpClient parameter.
     * @param http HttpClient instance to be injected.
     */
  constructor( private http: HttpClient ) { }

    /**
     * API URL to retrieve card related data
     * @private private and only reading
     */
  private readonly API = 'http://localhost:3000/cards'


  uploadImage(base64Image: string): Observable<any> {
    const formData: FormData = new FormData();
    formData.append('image', base64Image);

    return this.http.post(`${this.API}/upload`, formData);
  }
   /**
   * method for listing cards
   */
  readCardService() : Observable<Card[]> {
    return this.http.get<Card[]>(this.API)
  }

   /**
   * method for create card
   */
   createCardService(card: Card): Observable<Card> {
     return this.http.post<Card>(this.API, card);
   }

   /**
   * method for update card
   */
   updateCardService(card: Card): Observable<Card> {
     const url = `${this.API}/${card.id}`;

     // Verifique se o card tem uma nova imagem
     if (card.picture && card.picture.startsWith('data:image')) {
       // Faça o upload da nova imagem
       return this.uploadImage(`card.picture`).pipe(
         switchMap((imageResponse) => {
           // Atualize o campo 'picture' no card com a URL da imagem
           card.picture = imageResponse.url; // Substitua 'url' pelo campo apropriado que seu backend retorna
           // Agora, atualize o card no backend com a nova URL da imagem
           return this.http.put<Card>(url, card);
         })
       );
     } else {
       // Se não houver uma nova imagem, simplesmente atualize o card
       return this.http.put<Card>(url, card);
     }
   }

   /**
   * method for delete card
   */
    deleteCardService(id: number): Observable<Card> {
    const url = `${this.API}/${id}`
    return this.http.delete<Card>(url)
  }

   /**
   * method to get card by ID used in delete and update methods
   */
  getCardById(id: number): Observable<Card> {
    const url = `${this.API}/${id}`
    return this.http.get<Card>(url)
  }

}
