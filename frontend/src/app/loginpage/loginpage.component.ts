import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Customer } from '../customer';
import { RoomService } from '../room.service';

import { Login } from '../login';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.css']
})
export class LoginpageComponent implements OnInit {

  username!:string;
  password!:string;
  Result !:number;
  error !:string;

  status!: boolean;
  
  constructor(private router : Router,private roomservice : RoomService,private route :ActivatedRoute,
    private loginService:LoginService) { }

  userData : Login = new Login;

  ngOnInit(): void {
  
  }

  onSubmit(username:string,password:string)
  {
      console.log(username,password);

      this.userData.emailId = username;
      this.userData.password = password;

      this.roomservice.checkvaliduser(username,password).subscribe((res) =>
        {
          this.Result = res;
          console.log(this.Result);

          if(this.Result == 1){
            alert("Login Succesfull");
            this.loginService.loginstatus = true; //---1
            this.router.navigate(['/admin']);
          }

          else if(this.Result == 2)
          {
            alert("Login Succesfull");
            this.loginService.loginstatus = true;
            this.router.navigate(['/user',username]);
          }

          else if(this.Result == 0)
          {
            this.error = "Invalid Username";
          }

          else if(this.Result == 3)
          {
            this.error = "Invalid Password";
          }

          // else
          // {
          //   this.loginService.checkUser(this.userData).subscribe(
          //     loginData=> {
          //     if(loginData) {
          //       this.loginService.loginstatus = true;
          //       this.status = true;
          //       this.loginService.setId(username);
          //       this.router.navigate(['login']);
          //     }
          //     else {
          //       this.status = false;
          //     }
          //     // console.log(this.status);
          //     console.log(this.loginService.loginstatus);
          //   });
          // }
        })


  }

  // getroombyusername(userName:string)
  // {
  //   this.roomservice.getcustomerByusername(userName).subscribe(data => 
  //     {
  //       this.customer = data;
  //       console.log(this.customer);
  //     }, error => console.log(error)
  //     );
  // }
  

}
