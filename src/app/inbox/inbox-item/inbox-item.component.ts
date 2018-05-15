import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-inbox-item',
  templateUrl: './inbox-item.component.html',
  styleUrls: ['./inbox-item.component.css']
})
export class InboxItemComponent implements OnInit {
    
@Input() public languageElement:{id:string, name:string, isActive:boolean};
@Output() public selectedLanguage: EventEmitter<void> = new EventEmitter<void>();

  constructor() { }

  ngOnInit() {
  }
onSelectLanguage(){

this.selectedLanguage.emit();
this.languageElement.isActive = true;
  
}
}
