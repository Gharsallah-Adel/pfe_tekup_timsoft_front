import { Component, OnInit } from '@angular/core';
import { UserApiService } from 'src/app/services/user-api.service';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/Modal/user.modal';


@Component({
  selector: 'app-users-profile',
  templateUrl: './users-profile.component.html',
  styleUrls: ['./users-profile.component.css']
})
export class UsersProfileComponent implements OnInit {
  

  id : any;
    user: User = {
      id: 0,
      firstName: '',
      lastName: '',
      userName: '',
      password: '',
      department: '',
  };
  constructor(
    private api : UserApiService,private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
     this.id = this.route.snapshot.paramMap.get('id');
    this.api.getUserById(this.id).subscribe( response => {
      this.user = response;
    },
    error => {
      console.error(error);
    }
  );
  
  }

}
