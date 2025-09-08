import { Component } from '@angular/core';
import { FormBuscaComponent } from '../form-busca/form-busca.component';
import { FormBuscaService } from 'src/app/core/services/form-busca.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent {

  constructor(public formBuscaService: FormBuscaService){}

  
}
