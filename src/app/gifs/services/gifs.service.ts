import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SearchGifsResponse, Gif } from '../interface/gifs.interface';

@Injectable({
  providedIn: 'root'
})

export class GifsService {

  private apiKey      : string    = 'yI0ZIZYIU9Hz81BXAVwoP6X5qhVQYQnS';
  private _history    : string[]  = [];
  private serviceUrl  : string = 'https://api.giphy.com/v1/gifs';
  public results      : Gif[]     = []

  get history () {
    return [...this._history];
  }

  constructor ( private http: HttpClient ) {
    this._history = JSON.parse(localStorage.getItem('history')!) || [];
    this.results = JSON.parse(localStorage.getItem('results')!) || [];
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

      localStorage.setItem('history', JSON.stringify(this._history))
    }

    // Consumir API
    const params = new HttpParams()
          .set('api_key', this.apiKey)
          .set('limit', '10')
          .set('q', query );


    this.http.get<SearchGifsResponse>(`${ this.serviceUrl }/search`, { params } )
      .subscribe( ( response ) => {
        this.results = response.data;
        localStorage.setItem('results', JSON.stringify( this.results )  );
      });

  }

}
