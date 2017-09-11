import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ProjectListComponent } from './auth/project-list/project-list.component';
import { HeaderComponent } from './common/header/header.component';
import { LoaderComponent } from './common/loader/loader.component';

import { ProjectListService } from './auth/project-list/services/project-list.service';
import { LoginComponent } from './public/login/login.component';
import {routes} from './routes';

import { Ng2Webstorage } from 'ngx-webstorage';
import { HomeComponent } from './auth/home/home.component';
import { RouterModule } from '@angular/router';
import { AuthenticationService } from './common/services/authentication.service';
import { HttpService } from './common/services/http.service';


@NgModule({
  declarations: [
    AppComponent,
    ProjectListComponent,
    HeaderComponent,
    LoaderComponent,
    LoginComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    Ng2Webstorage,
    RouterModule.forRoot(routes),
    FormsModule
  ],
  providers: [ProjectListService, AuthenticationService, HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
