import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { AppComponent } from '../app.component';
import { Goals } from '../models/goal';
import { GoalsService } from '../service/goals.service';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-goals',
  templateUrl: './goals.component.html',
  styleUrls: ['./goals.component.scss']
})
export class GoalsComponent implements OnInit {
  sideBarOpen=true;
  goalsList: Array<Goals>[];
  goal = new Goals();
  title:string;
  price:number;
  date:Date;
  goalId: number;
  constructor(public modal:NgbModal,public dialog:MatDialog, private formBuilder: FormBuilder,private goalsService: GoalsService, public appComponent:AppComponent) {
    this.getGoals();
   }
   goalsForm = this.formBuilder.group({
    id:[''],
    name: [''],
    price: [''],
    date:[''],
  });
  editForm = this.formBuilder.group({
    id:[''],
    name: [''],
    price: [''],
    date:[''],
  });
  ngOnInit(): void {
  }
  sideBarToggler() {
    this.sideBarOpen=!this.sideBarOpen;
  }

  getGoals(){
    // this.appComponent.acountID
    this.goalsService.getGoals(this.appComponent.acountID).subscribe(
      (data: Goals[])=>{
        this.goalsList = data['content'];
      }
    )
  }
  addGoal(){
    // this.goalsService.addGoals(1,)
    this.goal.name = this.goalsForm.value.name;
    this.goal.goalAmount = this.goalsForm.value.price;
    this.goal.dateGoal = this.goalsForm.value.date;
    this.goalsService.addGoals(this.goal,this.appComponent.acountID).subscribe(
      data =>{
        // console.log(data);
        this.getGoals();
      }
    )
    // console.log(this.goalsForm.value.date);
  }
  deleteGoal(goalID){
    // console.log(goalID);
    this.goalsService.deleteGoal(this.appComponent.acountID,goalID).subscribe(
        (data)=>{
          console.log(data);
          this.getGoals();
        }
      );
  }
  editGoal(){
    // this.appComponent.acountID
    // this.goal.id = this.editForm.value.id;
    this.goal.name = this.editForm.value.name;
    this.goal.goalAmount = this.editForm.value.price;
    this.goal.dateGoal = this.editForm.value.date;
    console.log(this.goalId);
    this.goalsService.editGoal(this.appComponent.acountID,this.goalId,this.goal).subscribe(
      data =>{
        console.log(data);       
    })
  }
  openModal(content,item){
    this.modal.open(content);
    this.title = item.name;
    this.price = item.goalAmount;
    this.date = item.dateGoal;
    this.goalId = item.id;
    console.log(this.date);
  }
  openDialog(content,item) {
    this.dialog.open(content);
    this.title = item.name;
    this.price = item.goalAmount;
    this.date = item.dateGoal;
    this.goalId = item.id;
    console.log(this.date);
  }
}
