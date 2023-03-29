import { Component, OnInit, ElementRef } from '@angular/core';
import { DepartementService } from 'src/app/services/departement.service';
import { FormationService } from 'src/app/services/formation.service';
import { UserApiService } from 'src/app/services/user-api.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  count: any;
  formations: any;
  departements: any;

  constructor(private elementRef: ElementRef,  private api : UserApiService, 
    private formationService : FormationService,
    private departementService : DepartementService ) { }

  ngOnInit(): void {

    this.api.GetUsersCount().subscribe(count => {
      this.count = count;
    });

    this.formationService.GetFormationsCount().subscribe(formations => {
      this.formations = formations;
    });

    this.departementService.GetDepartementsCount().subscribe(departements => {
      this.departements = departements;
    });



    var s = document.createElement("script");
    s.type = "text/javascript";
    s.src = "../assets/js/main.js";
    this.elementRef.nativeElement.appendChild(s);
  }

}
