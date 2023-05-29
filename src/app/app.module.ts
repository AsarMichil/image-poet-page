import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
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
import { AuthComponent } from './auth/auth.component';

import { ReactiveFormsModule } from '@angular/forms';
import { AccountComponent } from './account/account.component';
import { AvatarComponent } from './avatar/avatar.component';

import { AdminModule } from './admin/admin.module';

import { AuthModule } from './auth/auth.module';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PageNotFoundComponent,
    RegisterComponent,
    NavbarComponent,
    FeaturedComponent,
    PgTwoOneOneComponent,
    PgOneOneTwoComponent,
    PgOneTwoOneComponent,
    PgSkinnyOneOneComponent,
    PgOneOneSkinnyComponent,
    PgOneSkinnyOneComponent,
    AuthComponent,
    AccountComponent,
    AvatarComponent,
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule,
    AdminModule,
    AuthModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
