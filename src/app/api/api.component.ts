import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-api",
  templateUrl: "./api.component.html",
  styleUrls: ["./api.component.css"]
})
export class APIComponent implements OnInit {
  private url =
    "https://cricapi.com/api/playerFinder?apikey=fBcPRyuc8KY4IcZHqGKCz9YqW2l1&name=";
  constructor(private http: HttpClient) {}
  playerInfo = [];
  searchPlayer(player) {
    this.http.get<any>(`${this.url}${player}`).subscribe(user => {
      // console.log(user);
      this.playerInfo = user.data;
      console.log(this.playerInfo);
    });
  }

  ngOnInit() {}
}
