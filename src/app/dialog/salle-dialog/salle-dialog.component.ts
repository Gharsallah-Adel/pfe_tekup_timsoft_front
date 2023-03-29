import { Component, OnInit } from '@angular/core';
import { DepartementService } from 'src/app/services/departement.service';
import { NgToastService } from 'ng-angular-popup';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Inject } from '@angular/core';
import { Document } from 'src/app/Modal/document.modal';
import { DocumentService } from 'src/app/services/document.service';
import { Salle } from 'src/app/Modal/salle.modal';
import { SalleService } from 'src/app/services/salle.service';



@Component({
  selector: 'app-salle-dialog',
  templateUrl: './salle-dialog.component.html',
  styleUrls: ['./salle-dialog.component.css']
})
export class SalleDialogComponent implements OnInit {

  salle: Salle = {
    id: '0',
    nameSalle: '',
    bureauName: '',

 
  }

  constructor(
    private api :SalleService, 
    private toast: NgToastService,
    public dialogRef: MatDialogRef<SalleDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
     
    }

    ngOnInit() {
     
    }

  onSaveClick(): void {
    
      this.api.addSalle( this.salle).subscribe(() => {
        this.toast.success({detail:"SUCCESS",summary:'Your Success Message',duration:5000});
        setTimeout(() => {
          location.reload();
        }, 2000);
      });
    
    
    this.dialogRef.close();
  }

  onCancelClick(): void {
    this.dialogRef.close();
  }
}
