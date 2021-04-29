import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-delete-modal',
  templateUrl: './delete-modal.component.html',
  styleUrls: ['./delete-modal.component.css']
})

export class DialogOverviewExampleDialog implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
    @Inject(MAT_DIALOG_DATA) public data) {}

  ngOnInit() {
  }

  Remove(index) {
  //   index = Number(index)
  //   var retrievedData = localStorage.getItem("UsersID");
  //  var  users = JSON.parse(retrievedData);
  // users.splice(index,1);
  //  localStorage.setItem("UsersID", JSON.stringify(users));
  //  this.dialogRef.close([]);
  }

  Close():void{
    this.dialogRef.close()
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
