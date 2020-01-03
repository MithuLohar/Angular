import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-simple",
  templateUrl: "./simple.component.html",
  styleUrls: ["./simple.component.css"]
})
export class SimpleComponent implements OnInit {
  // color = "red";
  // users = ["manu", "vinu"];
  // Remove(x) {
  //   let index = this.users.indexOf(x);
  //   this.users.splice(index, 1);
  // }
  // isBtn = true;
  // toggleClass = false;
  // toggleState() {
  //   this.toggleClass = !this.toggleClass;
  // }
  // dynamicCSS() {
  //   return {
  //     "bg-danger": true,
  //     color: "text-light",
  //     background: this.toggleClass
  //   };
  // }
  user = [
    {
      name: "tyson",
      age: 20,
      gender: "male",
      country: "india"
    },
    {
      name: "jooly",
      age: 22,
      gender: "female",
      country: "india"
    },
    {
      name: "goku",
      age: 50,
      gender: "male",
      country: "india"
    },
    {
      name: "tom",
      age: 5,
      gender: "male",
      country: "india"
    }
  ];

  constructor() {}

  ngOnInit() {}
}
