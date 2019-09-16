import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs/Observable";

@Injectable({
  providedIn: 'root'
})
export class GitSummaryService {
  private path = "src/main/java/com/dental/appointments/DentalAppointmentApplication.java";
  private url = "https://api.github.com/repos/peddipradeep/dentalappointments/commits?path="+this.path+"&per_page=1"

  constructor(private http: HttpClient) { }

  async getSummaryData(){
      let output =<any>{};
      let newCommitsData: any;
      let contentsData: any
      // get the commit for the specific file
      var commitData = await this.http.get(this.url).toPromise();

      // get the contract from url
      newCommitsData = await this.http.get(commitData[0].url).toPromise();
      output.file_name = this.path;
      output.committer= newCommitsData.commit.committer
      output.message = newCommitsData.commit.message

      const contentsUrl = newCommitsData.files.filter(file => file.filename == this.path)[0].contents_url;
      contentsData = await this.http.get(contentsUrl).toPromise();
      output.content = atob(contentsData.content);

      return output; // you can return what you want here
  }

  getFileCommitSummaryData(url): Observable<any> {
     console.log(">>> GitSummaryService.getFileCommitSummaryData()");
     console.log("url is: " + url);
     return this.http.get<any>(url);
   }
}
