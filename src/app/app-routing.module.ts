import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GitListComponent } from './git-list/git-list.component';
import { GitCommitsComponent } from './git-commits/git-commits.component';
import { GitTagsComponent } from './git-tags/git-tags.component';
import { GitBranchesComponent } from './git-branches/git-branches.component';
import { GitSummaryComponent } from './git-summary/git-summary.component';
import { GitCommitDetailsComponent } from './git-commit-details/git-commit-details.component';
import { GitFileSummaryDetailsComponent } from './git-file-summary-details/git-file-summary-details.component';

const routes: Routes = [

	{
    path: "gitbranches",
    component: GitBranchesComponent
  },
	{
		path: "gitlabels",
		component: GitListComponent
	},
	{
	  path: "",
	  redirectTo: "/gitbranches",
	  pathMatch: "full"
	},
	{
      path: "gitcommits",
      component: GitCommitsComponent
    },
    {
      path: "gitcommits/:branch_name",
      component: GitCommitsComponent
    },
   {
      path: "gittags",
      component: GitTagsComponent
   },
   {
      path: "gitsummary",
      component: GitSummaryComponent
    },
    {
      path: "gitcommitdetails/:sha",
      component: GitCommitDetailsComponent
    },
    {
      path: "gitFileSummaryDetails",
      component: GitFileSummaryDetailsComponent
    }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
