import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-processo',
  templateUrl: './processo.component.html',
  styleUrls: ['./processo.component.css']
})
export class ProcessoComponent implements OnInit {

  title: string = "processos"

  constructor() { }

  ngOnInit() {

    $('.ui.segments .ui.segment .ui.dropdown').dropdown({allowAdditions: true});

  }

}
