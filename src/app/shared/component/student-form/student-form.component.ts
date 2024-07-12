import { Component, OnInit, ViewChild } from '@angular/core';
import { StudentService } from '../../services/student.service';
import { NgForm } from '@angular/forms';
import { UuidService } from '../../services/uuid.service';

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.scss']
})
export class StudentFormComponent implements OnInit {
  @ViewChild('stdForm')stdForm!:NgForm
  constructor(
    private _StudentService : StudentService,
    private _UuidService :UuidService
  ) { }

  ngOnInit(): void {
  }

  onstdAdd(std:string){
    let s={...this.stdForm.value,id:this._UuidService.Uuid()}
    console.log(s);
    this.stdForm.reset()
    this._StudentService.createNewStudent(s)
    
  }
  
}
