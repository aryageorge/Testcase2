import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  {
  component:AboutComponent,
  path:'about'
},
{
  component:ContactComponent,
  path:'contact'
},
{
  component:HomeComponent,
  path:''
},
{
  component:ProductComponent,
  path:'product'
},
{
  component:ProfileComponent,
  path:'profile'
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
