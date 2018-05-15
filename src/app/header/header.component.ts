import { Router } from '@angular/router';
import { AuthenticationService } from './../services/authentication.service';
import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public sidebarCollapsed: boolean = false;

  @Output() sidebarButtonToggled = new EventEmitter<boolean>();

  constructor(private authService: AuthenticationService,
               private router: Router) { }

  ngOnInit() {
  }
  onToggleSidebar(){
  
    this.sidebarCollapsed = !this.sidebarCollapsed;
     this.sidebarButtonToggled.emit(this.sidebarCollapsed);

  }
  onLogout(){
   console.log('logout Clicked!');
   this.authService.logoutLocally();
   this.router.navigate(['login'])

  }
}
