import { HttpClientModule, HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
@Component({
  selector: "course",
  templateUrl: "./courses.component.html",
  styleUrls: ["/courses.Component.css"]
})
export class coursescomponent implements OnInit {
  // user = [{ name: "mithu", age: 20, company: "testyantra" }, {}, {}, {}, {}];
  //to use service or dependency injection
  constructor(private http: HttpClient) {
    this.http.get("https://api.github.com/users").subscribe(user => {
      console.log(user);
    });
  }
  ngOnInit() {
    //   window
    //     .fetch("https://api.github.com/users")
    //     .then(data => {
    //       data
    //         .json()
    //         .then(info => {
    //           console.log(info);
    //         })
    //         .catch(err => console.log(err));
    //     })
    //     .catch(err => console.log(err));
  }
}
