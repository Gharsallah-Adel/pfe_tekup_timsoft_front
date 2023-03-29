import { Component, OnInit } from '@angular/core';
import { Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NgToastService } from 'ng-angular-popup';
import { Formation } from 'src/app/Modal/formation.modal';
import { User } from 'src/app/Modal/user.modal';
import { DepartementService } from 'src/app/services/departement.service';
import { FormationService } from 'src/app/services/formation.service';
import { UserApiService } from 'src/app/services/user-api.service';
@Component({
  selector: 'app-formation-dialog',
  templateUrl: './formation-dialog.component.html',
  styleUrls: ['./formation-dialog.component.css']
})
export class FormationDialogComponent implements OnInit {
  

  public departements:any;
  formation: Formation = {
    id: '',
    description: '',
    nombreParticipant: '',
    niveau: '',
    dateDebut: '',
    duree: '',
    dateFin: '',
    statut: '',
    enPresence: '',
    
  }
  constructor(
    private Api : FormationService, 
    private toast: NgToastService,
    public api : DepartementService,
    public dialogRef: MatDialogRef<FormationDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {}

    ngOnInit() {
     
    
    }

  onSaveClick(): void {
    
      this.Api.addFormation( this.formation).subscribe(() => {
        this.toast.success({detail:"SUCCESS",summary:'Your Success Message',duration:5000});
        setTimeout(() => {
          location.reload();
        }, 2000);
      });
      //window.location.reload();
    
    this.dialogRef.close();
  }

  onCancelClick(): void {
    this.dialogRef.close();
  }
}