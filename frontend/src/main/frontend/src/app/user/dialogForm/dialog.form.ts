import {Component, Inject} from "@angular/core";
import {FormBuilder, FormGroup, NgForm, Validators} from "@angular/forms";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";
import {Router} from "@angular/router";
import {ServiceApi} from "../../core/service.api";
import {User} from "../../core/entity/User";

@Component({
  selector: 'DialogForml',
  templateUrl: './dialog.form.html',
  styleUrls: ['./dialog.form.css']
})
export class DialogForm {

  UserForm: FormGroup;
  matcher: any;

  constructor(
    public dialogRef: MatDialogRef<DialogForm>,
    @Inject(MAT_DIALOG_DATA) public data,
    private router: Router,
    private service: ServiceApi,
    private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.UserForm = this.formBuilder.group({
      'id': [''],
      'firstName': ['', Validators.required],
      'lastName': ['', Validators.required],
      'email': ['', [Validators.required, Validators.email,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')]],
      'password': ['', [Validators.required, Validators.minLength(6)]]
    });

  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onFormSubmit(form: NgForm) {
    let user: User = {
      id: null,
      lastName: form['lastName'],
      firstName: form['firstName'],
      password: form['password'],
      email: form['email']
    };
    if (form) {
      this.service.createUser(user).subscribe(res => {
          console.log(res);
          this.dialogRef.close();
        },
        err => {
          console.log(err);
        }
      );
    }
  }

}
