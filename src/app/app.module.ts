import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModalComponent } from './home-modal/home-modal.component';
import { AboutModalComponent } from './about-modal/about-modal.component';
import { EducationModalComponent } from './education-modal/education-modal.component';
import { SkillsModalComponent } from './skills-modal/skills-modal.component';
import { WorkModalComponent } from './work-modal/work-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeModalComponent,
    AboutModalComponent,
    EducationModalComponent,
    SkillsModalComponent,
    WorkModalComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
