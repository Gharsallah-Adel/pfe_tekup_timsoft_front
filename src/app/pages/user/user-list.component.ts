import { Component, OnInit  } from '@angular/core';
import { UserApiService } from 'src/app/services/user-api.service'; 
import { FormGroup,FormControl,Validators } from '@angular/forms';
import { NgToastService } from 'ng-angular-popup';
import { MatDialog } from '@angular/material/dialog';
import { UserDialogComponent } from 'src/app/dialog/user-dialog/user-dialog.component';
import { UserDetailsComponent } from 'src/app/user-details/user-details.component';


@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  showDetails = false;
  public users:any = [];
  myForm?: FormGroup;


  constructor( 
    private dialog: MatDialog,
    private api : UserApiService,
    private toast: NgToastService,
    ){
     
    }
  ngOnInit(): void {
    
    
    this.api.getUsers()
    .subscribe(res =>{
      this.users = res ;
    console.log(res)
    })
  
  }
  deleteUser(id: any) {
    if (window.confirm("Are you sure to delete this User ?")) {

      this.toast.success({detail:"SUCCESS",summary:'user added successfully',duration:5000});
      setTimeout(() => {
        location.reload();
      }, 2000);
    
      this.api.deleteUser(id).subscribe(() => {
       
});
     
    }
  }

  
  buttonDisabled = false;
 openEditDialog() {
  if (!this.buttonDisabled) {
    this.buttonDisabled = true;
    const dialogRef = this.dialog.open(UserDialogComponent, {
     
      panelClass: 'm-c',
 
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      setTimeout(() => {
        location.reload();
      }, 100);
    });
  }
  }

 
  


        
    


}





