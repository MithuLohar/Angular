import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-users",
  templateUrl: "./users.component.html",
  styleUrls: ["./users.component.css"]
})
export class UsersComponent implements OnInit {
  user = [
    {
      name: "Stryker",
      photo:
        "https://cdn.pixabay.com/photo/2015/03/04/22/35/head-659651__340.png",
      Id: "JSP1",
      Designattion: "java developer",
      DOJ: new Date("06/08/2016"),
      Education: "BTech",
      DOB: new Date("23/08/1996"),
      Company_name: "JSpiderS",
      Salary: 100000,
      loacation: "Banglore"
    },
    {
      name: "lucy",
      photo:
        "https://cdn.pixabay.com/photo/2018/01/15/07/51/woman-3083378__340.jpg",
      Id: "JSP2",
      Designattion: "SQL developer",
      DOJ: new Date("06/08/2016"),
      Education: "BCA",
      DOB: new Date("08/09/1996"),
      Company_name: "QspiderS",
      Salary: 40000,
      loacation: "Mysore"
    },
    {
      name: "deadshot",
      photo:
        "https://cdn.pixabay.com/photo/2017/01/31/23/48/skull-2028286__340.png",
      Id: "JSP3",
      Designattion: "Shooter",
      DOJ: new Date("08/09/2017"),
      Education: "PHD",
      DOB: new Date("04/09/1990"),
      Company_name: "Suicide Squad",
      Salary: 10000000,
      loacation: "Gotham"
    },
    {
      name: "Bruce",
      photo:
        "https://cdn.pixabay.com/photo/2014/10/05/23/24/halloween-475932__340.png",
      Id: "Jsp4",
      Designattion: "BOSE",
      DOJ: new Date("06/06/1996"),
      Education: "overachiever",
      DOB: new Date("09/09/1890"),
      Company_name: "wayne foundation",
      Salary: 2000000000000,
      loacation: "gotham"
    }
  ];

  AddNewUser() {
    this.user.unshift({
      name: "Bruce",
      photo:
        "https://cdn.pixabay.com/photo/2014/10/05/23/24/halloween-475932__340.png",
      Id: "Jsp4",
      Designattion: "BOSE",
      DOJ: new Date("06/06/1996"),
      Education: "overachiever",
      DOB: new Date("09/09/1890"),
      Company_name: "wayne foundation",
      Salary: 2000000000000,
      loacation: "gotham"
    });
  }

  RemoveUser(x) {
    let index = this.user.indexOf(x);
    this.user.splice(index, 1);
  }

  constructor() {}

  ngOnInit() {}
}
