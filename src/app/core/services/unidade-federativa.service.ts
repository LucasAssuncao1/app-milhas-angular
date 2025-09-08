import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, shareReplay } from 'rxjs';
import { environment } from 'src/environments/environment';
import { UnidadeFederativa } from '../types/UnidadeFederativa';

@Injectable({
  providedIn: 'root'
})
export class UnidadeFederativaService {

  private apiUrl: string = environment.apiUrl;
  private cache$?: Observable<UnidadeFederativa[]>;

  constructor(private httpClient: HttpClient) { }

  listar(): Observable<UnidadeFederativa[]>{
    if(!this.cache$) {
      this.cache$ = this.getEstados().pipe(
        shareReplay(1)
      );
    }

    return this.cache$ ;
  }

  private getEstados(): Observable<UnidadeFederativa[]> {
    return this.httpClient.get<UnidadeFederativa[]>(`${this.apiUrl}/estados`);
  }
}
