import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-timeout',
  templateUrl: './timeout.component.html',
  styleUrls: ['./timeout.component.css']
})
export class TimeoutComponent implements OnInit {

  intervalId = 0;
  message = '';
  seconds = 120;
  minute = 1;
  sec = 59;

  clearTime(){ clearInterval(this.intervalId); }

  ngOnInit() {
    this.start();
  }

  start () { this.countDown(); console.log('aqui');}

  stop() {

  }

  private countDown(){

    this.clearTime();
    this.intervalId = window.setInterval(() => {
      this.seconds -= 1;
      this.sec -= 1;
      if (this.sec < 0){
        this.sec = 59;
        this.minute -= 1;
      }
      if (this.seconds === 0){
        this.message = 'Blast off!';
      } else {

        if(this.seconds < 0) { window.location.reload();}
        this.message = `T-${this.minute}:${this.sec} seconds and counting`;
      }
    }, 1000);
  }
}
