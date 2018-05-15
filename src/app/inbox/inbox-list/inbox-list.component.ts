import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-inbox-list',
  templateUrl: './inbox-list.component.html',
  styleUrls: ['./inbox-list.component.css']
})
export class InboxListComponent implements OnInit {
     
@Input() public languageList:{id: string, name:string, isActive:boolean}[];
@Output() public languageElementSelected:EventEmitter<{id:string, name:string, isActive:boolean}> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }
onSelectedLanguage(selectedLanguage:{id:string, name:string, isActive:boolean}){
    this.languageElementSelected.emit(selectedLanguage);

}
}
