import { FormGroup, FormArray, FormControl } from "@angular/forms";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-students",
  templateUrl: "./students.component.html",
  styleUrls: ["./students.component.css"]
})
export class StudentsComponent implements OnInit {
  form = new FormGroup({
    studentList: new FormArray([])
  });
  get GetStudent() {
    return this.form.get("studentList");
  }
  removeStudent(student: FormControl) {
    let index = (this.GetStudent as FormArray).controls.indexOf(student);
    (this.GetStudent as FormArray).removeAt(index);
  }
  constructor() {}
  addStudents(student) {
    (this.GetStudent as FormArray).push(new FormControl(student.value));
  }
  ngOnInit() {}
}
