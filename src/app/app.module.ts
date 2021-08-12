import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import {RouterModule} from '@angular/router';
import { ServiceComponent } from './service/service.component';
import { SolutionComponent } from './solution/solution.component';
import { TechnologiesComponent } from './technologies/technologies.component';
import { BlogComponent } from './blog/blog.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { MainComponent } from './main/main.component';
import { WebDevelopmentComponent } from './service/web-development/web-development.component';
import { MobileDevelopmentComponent } from './service/mobile-development/mobile-development.component';
import { UxComponent } from './service/ui/ux/ux.component';
import { OutsourceComponent } from './solution/outsource/outsource.component';
import { DedicatedTeamComponent } from './solution/dedicated-team/dedicated-team.component';
import { MvpComponent } from './solution/mvp/mvp.component';
import { ContactComponent } from './contact/contact.component';
import { CasesComponent } from './cases/cases.component';
import { ChatBotsComponent } from './service/chat-bots/chat-bots.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ServiceComponent,
    SolutionComponent,
    TechnologiesComponent,
    BlogComponent,
    NotFoundComponent,
    MainComponent,
    WebDevelopmentComponent,
    MobileDevelopmentComponent,
    UxComponent,
    OutsourceComponent,
    DedicatedTeamComponent,
    MvpComponent,
    ContactComponent,
    CasesComponent,
    ChatBotsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
