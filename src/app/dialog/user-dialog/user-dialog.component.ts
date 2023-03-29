import { Component, OnInit } from '@angular/core';
import { Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NgToastService } from 'ng-angular-popup';
import { User } from 'src/app/Modal/user.modal';
import { DepartementService } from 'src/app/services/departement.service';
import { UserApiService } from 'src/app/services/user-api.service';
@Component({
  selector: 'app-user-dialog',
  templateUrl: './user-dialog.component.html',
  styleUrls: ['./user-dialog.component.css']
})
export class UserDialogComponent implements OnInit {
  public departements:any;
  user: User = {
    id: '',
    firstName: '',
    lastName: '',
    userName: '',
    password: '',
    department: ''
  }
  constructor(
    private userApi : UserApiService, 
    private toast: NgToastService,
    public api : DepartementService,
    public dialogRef: MatDialogRef<UserDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {}

    ngOnInit() {
      this.api.getDepartements()
      .subscribe(res =>{
        this.departements = res ;
        
      })
    
    }

  onSaveClick(): void {
      this.userApi.addUser( this.user).subscribe(() => {
        this.toast.success({detail:"SUCCESS",summary:'Your Success Message',duration:5000});
        setTimeout(() => {
          location.reload();
        }, 2000);
      });
      //window.location.reload();
    
    this.dialogRef.close();
  }

  onCancelClick(): void {
    this.dialogRef.close();
  }
}