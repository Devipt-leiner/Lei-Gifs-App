import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class GifsService {

  private apiKey    : string    = 'yI0ZIZYIU9Hz81BXAVwoP6X5qhVQYQnS';
  private _history  : string[]  = [];
  public results    : any[]     = []

  get history () {
    return [...this._history];
  }

  constructor ( private http: HttpClient ) {

  }

  searchGifs (query: string = '') {
    query = query.trim().toLocaleLowerCase();

    // Condición para que no acepte campos vacíos
    if (query.trim().length === 0) {
      return;
    }

    // Condición para no aceptar repetidos
    if (!this._history.includes(query)) {
      this._history.unshift(query);
      this._history = this._history.splice(0,10);
    }

    // Consumir API
    this.http.get(`https://api.giphy.com/v1/gifs/search?api_key=yI0ZIZYIU9Hz81BXAVwoP6X5qhVQYQnS&q=${query}`).subscribe((response: any) => {
      console.log(response.data);
      this.results = response.data;
    });

  }

}
