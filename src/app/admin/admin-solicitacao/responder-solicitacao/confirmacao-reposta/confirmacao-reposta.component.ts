import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-confirmacao-reposta',
  templateUrl: './confirmacao-reposta.component.html',
  styleUrls: ['./confirmacao-reposta.component.css']
})
export class ConfirmacaoRepostaComponent implements OnInit {

  @Input() header: string = '';
  @Input() message: string = '';
  @Input() showModal: boolean = false;
  @Output() cancel = new EventEmitter();
  @Output() confirm = new EventEmitter();

  constructor() { }

  cancelar() {

    this.cancel.emit();

  }

  confirmar() {

    this.confirm.emit();

  }

  ngOnInit() {
  }

}
