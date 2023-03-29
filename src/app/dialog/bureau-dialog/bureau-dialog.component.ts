import { Component, OnInit } from '@angular/core';
import { DepartementService } from 'src/app/services/departement.service';
import { NgToastService } from 'ng-angular-popup';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Inject } from '@angular/core';
import { Document } from 'src/app/Modal/document.modal';
import { DocumentService } from 'src/app/services/document.service';
import { Bureau } from 'src/app/Modal/bureau.modal';
import { BureauService } from 'src/app/services/bureau.service';

@Component({
  selector: 'app-bureau-dialog',
  templateUrl: './bureau-dialog.component.html',
  styleUrls: ['./bureau-dialog.component.css']
})
export class BureauDialogComponent implements OnInit {

  bureau: Bureau = {
    id: '0',
    BureauName: '',
    Address: '',

 
  }

  constructor(
    private api :BureauService, 
    private toast: NgToastService,
    public dialogRef: MatDialogRef<BureauDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
     
    }

    ngOnInit() {
     
    }

  onSaveClick(): void {
    
      this.api.addBureau( this.bureau).subscribe(() => {
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
