import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GitListComponent } from './git-list/git-list.component';
import { GitCommitsComponent } from './git-commits/git-commits.component';
import { GitTagsComponent } from './git-tags/git-tags.component';

const routes: Routes = [

	{
		path: "gitlabels",
		component: GitListComponent
	},
	{
	    path: "",
	    redirectTo: "/gitlabels",
	    pathMatch: "full"
	},
	{
  		path: "gitcommits",
  		component: GitCommitsComponent
  },
  {
    		path: "gittags",
    		component: GitTagsComponent
    	}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
