import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ReactiveFormsModule,FormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from "@angular/common/http";
import { Task1Component } from './task1/task1.component';
import { DialogOverviewExampleDialog } from "./task1/task1.component";
import { view } from "./task1/task1.component";
import {Dialog } from "./task1/task1.component";
import { MaterialModule } from './material/material.module';

@NgModule({
  declarations: [
    AppComponent,
    Task1Component,
    DialogOverviewExampleDialog,
    view,
    Dialog
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule
  ],
  exports:[ BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
