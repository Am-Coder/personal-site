import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './content/about/about.component';
import { ContactComponent } from './content/contact/contact.component';
import { ContentComponent } from './content/content.component';
import { EducationComponent } from './content/education/education.component';
import { ExperienceComponent } from './content/experience/experience.component';
import { ProjectsComponent } from './content/projects/projects.component';
import { SkillsComponent } from './content/skills/skills.component';

const appRoutes: Routes = [
    { path: '', redirectTo: '/content', pathMatch: 'full' },
    { 
    path: 'content', component: ContentComponent, 
    children: [
        { path: '', component: AboutComponent, data: {animation : 'about'} },
        { path: 'about', component: AboutComponent, data: {animation: 'about'} },
        { path: 'education', component: EducationComponent, data: {animation: 'education'}},
        { path: 'skills', component: SkillsComponent, data: {animation: 'skills'}},
        { path: 'experience', component: ExperienceComponent, data: {animation: 'experience'}},
        { path: 'contact', component: ContactComponent, data: {animation: 'contact'}},    
        { path: 'projects', component: ProjectsComponent, data: {animation: 'projects'}},
    ] 
    },
]

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule{

}