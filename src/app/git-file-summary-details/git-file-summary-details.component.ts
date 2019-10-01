import { Component, OnInit } from '@angular/core';
import { GitSummaryService } from "../gitsummary.service";
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-git-file-summary-details',
  templateUrl: './git-file-summary-details.component.html',
  styleUrls: ['./git-file-summary-details.component.css']
})
export class GitFileSummaryDetailsComponent implements OnInit {
  public gitSummaryData= <any> {};
  constructor(private svc: GitSummaryService, private route: ActivatedRoute) { }

  ngOnInit() {

    console.log("GitFileSummaryDetailsComponent");
    console.log("history.state: "+JSON.stringify(history.state));
    console.log("commit: "+JSON.stringify(history.state.commit));
    this.svc.getFileCommitSummaryData(history.state.contents_url).subscribe(data => {
      this.gitSummaryData.content= atob(data.content);
      this.gitSummaryData.file_name = data.name;
      this.gitSummaryData.committer = history.state.commit.committer;
      this.gitSummaryData.message = history.state.commit.message;
      console.log("gitSummaryData is ----->"+JSON.stringify(this.gitSummaryData));
    });
  }

}
