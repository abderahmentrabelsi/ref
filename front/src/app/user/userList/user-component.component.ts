import { Component } from '@angular/core';
//import userservice
import { UserServiceService } from '../user-service.service';
@Component({
  selector: 'app-user-component',
  templateUrl: './user-component.component.html',
  styleUrls: ['./user-component.component.css']
})
export class UserComponentComponent {
  users: any = [];
  constructor(private userService: UserServiceService) { }
  ngOnInit() {
    this.userService.getAllusers().subscribe((data: any) => {
      this.users = data;
      console.log(this.users); // Check if data is being loaded
    });
  }

}
