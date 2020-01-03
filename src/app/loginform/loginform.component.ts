import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-loginform",
  templateUrl: "./loginform.component.html",
  styleUrls: ["./loginform.component.css"]
})
export class LoginformComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
  log(username) {
    console.log(username);
  }
  submit(form) {
    console.log(form.value);
  }
}
