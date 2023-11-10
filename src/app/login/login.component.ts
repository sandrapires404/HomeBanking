import { Component } from "@angular/core";
import { HomeComponent } from '../home/home.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule} from "@angular/forms";
import { Router } from "@angular/router";
import { FormGroup, FormControl } from "@angular/forms";
import { MatInputModule } from "@angular/material/input";
import { MovsService } from "../services/movs.service";


@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css'],
    standalone: true,
    imports: [MatFormFieldModule, MatInputModule, MatButtonModule, MatIconModule, CommonModule, ReactiveFormsModule],

})



export class LoginComponent {

    constructor(private router: Router, private _movService: MovsService) {}
    hide = true;
    userForm = new FormGroup({
        user: new FormControl("", {nonNullable: true}),
        password: new FormControl("", {nonNullable: true})
    })

    onSubmit() {
        this._movService.getIdList().subscribe({
            next: (res) => {
                console.log(res.user);
                console.log("o colocado é " , this.userForm.value);
                if (this.userForm.value.user == res.user && this.userForm.value.password == res.password) {
                    console.log("letz go");
                    this.router.navigate(['/home']);
                }
            else {         alert("Login Inválido");
        }
              
            },
            error: (err) => {
              console.error(err);
            }
          })
        
    }
}

