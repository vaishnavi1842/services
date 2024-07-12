import { Injectable } from '@angular/core';
import {MatSnackBar, } from '@angular/material/snack-bar';



@Injectable({
  providedIn: 'root'
})
export class SnackbarService {

  constructor(
    private _MatSnackBarModule:MatSnackBar
  ) { }

  openSnackbar(msg:string){
    this._MatSnackBarModule.open(msg,"close",{
      duration:2500,
      horizontalPosition:'left',
      verticalPosition:'bottom'
    })
  }
}
