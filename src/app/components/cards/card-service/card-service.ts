import {Injectable, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Card} from "../interface/card";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CardService implements OnInit {

  constructor( private http: HttpClient ) { }

  private readonly API = 'http://localhost:3000/cards'

  /**
   * method to show the cards - Método para listar os cards
   */
  listar() : Observable<Card[]> {
    return this.http.get<Card[]>(this.API)
  }

  criar(card: Card): Observable<Card> {
    return this.http.post<Card>(this.API, card)
  }

  // @ts-ignore
  cardDelete(id: number): Observable<Card> {
    const url = `${this.API}/${id}`
    return this.http.delete<Card>(url)
  }

  getCardById(id: number): Observable<Card> {
    const url = `${this.API}/${id}`
    return this.http.get<Card>(url)
  }

  ngOnInit(){


  }

}
