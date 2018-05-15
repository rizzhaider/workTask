import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
   
public sideBarcollapsedHome: boolean = false;

  constructor() { }

  ngOnInit() {
  }

buttonSidebarToggled(toggled: boolean){
  this.sideBarcollapsedHome = toggled;
}


}
