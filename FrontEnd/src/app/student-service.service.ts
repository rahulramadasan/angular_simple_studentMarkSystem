import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentServiceService {
  private _addUrl="http://localhost:8081/api/student/add";
  private _viewUrl="http://localhost:8081/api/student/view";

  constructor(private http:HttpClient) { }

  addStudent(student:{}){
    return this.http.post(this._addUrl,student)
  }

  viewProgress(){
    return this.http.get(this._viewUrl)

  }
}
