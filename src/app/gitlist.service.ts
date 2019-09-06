import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs/Observable";

@Injectable({
  providedIn: 'root'
})
export class GitListService {

  // private url = "https://super-crud.herokuapp.com/pokemon";
  private url = "https://api.github.com/repos/starksecurity/Pierian-Data-Complete-Python-3-Bootcamp/labels"
  // private url = "https://api.github.com/repos/starksecurity/Pierian-Data-Complete-Python-3-Bootcamp/commits"
  
  constructor(private http: HttpClient) { }

  getGitInfo(): Observable<any> {

    return this.http.get<any>(this.url);

  }
}
