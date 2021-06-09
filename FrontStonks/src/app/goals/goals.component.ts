import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { AppComponent } from '../app.component';
import { Goals } from '../models/goal';
import { GoalsService } from '../service/goals.service';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-goals',
  templateUrl: './goals.component.html',
  styleUrls: ['./goals.component.scss']
})
export class GoalsComponent implements OnInit {
  sideBarOpen=true;
  goalsList: Array<Goals>[];
  goal = new Goals();
  constructor(public modal:NgbModal, private formBuilder: FormBuilder,private goalsService: GoalsService, public appComponent:AppComponent) {
    this.getGoals();
   }
   goalsForm = this.formBuilder.group({
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
    this.goalsService.getGoals(1).subscribe(
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
    this.goalsService.addGoals(this.goal,1).subscribe(
      data =>{
        // console.log(data);
        this.getGoals();
      }
    )
    // console.log(this.goalsForm.value.date);
  }
  deleteGoal(goalID){
    // console.log(goalID);
    this.goalsService.deleteGoal(1,goalID).subscribe(
        (data)=>{
          console.log(data);
          this.getGoals();
        }
      );
  }
  editGoal(){
    // (click) ="open(content)"
  }
  

}
