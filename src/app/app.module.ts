import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GitListComponent } from './git-list/git-list.component';
import { GitListService } from './gitlist.service';
import { GitDetailsComponent } from './git-details/git-details.component';

@NgModule({
  declarations: [
    AppComponent,
    GitListComponent,
    GitDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [GitListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
