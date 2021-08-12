import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ServiceComponent } from './service/service.component';
import { SolutionComponent } from './solution/solution.component';
import { TechnologiesComponent } from './technologies/technologies.component';
import {BlogComponent} from './blog/blog.component';
import {NotFoundComponent} from './not-found/not-found.component';
import { MainComponent } from './main/main.component';
import {WebDevelopmentComponent} from './service/web-development/web-development.component';
import {MobileDevelopmentComponent} from './service/mobile-development/mobile-development.component';
import {UxComponent} from './service/ui/ux/ux.component';
import {OutsourceComponent} from './solution/outsource/outsource.component';
import {DedicatedTeamComponent} from './solution/dedicated-team/dedicated-team.component';
import {MvpComponent} from './solution/mvp/mvp.component';
import {ContactComponent} from './contact/contact.component';
import {CasesComponent} from './cases/cases.component';
import {ChatBotsComponent} from "./service/chat-bots/chat-bots.component";

const routes: Routes = [
  {path : '' , component: MainComponent , data: { title: 'Doodle tj' }},
  {path : 'about' , component: AboutComponent , data: { title: 'About Us' }},
  {path : 'Service' , component: ServiceComponent},
  {path : 'Solution' , component: SolutionComponent},
  {path : 'Technologies' , component: TechnologiesComponent},
  {path : 'Blog' , component: BlogComponent},
  {path : 'contact' , component: ContactComponent},
  {path : 'Service/web-development' , component: WebDevelopmentComponent},
  {path : 'Service/mobile-development' , component: MobileDevelopmentComponent},
  {path : 'Service/ui-ux' , component : UxComponent},
  {path : 'Service/chat-bots' , component : ChatBotsComponent},
  {path : 'Solution/Outsource' , component : OutsourceComponent},
  {path : 'Solution/dedicated-team' , component : DedicatedTeamComponent},
  {path : 'Solution/minimum-visual-project' , component : MvpComponent},
  {path : 'Cases' , component : CasesComponent},
  {path : '**' , component: NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
