import { Component, OnInit  } from '@angular/core';
import { UserApiService } from 'src/app/services/user-api.service'; 
//import { User } from '../modal/user.modal';
//import { DepartementService } from '../Services/departement.service';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import { NgToastService } from 'ng-angular-popup';
import { MatDialog } from '@angular/material/dialog';
import { DepartementService } from 'src/app/services/departement.service';
import { DepartementDialogComponent } from 'src/app/dialog/departement-dialog/departement-dialog.component';


@Component({
  selector: 'app-departement',
  templateUrl: './departement.component.html',
  styleUrls: ['./departement.component.css']
})
export class DepartementComponent implements OnInit {

  public departements:any = [];
  myForm?: FormGroup;


  constructor( 
    private dialog: MatDialog,
    private api : DepartementService,
    private toast: NgToastService,
    ){
     
    }
  ngOnInit(): void {
    
    
    this.api.getDepartements()
    .subscribe(res =>{
      this.departements = res ;
    console.log(res)
    })
  
  }

  deleteDepartement(id: any) {
    if (window.confirm("Are you sure to delete this Departement ?")) {

     
    
      this.api.deleteDepartement(id).subscribe(() => {
       
});
        
   
     
    }
    this.toast.success({detail:"SUCCESS",summary:'user added successfully',duration:5000});
    setTimeout(() => {
      location.reload();
    }, 2000);
  
  }

  
  
  
  buttonDisabled = false;
  openEditDialog() {
    if (!this.buttonDisabled) {
      this.buttonDisabled = true;
    const dialogRef = this.dialog.open(DepartementDialogComponent, {
     
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





