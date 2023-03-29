import { Component, OnInit  } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import { NgToastService } from 'ng-angular-popup';
import { MatDialog } from '@angular/material/dialog';
import { ProjectService } from 'src/app/services/project.service';
import { ProjectDialogComponent } from 'src/app/dialog/project-dialog/project-dialog.component';


@Component({
  selector: 'app-projrct',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {

  public projects:any = [];
  myForm?: FormGroup;


  constructor( 
    private dialog: MatDialog,
    private api : ProjectService,
    private toast: NgToastService,
    ){
     
    }
  ngOnInit(): void {
    
    
    this.api.getProjects()
    .subscribe(res =>{
      this.projects = res ;
    console.log(res)
    })
  
  }

  deleteProject(id: any) {
    if (window.confirm("Are you sure to delete this formation ?")) {
    
      this.api.deleteProject(id).subscribe(() => {
       
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
    const dialogRef = this.dialog.open(ProjectDialogComponent, {
     
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






