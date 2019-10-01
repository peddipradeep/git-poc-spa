import { Component, OnInit } from '@angular/core';
import { GitSummaryService } from "../gitsummary.service";
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-git-summary',
  templateUrl: './git-summary.component.html',
  styleUrls: ['./git-summary.component.css']
})
export class GitSummaryComponent implements OnInit {

  public gitSummaryData= <any> {};
  constructor(private svc: GitSummaryService, private route: ActivatedRoute) {}


  ngOnInit() {
      let orderId: any;
      console.log("history.state: "+JSON.stringify(history.state));
      if(history.state.commit_details == 'true'){
        console.log("GitSummaryComponent commit details true");
        console.log("commit: "+JSON.stringify(history.state.commit));
        this.svc.getFileCommitSummaryData(history.state.contents_url).subscribe(data => {

          this.gitSummaryData.content= atob(data.content);
          this.gitSummaryData.file_name = data.name;
          this.gitSummaryData.committer = history.state.commit.committer;
          this.gitSummaryData.message = history.state.commit.message;
          console.log("gitSummaryData is ----->"+JSON.stringify(this.gitSummaryData));
        });
      }
      else{
        this.svc.getSummaryData().then( (data) => {
          this.gitSummaryData = data;
          console.log("Commit data of specific file: "+JSON.stringify(this.gitSummaryData.content));
        });
      }
  }
}
