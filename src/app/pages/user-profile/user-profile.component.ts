import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../../services/auth.service';
;

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})

export class UserProfileComponent implements OnInit {
  User: any = {};
currentUser:any=""
  constructor(
    public authService: AuthService,
    private activatedRoute: ActivatedRoute
  ) {
    let id = this.activatedRoute.snapshot.paramMap.get('id');
   this.currentUser=id
  }

  ngOnInit() {
    console.log('corriente usuario',this.currentUser)
    this.authService.getUserProfile(this.currentUser).subscribe((data:any)=>{
      this.User=data
    })
   }
  
}