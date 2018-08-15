import {Component, OnInit} from '@angular/core';
import {ServiceApi} from "../core/service.api";
import {User} from "../core/entity/User";
import {FormBuilder, FormGroup, NgForm, Validators} from "@angular/forms";
import {MatDialog} from "@angular/material";
import {DialogForm} from "./dialogForm/dialog.form";
import {DialogConfirm} from "./dialogConfirm/dialog.confirm";

@Component({
  selector: 'app-first-page',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  users: any;
  userDetails: User;
  EditForm: FormGroup;
  matcher: any;
  displayedColumns: string[] = ['id', 'firstName', 'lastName', 'email', 'password'];

  constructor(private service: ServiceApi,
              private formBuilder: FormBuilder,
              public dialog: MatDialog) {

  }

  ngOnInit() {
    this.EditForm = this.formBuilder.group({
      'id': [''],
      'firstName': ['', Validators.required],
      'lastName': ['', Validators.required],
      'email': ['', [Validators.required, Validators.email,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')]],
      'password': ['', [Validators.required, Validators.minLength(6)]]
    });
    this.getAllUsers();
  }


  onFormSubmit(form: NgForm) {
    let user: User = {
      id: form['id'],
      lastName: form['lastName'],
      firstName: form['firstName'],
      password: form['password'],
      email: form['email']
    };

    this.service.updateUser(user).subscribe(res => {
        console.log(res);
        this.users = res
      },
      err => {
        console.log(err);
      }
    );

    this.userDetails = null;
  }


  showDetails(row) {
    this.EditForm.patchValue(row);
    this.userDetails = row;
  }


  getAllUsers() {
    this.service.getUsers().subscribe(data => {
      this.users = data;
    });
  }


  openDialog(): void {
    const dialogRef = this.dialog.open(DialogForm, {
      width: '400px',
      data: {name: "Create User"}
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.getAllUsers();
    });
  }

  RemoveUser(id: number) {

    let dialogRef = this.dialog.open(DialogConfirm,
      {height: 'auto', width: '600px', data: {title: 'user'}});

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log(result);
      if (result) {
        this.service.deleteUser(id).subscribe(res => {
            console.log(res);
            this.getAllUsers();

            this.userDetails = null;
          },
          err => {
            console.log(err);
          }
        );
      }
    });


  }
}
