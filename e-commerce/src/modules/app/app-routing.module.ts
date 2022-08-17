import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChatboxComponent } from '../chatbox/chatbox.component';
import { HomePageComponent } from '../home-page/home-page.component';
import { LoginComponent } from '../login/login.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomePageComponent},
  { path: 'chat', component: ChatboxComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
