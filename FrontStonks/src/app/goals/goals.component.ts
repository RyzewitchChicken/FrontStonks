import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
import { Goals } from '../models/goal';
import { GoalsService } from '../service/goals.service';

@Component({
  selector: 'app-goals',
  templateUrl: './goals.component.html',
  styleUrls: ['./goals.component.scss']
})
export class GoalsComponent implements OnInit {
  sideBarOpen=true;
  goalsList: Array<Goals>[];
  constructor(private goalsService: GoalsService, public appComponent:AppComponent) {
    this.getGoals()
   }

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
        console.table(this.goalsList);

        // return data['content'];
      }
    )
  }
  

}
