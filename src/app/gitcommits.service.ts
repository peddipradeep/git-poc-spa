import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs/Observable";

@Injectable({
  providedIn: 'root'
})
export class GitCommitsService {

  // private url = "https://api.github.com/repos/starksecurity/Pierian-Data-Complete-Python-3-Bootcamp/labels"
  // private url = "https://api.github.com/repos/starksecurity/Pierian-Data-Complete-Python-3-Bootcamp/commits"
  private url = "https://api.github.com/repos/StratacentPOC/GitRepo/commits"
  private temp_url = "";
  
  constructor(private http: HttpClient) { }

  getGitCommits(branch_name): Observable<any> {
  console.log("GitCommitService...1 ->");
  if(branch_name != null){
    this.temp_url = this.url +'?sha='+branch_name;
  }
  else{
    this.temp_url = this.url;
  }

    // return this.http.get<any>(this.url);
    console.log('URL is: '+this.temp_url);
    return this.http.get<any>(this.temp_url);

  }
}
