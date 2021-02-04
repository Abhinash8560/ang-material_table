import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
export interface DialogData {
  animal: string;
  name: string;
}
interface Food {
  value: string;
  viewValue: string;
}

export interface PeriodicElement {
  name: string;
  position: number;
  category: string;
  actions: string;
  delete,
  data_type,
  last_updated,
}
const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'incident_3', category: 'incident', actions: 'H',delete:'',data_type:'integer',last_updated:'16-05-2020'},
  {position: 2, name: 'insured BOD', category: 'person', actions: 'He',delete:'',data_type:'date',last_updated:'05-03-2002'},
  {position: 3, name: 'insured Code', category: 'incident', actions: 'Li',delete:'',data_type:'string',last_updated:'08-01-2001'},
  {position: 4, name: 'Model', category: 'property', actions: 'Be',delete:'',data_type:'string',last_updated:'18-01-2003'},
  {position: 5, name: 'done', category: 'individual', actions: 'B',delete:'',data_type:'date',last_updated:'14-01-2005'}

];
@Component({
  selector: 'app-task1',
  templateUrl: './task1.component.html',
  styleUrls: ['./task1.component.css']
})
export class Task1Component {
  foods: Food[] = [
    {value: 'Table-variables', viewValue: 'Table-variables'},
    {value: 'Calculated Variables', viewValue: 'Calculated Variables'},
    {value: 'Result Variables', viewValue: 'Result Variables'},
    {value: 'Algorithms', viewValue: 'Algorithms'},
    {value: 'Constants', viewValue: 'Constants'},
    {value: 'Filter Rules', viewValue: 'Filter Rules '},
  ];
  displayedColumns: string[] = ['position', 'name','data_type', 'catagory','last_updated', 'actions','delete'];
  dataSource = ELEMENT_DATA;
  flag:boolean=true;
  flag1:boolean=false;
  animal: string;
  name: string;
  element;
  constructor(public dialog: MatDialog)  {
   }
   @ViewChild(MatPaginator) paginator:MatPaginator;

ngOnInit() {
  this.dataSource.paginator=this.paginator;
}
   openDialog(element): void {
    const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
      width: 'auto',
      data: {element}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });
  }
  openview(): void {
    const dialogRef = this.dialog.open(view, {
      width: '500px',
      height:'400px',
      data: {name: this.name, animal: this.animal}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });
  }
  opendelete(): void {
    const dialogRef = this.dialog.open(Dialog, {
      width: '500px',
      height:'400px',
      data: {name: this.name, animal: this.animal}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });
  }
}
@Component({
  selector: 'dialog-overview-example-dialog',
  templateUrl: 'dialog-overview-example-dialog.html',
})
export class DialogOverviewExampleDialog {
element;
data1;
  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
    @Inject(MAT_DIALOG_DATA) public data: PeriodicElement) {
      this.data1=data;
      this.element =this.data1.element;
      //console.log(this.element);
    }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
@Component({
  selector: 'dialog-overview-example-dialog',
  templateUrl: 'view.html',
})
export class view {

  constructor(
    public dialogRef: MatDialogRef<view>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
@Component({
  selector: 'dialog-overview-example-dialog',
  templateUrl: 'delete.html',
})
export class Dialog {

  constructor(
    public dialogRef: MatDialogRef<Dialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}
