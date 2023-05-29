import { NgModule } from '@angular/core';
import { PreloadAllModules,RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RegisterComponent } from './register/register.component';
import { FeaturedComponent } from './featured/featured.component';
import { AuthComponent } from './auth/auth.component';
import { features } from 'process';
import { AccountComponent } from './account/account.component';
import { AdminModule } from './admin/admin.module';
import { LoginComponent } from './auth/login/login.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'auth', component: AuthComponent, pathMatch: 'full' },
  { path: 'account', component: AccountComponent },
  { path: 'featured', component: FeaturedComponent },
  { path: 'login', component: LoginComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), AdminModule
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
