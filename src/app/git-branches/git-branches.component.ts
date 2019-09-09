import { Component, OnInit } from '@angular/core';
import { GitBranchesService } from "../gitbranches.service";

@Component({
  selector: 'git-branches',
  templateUrl: './git-branches.component.html',
  styleUrls: ['./git-branches.component.css']
})
export class GitBranchesComponent implements OnInit {
  private gitBranchesData: any;
  
  constructor(private svc: GitBranchesService) { }

  ngOnInit() {
  	this.svc.getGitBranches().subscribe(data => {
  		this.gitBranchesData= {'gitbranches':data};
  		console.log("data is ----->"+JSON.stringify(data));
  		console.log("gitData is ----->"+JSON.stringify(this.gitBranchesData));
  	});
  }

}
