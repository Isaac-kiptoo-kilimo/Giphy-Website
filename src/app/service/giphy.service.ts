import { Injectable } from '@angular/core';
import { HttpClient ,HttpHeaders,HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GiphyService {

  constructor( private httpClient:HttpClient) { 
    
  }
  getGif(){
    return this.httpClient.get('https://developers.giphy.com/explorer/?')
  }
}
