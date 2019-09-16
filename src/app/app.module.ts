import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GitListComponent } from './git-list/git-list.component';
import { GitCommitsComponent } from './git-commits/git-commits.component';
import { GitTagsComponent } from './git-tags/git-tags.component';
import { GitListService } from './gitlist.service';
import { GitDetailsComponent } from './git-details/git-details.component';
import { GitBranchesComponent } from './git-branches/git-branches.component';
import { GitSummaryComponent } from './git-summary/git-summary.component';
import { GitCommitDetailsComponent } from './git-commit-details/git-commit-details.component';
import { GitFileSummaryDetailsComponent } from './git-file-summary-details/git-file-summary-details.component';

@NgModule({
  declarations: [
    AppComponent,
    GitListComponent,
    GitTagsComponent,
    GitDetailsComponent,
    GitCommitsComponent,
    GitBranchesComponent,
    GitSummaryComponent,
    GitCommitDetailsComponent,
    GitFileSummaryDetailsComponent
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
