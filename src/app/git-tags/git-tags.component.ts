import { Component, OnInit } from '@angular/core';
import { GitTagsService } from "../gittags.service";

@Component({
  selector: 'git-tags',
  templateUrl: './git-tags.component.html',
  styleUrls: ['./git-tags.component.css']
})
export class GitTagsComponent implements OnInit {
  private gitTagsData: any;
  
  constructor(private svc: GitTagsService) { }

  ngOnInit() {
  	this.svc.getGitTags().subscribe(data => {
  		this.gitTagsData= {'gittags':data};
  		console.log("data is ----->"+JSON.stringify(data));
  		console.log("gitData is ----->"+JSON.stringify(this.gitTagsData));
  	});
  }

}
