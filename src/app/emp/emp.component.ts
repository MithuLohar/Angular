import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-emp",
  templateUrl: "./emp.component.html",
  styleUrls: ["./emp.component.css"]
})
export class EmpComponent implements OnInit {
  employee = [
    {
      emp_photo:
        "https://cdn.pixabay.com/photo/2015/03/04/22/35/head-659651__340.png",
      emp_name: "mithu",
      emp_id: 1,
      emp_designation: "nodehs developer",
      emp_salary: 500000,
      emp_location: "jsr",
      emp_education: "BTECH",
      emp_DOJ: new Date("10/10/2015")
    },
    {
      emp_photo:
        "https://cdn.pixabay.com/photo/2018/11/13/21/43/instagram-3814049__340.png",
      emp_name: "stryker",
      emp_id: 2,
      emp_designation: "expressjs developer",
      emp_salary: 50000,
      emp_location: "BTM",
      emp_education: "BSC",
      emp_DOJ: new Date("08/10/2015")
    }
  ];
  // imgurl =
  //   "https://cdn.pixabay.com/photo/2019/03/21/15/51/chatbot-4071274__340.jpg";
  // isActive = true;
  // colSpan = 10;
  // click(x) {
  //   // alert("hello angular here" + event);
  //   console.log(x);
  // }
  // username(event) {
  //   console.log("username is pressed", event.target.value);
  // }
  // enteremail(email) {
  //   console.log(email);
  // }
  constructor() {}

  ngOnInit() {}
}
