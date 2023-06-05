import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { FeaturedComponent } from './pages/featured/featured.component';
import { LoginComponent } from './pages/login/login.component';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { RegisterComponent } from './pages/register/register.component';
import { group } from '@angular/animations';
import { GroupsComponent } from './pages/groups/groups.component';
import { MessagesComponent } from './pages/messages/messages.component';
import { AccountTempComponent } from './pages/account-temp/account-temp.component';
import { UpdatePasswordComponent } from './pages/update-password/update-password.component';
import { AccountComponent } from './pages/account/account.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'account-temp', component: AccountTempComponent },
  { path: 'about', component: HomeComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'featured', component: FeaturedComponent },
  { path: 'groups', component: GroupsComponent },
  { path: 'groups/:groupid', component: MessagesComponent },
  { path: ':userid/gallery', component: GalleryComponent },
  { path: 'update-password', component: UpdatePasswordComponent }, // TODO: add a guard here???
  {path: 'account', component: AccountComponent},
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
