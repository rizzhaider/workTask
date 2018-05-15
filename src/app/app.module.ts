import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { SidenavDirective } from './shared/directives/sidenav.directive';
import { AuthenticationService } from './services/authentication.service';
import { TasksidenavDirective } from './shared/directives/tasksidenav.directive';
import { DropdownDirective } from './shared/directives/dropdown.directive';
import { LoginComponent } from './login/login.component';
import { InboxComponent } from './inbox/inbox.component';
import { HttpModule } from '@angular/http';
import { UserService } from './services/user.service';
import { AuthGuard } from './gaurds/auth.guard';
import { LanguageService } from './services/language.service';
import { InboxListComponent } from './inbox/inbox-list/inbox-list.component';
import { InboxDetailComponent } from './inbox/inbox-detail/inbox-detail.component';
import { InboxItemComponent } from './inbox/inbox-item/inbox-item.component';
import { FormComponent } from './form/form.component';
import { CustomerService } from './services/customer.service';
import { ProductService } from './services/product.service';




const appRoutes: Routes = [
 { path: 'login', component: LoginComponent, canActivate: [AuthGuard] },
 { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
 { path: 'inbox', component: InboxComponent, canActivate: [AuthGuard] },
 { path: 'form', component: FormComponent, canActivate: [AuthGuard] },


{ path: '**', redirectTo: 'login' }
];


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
    HomeComponent,
    SidenavDirective,
    TasksidenavDirective,
    DropdownDirective,
    LoginComponent,
    InboxComponent,
    InboxListComponent,
    InboxDetailComponent,
    InboxItemComponent,
    FormComponent,
   
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    HttpModule
  ],
  providers: [AuthenticationService, UserService, AuthGuard, LanguageService, CustomerService, ProductService],
  bootstrap: [AppComponent, ]
})
export class AppModule { }
