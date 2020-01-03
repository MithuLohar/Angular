import { Component, OnInit } from "@angular/core";
import * as firebase from "firebase";
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  title = "jspider";
  ngOnInit() {
    var firebaseConfig = {
      apiKey: "AIzaSyBqnPjXyYHkYK23eT5VfZPd69myrCK2tBw",
      authDomain: "fullstack-angular-69137.firebaseapp.com",
      databaseURL: "https://fullstack-angular-69137.firebaseio.com",
      projectId: "fullstack-angular-69137",
      storageBucket: "fullstack-angular-69137.appspot.com",
      messagingSenderId: "799205797433",
      appId: "1:799205797433:web:49c6f31db255997bf8e7e8"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
  }
}
