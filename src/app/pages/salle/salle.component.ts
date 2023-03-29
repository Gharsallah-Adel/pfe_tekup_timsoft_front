import { Component, OnInit  } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import { NgToastService } from 'ng-angular-popup';
import { MatDialog } from '@angular/material/dialog';
import { SalleService } from 'src/app/services/salle.service';
import { SalleDialogComponent } from 'src/app/dialog/salle-dialog/salle-dialog.component';


@Component({
  selector: 'app-salle',
  templateUrl: './salle.component.html',
  styleUrls: ['./salle.component.css']
})
export class SalleComponent implements OnInit {

  public salles:any = [];
  myForm?: FormGroup;


  constructor( 
    private dialog: MatDialog,
    private api : SalleService,
    private toast: NgToastService,
    ){
     
    }
  ngOnInit(): void {
    
    
    this.api.getSalles()
    .subscribe(res =>{
      this.salles = res ;
    console.log(res)
    })
  
  }

  deleteSalle(id: any) {
    if (window.confirm("Are you sure to delete this formation ?")) {
    
      this.api.deleteSalle(id).subscribe(() => {
       
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
    const dialogRef = this.dialog.open(SalleDialogComponent, {
     
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






