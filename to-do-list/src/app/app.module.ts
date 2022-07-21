import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TopBarComponent } from './top-bar/top-bar.component';
import { TasksListComponent } from './tasks-list/tasks-list.component';
import { AddTaskFieldComponent } from './add-task-field/add-task-field.component';
import { TasksSummaryComponent } from './tasks-summary/tasks-summary.component';

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    TasksListComponent,
    AddTaskFieldComponent,
    TasksSummaryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
