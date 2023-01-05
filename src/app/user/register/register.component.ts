import { SocialService } from './../../services/social.service';
import { BehaviorSubject } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IUser } from 'src/app/models/user.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  private _user!: BehaviorSubject<IUser>;
  registerForm: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
    ]),
  });
  constructor(private socService: SocialService) {}

  ngOnInit(): void {}

  registerUser() {
    let user = this.registerForm.value;
    this.socService.createUser(user).subscribe({
      next: (res) => {},
      complete: () => {},
      error: () => {},
    });
  }
}
