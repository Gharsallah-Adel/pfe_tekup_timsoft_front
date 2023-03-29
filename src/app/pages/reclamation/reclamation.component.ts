import { Component, OnInit  } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import { NgToastService } from 'ng-angular-popup';
import { MatDialog } from '@angular/material/dialog';
import { ReclamationService } from 'src/app/services/reclamation.service';
import { ReclamationDialogComponent } from 'src/app/dialog/reclamation-dialog/reclamation-dialog.component';

@Component({
  selector: 'app-reclamation',
  templateUrl: './reclamation.component.html',
  styleUrls: ['./reclamation.component.css']
})
export class ReclamationComponent implements OnInit {

  public reclamations:any = [];
  myForm?: FormGroup;


  constructor( 
    private dialog: MatDialog,
    private api : ReclamationService,
    private toast: NgToastService,
    ){
     
    }
  ngOnInit(): void {
    
    
    this.api.getReclamations()
    .subscribe(res =>{
      this.reclamations = res ;
    console.log(res)
    })
  
  }

  deleteReclamation(id: any) {
    if (window.confirm("Are you sure to delete this formation ?")) {
    
      this.api.deleteReclamation(id).subscribe(() => {
       
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
    const dialogRef = this.dialog.open(ReclamationDialogComponent, {
     
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







