import { StudentServiceService } from './../student-service.service';
import { Router } from '@angular/router';

import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {

  student={
    name:"",
    class:"",
    mathmark:"",
    engmark:"",
    total:""

  }

  constructor(private _stu:StudentServiceService,private router:Router) { }

  addstudent(){
    //alert("success")
    this._stu.addStudent(this.student).subscribe(
      res=>{console.log(res),this.router.navigate(['/progress'])},
      err=>console.log(err)
    )
  }

  ngOnInit(): void {
  }

}

