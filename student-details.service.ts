import { Student } from './student';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentDetailsService {

  constructor() { }

  imagePath : string = 'assets/Studentimages/';

  getAllStudents() : Student[]{
    let student1 : Student = {
      name : 'Vaishnavi',
      rollNumber : '17wh216',
      email:'vaishu@gmail.com',
      mobileNumber:'9949354300',
      profilePic: this.imagePath+'Girl.PNG',
      joiningDate : new Date("2019-01-16")
    } 
    let student2 : Student = {
      name : 'Rohith',
      rollNumber : '17wh541',
      email:'rohith@gmail.com',
      mobileNumber:'9949453468',
      profilePic: this.imagePath+'Boy.PNG',
      joiningDate : new Date("2000-04-25")
    } 
    return [student1,student2];
  }
}
