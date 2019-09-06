import { Component, OnInit } from '@angular/core';
import { GitListService } from "../gitlist.service";

@Component({
  selector: 'git-list',
  templateUrl: './git-list.component.html',
  styleUrls: ['./git-list.component.css']
})
export class GitListComponent implements OnInit {
  private gitData: any;
  
  constructor(private svc: GitListService) { }

  ngOnInit() {
  	this.svc.getGitInfo().subscribe(data => {
  		this.gitData= {'gitlist':data};
  		console.log("data is ----->"+JSON.stringify(data));
  		console.log("gitData is ----->"+JSON.stringify(this.gitData));
  	});
  }

}
