import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs/Observable";

@Injectable({
  providedIn: 'root'
})
export class GitCommitDetailsService {

  private url = "https://api.github.com/repos/StratacentPOC/GitRepo/commits"
  private temp_url = "";
  
  constructor(private http: HttpClient) { }

  getGitCommits(sha): Observable<any> {
    console.log("GitCommitDetailsService...1 ->");
    if(sha != null){
      this.temp_url = this.url +'/'+sha;
    }
    else{
      this.temp_url = this.url;
    }

    // return this.http.get<any>(this.url);
    console.log('URL is: '+this.temp_url);
    return this.http.get<any>(this.temp_url);

  }
}
