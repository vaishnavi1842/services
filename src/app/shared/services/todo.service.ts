import { Injectable } from '@angular/core';
import { Itodo } from '../models/todo.interface';
import { SnackbarService } from './snackbar.service';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
 todoArray:Array<Itodo>=[
  // {
  //   todoItem:"Angular",
  //   todoId:"123"
  // },
  // {
  //   todoItem:"Javascrit",
  //   todoId:"124"
  // }
 ]
  constructor(
    private _SnackbarService :SnackbarService
  ) { }

  fetchAllTodos(){
    return this.todoArray
  }

  createNewTodo(todo:Itodo){
    this.todoArray.push(todo)
    this._SnackbarService.openSnackbar(`${todo.todoItem} is added successfully`)

  }

  deleteTodo(todoObj:Itodo){
    let getIndex=this.todoArray.findIndex(todo=>todo.todoId===todoObj.todoId);
    this.todoArray.splice(getIndex,1);
    this._SnackbarService.openSnackbar(`${todoObj.todoItem} is delete successfully`)

  }
}
