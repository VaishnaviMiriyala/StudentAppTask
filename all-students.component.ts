import { StudentDetailsService } from './../student-details.service';
import { Student } from './../student';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-all-students',
  templateUrl: './all-students.component.html',
  styleUrls: ['./all-students.component.css']
})
export class AllStudentsComponent implements OnInit {
  __studentDetailsService:StudentDetailsService;
     notes:number = 0; 

     constructor(sds:StudentDetailsService) { 
      this.__studentDetailsService = sds;
    }
   
  ngOnInit(): void {
  }
  

  getAllStudents():Student[]
  {
    return this.__studentDetailsService.getAllStudents();
  }

  addDiaryNotes()
  {
    this.notes++;
    console.log(this.notes);
  }

  shareMethod(student:Student){
      console.log(student.name+" details are shared");
  }
}
