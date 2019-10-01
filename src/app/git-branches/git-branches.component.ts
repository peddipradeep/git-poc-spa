import { Component, OnInit } from '@angular/core';
import { GitBranchesService } from "../gitbranches.service";

@Component({
  selector: 'git-branches',
  templateUrl: './git-branches.component.html',
  styleUrls: ['./git-branches.component.css']
})
export class GitBranchesComponent implements OnInit {
  public gitBranchesData: any;
  
  constructor(private svc: GitBranchesService) { }

  ngOnInit() {
  	this.svc.getGitBranches().subscribe(data => {
  	  var i=0
  	  data.forEach(function (value) {
  	  console.log('value ---> '+value)
  	  i = i+1;
      value.id=i;
      });
  		this.gitBranchesData= {'gitbranches':data};
  		console.log("data is ----->"+JSON.stringify(data));
  		console.log("gitData is ----->"+JSON.stringify(this.gitBranchesData));
  	});
  }

}
