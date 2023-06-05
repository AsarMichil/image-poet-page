import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FeaturedComponent } from './pages/featured/featured.component';
import { PgTwoOneOneComponent } from './pages/photo-grid/pg-two-one-one/pg-two-one-one.component';
import { PgOneOneTwoComponent } from './pages/photo-grid/pg-one-one-two/pg-one-one-two.component';
import { PgOneTwoOneComponent } from './pages/photo-grid/pg-one-two-one/pg-one-two-one.component';
import { PgSkinnyOneOneComponent } from './pages/photo-grid/pg-one-one-skinny/pg-skinny-one-one/pg-skinny-one-one.component';
import { PgOneOneSkinnyComponent } from './pages/photo-grid/pg-one-one-skinny/pg-one-one-skinny.component';
import { PgOneSkinnyOneComponent } from './pages/photo-grid/pg-one-skinny-one/pg-one-skinny-one.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { GroupsComponent } from './pages/groups/groups.component';
import { MessagesComponent } from './pages/messages/messages.component';
import { LoginHeaderBarComponentComponent } from './login-header-bar-component/login-header-bar-component.component';
import { AccountTempComponent } from './pages/account-temp/account-temp.component';
import { UpdatePasswordComponent } from './pages/update-password/update-password.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AccountComponent } from './pages/account/account.component';
import { LoggedInComponent } from './pages/account/logged-in/logged-in.component';
import { LoggedOutComponent } from './pages/account/logged-out/logged-out.component';
import { CardStackComponent } from './components/card-stack/card-stack.component';
import { CardImageComponent } from './components/card-stack/card-image/card-image.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PageNotFoundComponent,
    FeaturedComponent,
    PgTwoOneOneComponent,
    PgOneOneTwoComponent,
    PgOneTwoOneComponent,
    PgSkinnyOneOneComponent,
    PgOneOneSkinnyComponent,
    PgOneSkinnyOneComponent,
    LoginComponent,
    RegisterComponent,
    GalleryComponent,
    GroupsComponent,
    MessagesComponent,
    LoginHeaderBarComponentComponent,
    AccountTempComponent,
    UpdatePasswordComponent,
    NavbarComponent,
    AccountComponent,
    LoggedInComponent,
    LoggedOutComponent,
    CardStackComponent,
    CardImageComponent,
    
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule,
    FormsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
