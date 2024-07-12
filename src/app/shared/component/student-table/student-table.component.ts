import { Component, inject, Input, OnInit } from '@angular/core';
import { StudentService } from '../../services/student.service';
import { Istudent } from '../../models/student.interface';

@Component({
  selector: 'app-student-table',
  templateUrl: './student-table.component.html',
  styleUrls: ['./student-table.component.scss']
})
export class StudentTableComponent implements OnInit {
  stdArr!:Array<Istudent>
  private _StudentService = inject(StudentService)
  constructor() { }

  ngOnInit(): void {
   this.stdArr= this._StudentService.fetchAllStudentData()
  }

  onDeleteStd(sId:Istudent){
   this._StudentService.removeStudent(sId) 
  }

}
