import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  
  constructor(private loginService:LoginService) { }

  ngOnInit(): void {
  }

  logoutalrt()
  {
    this.loginService.loginstatus = false; //---1
    alert("Successfully Logged Out");
  }

}
