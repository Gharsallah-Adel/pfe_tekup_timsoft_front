import { Component, OnInit  } from '@angular/core';
import { UserApiService } from 'src/app/services/user-api.service'; 
//import { User } from '../modal/user.modal';
//import { DepartementService } from '../Services/departement.service';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import { NgToastService } from 'ng-angular-popup';
import { MatDialog } from '@angular/material/dialog';
import { FormationService } from 'src/app/services/formation.service';
import { FormationDialogComponent } from 'src/app/dialog/formation-dialog/formation-dialog.component';


@Component({
  selector: 'app-formation',
  templateUrl: './formation.component.html',
  styleUrls: ['./formation.component.css']
})
export class FormationComponent implements OnInit {

  public formations:any = [];
  myForm?: FormGroup;


  constructor( 
    private dialog: MatDialog,
    private api : FormationService,
    private toast: NgToastService,
    ){
     
    }
  ngOnInit(): void {
    
    
    this.api.getFormations()
    .subscribe(res =>{
      this.formations = res ;
    console.log(res)
    })
  
  }

  deleteFormation(id: any) {
    if (window.confirm("Are you sure to delete this formation ?")) {
    
      this.api.deleteFormation(id).subscribe(() => {
       
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
    const dialogRef = this.dialog.open(FormationDialogComponent, {
     
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





