import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { WebScrapperComponent } from './web-scrapper/web-scrapper.component';
import { FormsModule } from '@angular/forms';
import { ProjectsComponent } from './projects/projects.component';
import { JsonviewerComponent } from './jsonviewer/jsonviewer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    WebScrapperComponent,
    ProjectsComponent,
    JsonviewerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
