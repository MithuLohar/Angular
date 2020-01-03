import { coursescomponent } from "./courses/courses.component";
import { JspidersComponent } from "./jspiders.component";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms"; //import form module
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { LoginComponent } from "./login/login.component";
import { EmpComponent } from "./emp/emp.component";
//import routerModule first -->routing configuration
import { RouterModule } from "@angular/router";
import { RegisterComponent } from "./register/register.component";
import { HomeComponent } from "./home/home.component";
import { PagenotfoundComponent } from "./pagenotfound/pagenotfound.component";
import { UsersComponent } from "./users/users.component";
import { SimpleComponent } from "./simple/simple.component";
import { CustomDirective } from "./custom.directive";
import { HeadComponent } from "./head/head.component";
import { NewDirective } from "./new.directive";
import { LoginformComponent } from "./loginform/loginform.component";
import { FormComponent } from "./form/form.component";
import { ReactiveformComponent } from "./reactiveform/reactiveform.component";
import { ReactiveFormsModule } from "@angular/forms";
import { StudentsComponent } from "./students/students.component";
import { ContactComponent } from "./contact/contact.component";
//import httpclient module from @angular/common/http
import { HttpClientModule } from "@angular/common/http";
import { APIComponent } from "./api/api.component";
import { PlayerIdComponent } from './player-id/player-id.component';
@NgModule({
  declarations: [
    AppComponent,
    JspidersComponent,
    coursescomponent,
    HeaderComponent,
    LoginComponent,
    EmpComponent,
    RegisterComponent,
    HomeComponent,
    PagenotfoundComponent,
    UsersComponent,
    SimpleComponent, //register in app.module
    CustomDirective,
    HeadComponent,
    NewDirective,
    LoginformComponent,
    FormComponent,
    ReactiveformComponent,
    StudentsComponent,
    ContactComponent,
    APIComponent,
    PlayerIdComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: "", component: HomeComponent }, //home component
      { path: "login", component: LoginComponent },
      { path: "register", component: RegisterComponent },
      { path: "**", component: PagenotfoundComponent },
      { path: "api", component: APIComponent } //404 page not found//always last
    ]),
    HttpClientModule
  ], //module
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
