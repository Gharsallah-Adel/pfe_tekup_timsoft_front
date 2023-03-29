import { Component, OnInit } from '@angular/core';
import { Departement } from 'src/app/Modal/departement.modal';
import { DepartementService } from 'src/app/services/departement.service';
import { NgToastService } from 'ng-angular-popup';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Inject } from '@angular/core';

@Component({
  selector: 'app-departement-dialog',
  templateUrl: './departement-dialog.component.html',
  styleUrls: ['./departement-dialog.component.css']
})
export class DepartementDialogComponent implements OnInit {

  departement: Departement = {
    id: '0',
    departementName: '',
 
  }
  constructor(
    private api :DepartementService, 
    private toast: NgToastService,
    public dialogRef: MatDialogRef<DepartementDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
     
    }

    ngOnInit() {
     
    }

  onSaveClick(): void {
    
      this.api.addDepartement( this.departement).subscribe(() => {
        this.toast.success({detail:"SUCCESS",summary:'Your Success Message',duration:5000});
        setTimeout(() => {
          location.reload();
        }, 2000);
      });

      
    
    
    this.dialogRef.close();
  }

  // onUpdateClick(): void {
  //   this.api.updateDepartement(this.departement).subscribe(() => {
  //     this.toast.success({detail: "SUCCESS", summary: 'Your Success Message', duration: 5000});
  //     setTimeout(() => {
  //       location.reload();
  //     }, 2000);
  //   });

        
  //   this.dialogRef.close();
  // }
  onCancelClick(): void {
    this.dialogRef.close();
  }
}