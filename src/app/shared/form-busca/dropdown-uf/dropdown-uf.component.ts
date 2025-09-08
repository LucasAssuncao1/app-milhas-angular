import { UnidadeFederativaService } from './../../../core/services/unidade-federativa.service';
import { UnidadeFederativa } from './../../../core/types/UnidadeFederativa';
import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { map, Observable, startWith } from 'rxjs';

@Component({
  selector: 'app-dropdown-uf',
  templateUrl: './dropdown-uf.component.html',
  styleUrls: ['./dropdown-uf.component.scss']
})
export class DropdownUfComponent implements OnInit {

  @Input() label: string = '';
  @Input() iconePrefixo: string = '';
  @Input() myControl!: FormControl;

  unidadesFederativas: UnidadeFederativa[] = [];
  filteredEstados?: Observable<UnidadeFederativa[]>;

  constructor(private unidadeFederativaService: UnidadeFederativaService) { }

  ngOnInit() {
    this.unidadeFederativaService.listar().subscribe(
      response => {
        this.unidadesFederativas = response;
        console.log(this.unidadesFederativas);

        this.filteredEstados = this.myControl.valueChanges.pipe(
          startWith(''),
          map(value => this.filtrarEstados(value))
        );
      }
    )
  }

   filtrarEstados(value: string): UnidadeFederativa[] {
    const valorFiltrado = value?.toLowerCase();
    const result = this.unidadesFederativas.filter(
      estado => estado.nome.toLowerCase().includes(valorFiltrado)
    )
    return result
  }
}


