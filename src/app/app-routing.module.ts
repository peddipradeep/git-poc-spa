import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [

	{
		path: "gitlist",
		component: GitListComponent
	},
	{
	    path: "",
	    redirectTo: "/gitlist",
	    pathMatch: "full"
	}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
