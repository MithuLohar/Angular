import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { CustomValidators } from "../name.validators";
@Component({
  selector: "app-reactiveform",
  templateUrl: "./reactiveform.component.html",
  styleUrls: ["./reactiveform.component.css"]
})
export class ReactiveformComponent implements OnInit {
  constructor() {}
  form = new FormGroup({
    username: new FormControl("", [
      Validators.required,
      CustomValidators.removeSpace
    ]),
    password: new FormControl("", Validators.required)
  });
  get username() {
    return this.form.get("username");
  }
  get password() {
    return this.form.get("password");
  }
  ngOnInit() {}
}
