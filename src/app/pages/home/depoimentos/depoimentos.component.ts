import { Component, OnInit } from '@angular/core';
import { DepoimentoService } from 'src/app/core/services/depoimento.service';
import { Depoimento } from 'src/app/core/types/depoimento';

@Component({
  selector: 'app-depoimentos',
  templateUrl: './depoimentos.component.html',
  styleUrls: ['./depoimentos.component.scss']
})
export class DepoimentosComponent implements OnInit{

  depoimentos: Depoimento[] = [];

  constructor(private depoimentoService: DepoimentoService) { }

  ngOnInit(): void {
    this.depoimentoService.listar().subscribe(
      response => {
        this.depoimentos = response;
        console.log('depoimentos:', response);
      },
      error => {
        console.error('Erro ao buscar depoimentos:', error);
      }
    );
  }

}
