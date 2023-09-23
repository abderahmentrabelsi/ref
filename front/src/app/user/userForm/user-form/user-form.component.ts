import { Component } from '@angular/core';
import { UserServiceService } from '../../user-service.service';
//import formbuilder,formgroup,validators
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent {
  userForm: FormGroup;


  constructor(private userService: UserServiceService, private formBuilder: FormBuilder) {
    this.userForm = this.formBuilder.group({
      username: ['', Validators.required],
      email: ['', Validators.required]
    });
  }
  onSubmit() {
    if (this.userForm.valid) {
      console.log('Form Data:', this.userForm.value); // Add this line for debugging
      this.userService.addUser(this.userForm.value).subscribe((response) => {
        console.log('Response:', response); // Add this line for debugging
      });
    }
  }



}
