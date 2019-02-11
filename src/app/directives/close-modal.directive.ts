import { Directive, Input, OnChanges, EventEmitter, Output } from '@angular/core';

@Directive({
  selector: '[appCloseModal]'
})
export class CloseModalDirective implements OnChanges {

  @Input('appCloseModal') event: any;
  @Output() toggleDirective = new EventEmitter<string>();

  constructor() { }

  ngOnChanges(){

    this.closeModal();
  }

  closeModal(){

    if(this.event == 'ui dimmer modals page transition active ng-trigger ng-trigger-flyInOut'){
      
      this.toggleDirective.emit('inactive');
    }
  }
}
