import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { StudentServiceService } from './../student-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progresscard',
  templateUrl: './progresscard.component.html',
  styleUrls: ['./progresscard.component.css']
})
export class ProgresscardComponent implements OnInit {

  student = <any>[];

  constructor(private _stud: StudentServiceService, private http: HttpClient, private router: Router) { }

  ngOnInit() {
    this._stud.viewProgress().subscribe(
      res => this.student = res,
      err => console.log(err)

    )
  }


}
