import { DepoimentoService } from 'src/app/core/services/depoimento.service';
import { Depoimento } from './../../core/types/depoimento';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-depoimentos',
  templateUrl: './card-depoimentos.component.html',
  styleUrls: ['./card-depoimentos.component.scss']
})
export class CardDepoimentosComponent {

  @Input() depoimento!: Depoimento;

}
