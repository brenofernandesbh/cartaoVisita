import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Card } from "../interface/card";
import { Observable } from "rxjs";

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
    return this.http.post<Card>(this.API, card)
  }

   /**
   * method for update card
   */
  updateCardService(card: Card) : Observable<Card> {
    const url = `${this.API}/${card.id}`
    return this.http.put<Card>(url, card)
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
