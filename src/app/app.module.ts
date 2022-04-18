import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { GitRoutingModule } from './git-routing.module'; // // Imports Custom Routing Module GitRoutingModule from src/app/git-routing.module.ts
import { AppComponent } from './app.component';
import { GitFormComponent } from './git-form/git-form.component'; // Imports GitFormComponent from src/app/git-form/git-form.component
import { GitSearchResultsComponent } from './git-search-results/git-search-results.component';
import { SearchGithubService } from './search-github.service'; // Imports SearchGithubService from src/app/search-github.service.ts
import { DateFormatPipe } from './date-format.pipe'; // Imports DateFormatPipe from src/app/date-format.pipe


@NgModule({
  declarations: [
    AppComponent,
    GitFormComponent,
    GitSearchResultsComponent,
    DateFormatPipe,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    GitRoutingModule
  ],
  providers: [SearchGithubService],
  bootstrap: [AppComponent]
})
export class AppModule { }
