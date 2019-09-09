import { Component, OnInit } from '@angular/core';
import { GitCommitsService } from "../gitcommits.service";

@Component({
  selector: 'git-commits',
  templateUrl: './git-commits.component.html',
  styleUrls: ['./git-commits.component.css']
})
export class GitCommitsComponent implements OnInit {
  private gitCommitsData: any;
  
  constructor(private svc: GitCommitsService) { }

  ngOnInit() {
  	this.svc.getGitCommits().subscribe(data => {
  		this.gitCommitsData= {'gitcommits':data};
  		console.log("data is ----->"+JSON.stringify(data));
  		console.log("gitData is ----->"+JSON.stringify(this.gitCommitsData));
  	});
  }

}
