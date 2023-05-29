import { NgModule } from '@angular/core';
import { PreloadAllModules,RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { FeaturedComponent } from './pages/featured/featured.component';
import { AccountComponent } from './pages/account/account.component';



const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'featured', component: FeaturedComponent },
  { path: 'account', component: AccountComponent },

  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
