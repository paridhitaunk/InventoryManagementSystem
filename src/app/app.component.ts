import { Component } from '@angular/core';
import { Auth, authState, getAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { AuthenticationService } from './Services/authentication.service';
import { CommonServiceService } from './SharedService/common-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'inventorymanagement';
  id:any;
  user = '';
  flag:boolean
  currentUser:any;
  constructor(public authService:AuthenticationService,private router:Router,private auth:Auth,private commonServices:CommonServiceService){}

  ngOnInit()
  {
    this.currentUser= this.commonServices.userData;
    console.log(this.currentUser)
  }
  
  logout(){
    this.authService.logout().subscribe(()=>{
      this.router.navigate(['']);
    });
  }

}
