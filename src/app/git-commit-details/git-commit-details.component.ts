import { Component, OnInit } from '@angular/core';
import { GitCommitDetailsService } from "../gitcommitdetails.service";
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-git-commit-details',
  templateUrl: './git-commit-details.component.html',
  styleUrls: ['./git-commit-details.component.css']
})
export class GitCommitDetailsComponent implements OnInit {
  private commitDetailsData: any;

  constructor(private svc: GitCommitDetailsService, private route: ActivatedRoute) { }

  ngOnInit() {
  this.route.paramMap.subscribe(params => {
      console.log("");
      this.svc.getGitCommits(params.get('sha')).subscribe(data => {
      console.log("1 ->");
        this.commitDetailsData= {'gitcommitdetails':data};
        if(params.get('sha'))
          this.commitDetailsData.branch_name = params.get('branch_name');
        else
          this.commitDetailsData.branch_name = 'All';

        console.log("data is ----->"+JSON.stringify(data));
        console.log("commitDetailsData is ----->"+JSON.stringify(this.commitDetailsData));
      });
  	});
  }

}
