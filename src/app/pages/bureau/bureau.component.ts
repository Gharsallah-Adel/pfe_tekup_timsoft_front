import { Component, OnInit  } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import { NgToastService } from 'ng-angular-popup';
import { MatDialog } from '@angular/material/dialog';
import { SalleService } from 'src/app/services/salle.service';
import { SalleDialogComponent } from 'src/app/dialog/salle-dialog/salle-dialog.component';
import { BureauService } from 'src/app/services/bureau.service';
import { BureauDialogComponent } from 'src/app/dialog/bureau-dialog/bureau-dialog.component';


@Component({
  selector: 'app-bureau',
  templateUrl: './bureau.component.html',
  styleUrls: ['./bureau.component.css']
})
export class BureauComponent implements OnInit {

  public bureaux:any = [];
  myForm?: FormGroup;


  constructor( 
    private dialog: MatDialog,
    private api : BureauService,
    private toast: NgToastService,
    ){
     
    }
  ngOnInit(): void {
    
    
    this.api.getBureaux()
    .subscribe(res =>{
      this.bureaux = res ;
    console.log(res)
    })
  
  }

  deleteBureau(id: any) {
    if (window.confirm("Are you sure to delete this formation ?")) {
    
      this.api.deleteBureau(id).subscribe(() => {
       
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
    const dialogRef = this.dialog.open(BureauDialogComponent, {
     
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






