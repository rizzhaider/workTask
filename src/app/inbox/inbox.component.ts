import { UserService } from './../services/user.service';
import { LanguageService } from './../services/language.service';

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inbox',
  templateUrl: './inbox.component.html',
  styleUrls: ['./inbox.component.css']
})
export class InboxComponent implements OnInit {

 public languages: { id: string, name: string, isActive:boolean }[] = [];

 public selecteLanguage:{id:string, name:string,isActive:boolean} = null;

 public sideBarcollapsedInbox: boolean = false;

  constructor(private langaugeService : LanguageService,
              private userService :UserService) { }

  ngOnInit() {
  this.getLanguageDetail();
  }
buttonSidebarToggled(toggled: boolean){
  this.sideBarcollapsedInbox = toggled;
}

getLanguageDetail(){
 this.langaugeService.getLanguageList().subscribe(

   data =>{    
   this.languages = data;
   this.selecteLanguage = this.languages[0];
   this.selecteLanguage.isActive = true;
 
   },

   error => {

     console.log('error');
     console.log(error);

   });

}
  onLanguageElSelected(language:{id:string, name:string, isActive:boolean}){    
     this.selecteLanguage.isActive = false;      
     this.selecteLanguage = language;
  }


}
