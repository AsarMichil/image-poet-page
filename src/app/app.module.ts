import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './navbar/navbar.component';
import { FeaturedComponent } from './featured/featured.component';
import { PgTwoOneOneComponent } from './pg-two-one-one/pg-two-one-one.component';
import { PgOneOneTwoComponent } from './pg-one-one-two/pg-one-one-two.component';
import { PgOneTwoOneComponent } from './pg-one-two-one/pg-one-two-one.component';
import { PgSkinnyOneOneComponent } from './pg-skinny-one-one/pg-skinny-one-one.component';
import { PgOneOneSkinnyComponent } from './pg-one-one-skinny/pg-one-one-skinny.component';
import { PgOneSkinnyOneComponent } from './pg-one-skinny-one/pg-one-skinny-one.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PageNotFoundComponent,
    LoginComponent,
    RegisterComponent,
    NavbarComponent,
    FeaturedComponent,
    PgTwoOneOneComponent,
    PgOneOneTwoComponent,
    PgOneTwoOneComponent,
    PgSkinnyOneOneComponent,
    PgOneOneSkinnyComponent,
    PgOneSkinnyOneComponent,
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
