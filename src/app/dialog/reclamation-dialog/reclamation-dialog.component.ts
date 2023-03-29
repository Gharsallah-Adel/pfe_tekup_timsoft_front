import { Component, OnInit } from '@angular/core';
import { DepartementService } from 'src/app/services/departement.service';
import { NgToastService } from 'ng-angular-popup';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Inject } from '@angular/core';
import { Document } from 'src/app/Modal/document.modal';
import { DocumentService } from 'src/app/services/document.service';
import { Project } from 'src/app/Modal/project.modal';
import { ProjectService } from 'src/app/services/project.service';
import { Reclamation } from 'src/app/Modal/reclamation.modal';
import { ReclamationService } from 'src/app/services/reclamation.service';

@Component({
  selector: 'app-reclamation-dialog',
  templateUrl: './reclamation-dialog.component.html',
  styleUrls: ['./reclamation-dialog.component.css']
})
export class ReclamationDialogComponent implements OnInit {

  reclamation: Reclamation = {
    id: '0',
    Description: ''
  

 
  }

  constructor(
    private api :ReclamationService, 
    private toast: NgToastService,
    public dialogRef: MatDialogRef<ReclamationDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
     
    }

    ngOnInit() {
     
    }

  onSaveClick(): void {
    
      this.api.addReclamation( this.reclamation).subscribe(() => {
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