import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { JsonviewerComponent } from './jsonviewer/jsonviewer.component';
import { ProjectsComponent } from './projects/projects.component';
import { WebScrapperComponent } from './web-scrapper/web-scrapper.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'jsonviewer', component: JsonviewerComponent },
  { path: 'webscrapper', component: WebScrapperComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
