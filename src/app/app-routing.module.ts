import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShellComponent } from './shell/shell.component';
import { LoginGuardGuard } from './login.guard.guard';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';
import { DetailArtistComponent } from './detail-artist/detail-artist.component';



const routes: Routes = [
{
  path: "",
  component: ShellComponent,
  canActivateChild: [LoginGuardGuard],
  children: [
    {
    path: "",
    redirectTo: "/login",
    pathMatch:  "full"
    },
    {
      path: "dashboard",
      component: DashboardComponent
    },
    {
      path: "artist/:id",
      component: DetailArtistComponent
    },
    {
      path: "about",
      component: AboutComponent
    }
  ]
},
{
  path: "login",
  component: LoginComponent
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
