import { Component, OnInit  } from '@angular/core';
import { UserApiService } from 'src/app/services/user-api.service'; 
//import { User } from '../modal/user.modal';
//import { DepartementService } from '../Services/departement.service';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import { NgToastService } from 'ng-angular-popup';
import { MatDialog } from '@angular/material/dialog';
import { FormationService } from 'src/app/services/formation.service';
import { FormationDialogComponent } from 'src/app/dialog/formation-dialog/formation-dialog.component';
import { DocumentService } from 'src/app/services/document.service';
import { DocumentDialogComponent } from 'src/app/dialog/document-dialog/document-dialog.component';



@Component({
  selector: 'app-document',
  templateUrl: './document.component.html',
  styleUrls: ['./document.component.css']
})
export class DocumentComponent implements OnInit {

  public documents:any = [];
  myForm?: FormGroup;


  constructor( 
    private dialog: MatDialog,
    private api : DocumentService,
    private toast: NgToastService,
    ){
     
    }
  ngOnInit(): void {
    
    
    this.api.getDocuments()
    .subscribe(res =>{
      this.documents = res ;
    console.log(res)
    })
  
  }

  deleteDocument(id: any) {
    if (window.confirm("Are you sure to delete this document ?")) {
    
      this.api.deleteDocument(id).subscribe(() => {
       
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
    const dialogRef = this.dialog.open(DocumentDialogComponent, {
     
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






