import { Component, OnInit } from '@angular/core';
import { GitCommitsService } from "../gitcommits.service";
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'git-commits',
  templateUrl: './git-commits.component.html',
  styleUrls: ['./git-commits.component.css']
})
export class GitCommitsComponent implements OnInit {
  private gitCommitsData: any;
  
  constructor(private svc: GitCommitsService, private route: ActivatedRoute) { }

  ngOnInit() {
  this.route.paramMap.subscribe(params => {
      this.svc.getGitCommits(params.get('branch_name')).subscribe(data => {
        this.gitCommitsData= {'gitcommits':data};
        if(params.get('branch_name'))
          this.gitCommitsData.branch_name = params.get('branch_name');
        else
          this.gitCommitsData.branch_name = 'All';

        console.log("data is ----->"+JSON.stringify(data));
        console.log("gitData is ----->"+JSON.stringify(this.gitCommitsData));
      });
  	});
  }

}
