import { Component } from '@angular/core';
import { findIndex } from 'rxjs';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent {
  constructor() { };
    dummyArray: any[] = [
  { id: 1, taskname: 'Login Page', Date: "20/1/2024", StatusLabel: 'New',StatusValue:1 },
  { id: 2, taskname: 'Contact Page', Date: "20/1/2024", StatusLabel: 'In Progress' ,StatusValue:2},
  { id: 3, taskname: 'Azure Function', Date: "20/1/2024", StatusLabel: 'Under Review' ,StatusValue:3},
  { id: 4, taskname: 'CRUD Api', Date: "20/1/2024", StatusLabel: 'Cancelled',StatusValue:0 },
 
    ];
  visible: boolean = false;
  newTaskName: any = '';
  newTaskDate: any = '';

  changestatus(id: any, newStatusValue: any): void {
  const taskToUpdate = this.dummyArray.find(task => task.id === id);

  if (taskToUpdate) {
    taskToUpdate.StatusValue = newStatusValue;

    switch (newStatusValue) {
      case 0:
        taskToUpdate.StatusLabel = 'Cancelled';
        break;
      case 1:
        taskToUpdate.StatusLabel = 'New';
        break;
      case 2:
        taskToUpdate.StatusLabel = 'In Progress';
        break;
      case 3:
        taskToUpdate.StatusLabel = 'Under Review';
        break;
      default:
        break;
    }
  }
  }
  
  addtask() {
  const newId = Math.floor(Math.random() * 1000) + 1; 
  const newTask = {
    id: newId,
    taskname: this.newTaskName,
    Date: this.newTaskDate,
    StatusLabel: 'New',
    StatusValue: 1
  };
    this.dummyArray.push(newTask);
     this.visible = false;
     this.newTaskName = '';
  this.newTaskDate = '';
   }

    showDialog() {
        this.visible = true;
    }

    closeDialog() {
        this.visible = false;
    }

}
