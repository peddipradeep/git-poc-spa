import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs/Observable";

@Injectable({
  providedIn: 'root'
})
export class GitTagsService {

  private url = "https://api.github.com/repos/StratacentPOC/GitRepo/tags"
  
  constructor(private http: HttpClient) { }

  getGitTags(): Observable<any> {

    return this.http.get<any>(this.url);

  }
}
