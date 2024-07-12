import { Injectable } from '@angular/core';
import { Istudent } from '../models/student.interface';
import { SnackbarService } from './snackbar.service';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  studentArray:Array<Istudent>=[
    // {
    //   fname:"jon",
    //   lname:"doe",
    //   email:"jon@123gmail.com",
    //   contact:"12345555",
    //   sId:"122"
    // }
  ]
  constructor( 
    private _SnackbarService : SnackbarService
  ) { }

  fetchAllStudentData(){
    return this.studentArray
  }

  createNewStudent(std:Istudent){
    this.studentArray.push(std)
    this._SnackbarService.openSnackbar(`The student ${std.fname} is Added successfully`)
  }

  removeStudent(stdOoj:Istudent){
    let getIndex=this.studentArray.findIndex(std=>std.sId===stdOoj.sId)
    this.studentArray.splice(getIndex,1)
    this._SnackbarService.openSnackbar(`The student ${stdOoj.fname} is delete successfully`)

  }
}
