import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { TopBarComponent } from './top-bar/top-bar.component';
import { TasksListComponent } from './tasks-list/tasks-list.component';
import { AddTaskFieldComponent } from './add-task-field/add-task-field.component';
import { TasksSummaryComponent } from './tasks-summary/tasks-summary.component';

import { MatToolbarModule } from '@angular/material/toolbar'; 
import { MatIconModule } from '@angular/material/icon'; 
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import {MatListModule} from '@angular/material/list';






@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    TasksListComponent,
    AddTaskFieldComponent,
    TasksSummaryComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    FormsModule,
    MatListModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
