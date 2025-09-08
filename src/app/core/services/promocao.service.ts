import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Promocao } from '../types/Promocao';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PromocaoService {

  constructor( public httpClient: HttpClient ) { }

  private apiUrl: string = environment.apiUrl;

  list ():Observable<Promocao[]>{
   return this.httpClient.get<Promocao[]>(`${this.apiUrl}/promocoes`);
  }

}
