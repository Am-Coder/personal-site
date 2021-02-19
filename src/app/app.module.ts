import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ContentComponent } from './content/content.component';
import { AboutComponent } from './content/about/about.component';
import { EducationComponent } from './content/education/education.component';
import { ContactComponent } from './content/contact/contact.component';
import { SkillsComponent } from './content/skills/skills.component';
import { ExperienceComponent } from './content/experience/experience.component';
import { AppRoutingModule } from './app-routing.module';
import { SkillchartComponent } from './content/skills/skillchart/skillchart.component';


@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    ContentComponent,
    AboutComponent,
    EducationComponent,
    ContactComponent,
    SkillsComponent,
    ExperienceComponent,
    SkillchartComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
