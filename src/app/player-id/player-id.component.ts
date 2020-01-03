import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-player-id",
  templateUrl: "./player-id.component.html",
  styleUrls: ["./player-id.component.css"]
})
export class PlayerIdComponent implements OnInit {
  private url =
    "https://cricapi.com/api/playerStats?apikey=fBcPRyuc8KY4IcZHqGKCz9YqW2l1&pid=";
  constructor(private http: HttpClient) {}

  searchPlayer(pid) {
    this.http.get<any>(`${this.url}${pid}`).subscribe(user => {
      // console.log(user);

      console.log(user);
    });
  }

  ngOnInit() {}
}
