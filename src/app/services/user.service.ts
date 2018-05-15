import { Injectable } from '@angular/core';

@Injectable()
export class UserService {

  constructor() { }


  //  saveUsdddser(id: string, token: string): void {
  //       localStorage.setItem('currentUserId', id);
  //       localStorage.setItem('currentUserToken', token);
  //   }

    saveUser(id: string):void{

      localStorage.setItem('currentUserId', id);
    }
getUser(): string{
   return localStorage.getItem('currentUserId');
  }
    clearUser():void{
    localStorage.removeItem('currentUserId');
     
  }
  
  

}
