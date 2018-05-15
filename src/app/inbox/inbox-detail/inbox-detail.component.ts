import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-inbox-detail',
  templateUrl: './inbox-detail.component.html',
  styleUrls: ['./inbox-detail.component.css']
})
export class InboxDetailComponent implements OnInit {
 
@Input() public languageSelected:{id:string, name:string, isActive:boolean}
 

 
  constructor() { }

  ngOnInit() {
  }

}
