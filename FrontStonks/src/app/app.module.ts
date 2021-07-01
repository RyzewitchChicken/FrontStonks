import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './auth/register.component';
import { MainpageComponent } from './main page/mainpage/mainpage.component';
import {MatButtonModule} from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatDividerModule} from '@angular/material/divider';
import {MatToolbarModule} from '@angular/material/toolbar';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatListModule} from '@angular/material/list';
import { HeaderComponent } from './header/header.component';
import {MatTabsModule} from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { TransactionComponent } from './transaction/transaction.component';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatDialogModule} from '@angular/material/dialog';
import {MatSelectModule} from '@angular/material/select';
import {MatTableModule} from '@angular/material/table';
import { TransactionService } from './service/transaction.service';
import { ClienteService } from './service/cliente.service';
import { HttpClientModule } from '@angular/common/http';
import { CuentasComponent} from './cuentas/cuentas.component';
import { ReportesComponent } from './reportes/reportes.component';
import { GoalsComponent } from './goals/goals.component';
import { GoalsService } from './service/goals.service';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BoardService } from './service/board.service';
import { CuentasService } from './service/cuentas.service';
import { BankService } from './service/bank.service';






const root: Routes = [
  {path: '', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'main', component: MainpageComponent},
  {path: 'transaction', component: TransactionComponent},
  {path: 'cuentas', component: CuentasComponent},
  {path: 'reportes', component: ReportesComponent},
  {path: 'goals', component: GoalsComponent}

];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    MainpageComponent,
    HeaderComponent,
    TransactionComponent,
    CuentasComponent,
    ReportesComponent,
    GoalsComponent


  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(root),
    BrowserAnimationsModule,
    MatButtonModule,
    MatSidenavModule,
    MatDividerModule,
    MatToolbarModule,
    FlexLayoutModule,
    MatIconModule,
    MatCardModule,
    MatMenuModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    HttpClientModule,
    MatListModule,
    MatGridListModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatProgressBarModule,
    NgbModule,
    MatDialogModule,
    MatSelectModule,
    MatTabsModule,
    MatTooltipModule


  ],
  providers: [
    ClienteService,
    TransactionService,
    GoalsService,
    BoardService,
    CuentasService,
    BankService,
    AppComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
