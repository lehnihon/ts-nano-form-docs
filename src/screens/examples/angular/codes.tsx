export const angularInputHtmlCode = `<div>
  <div>
    <label>Name</label>
    <input type="text" name="name" (input)="changeName($event)" />
  </div>
  <div>{{ error }}</div>
  <button (click)="submitData()">Send</button>
</div>`;

export const angularInputTsCode = `import { Component, OnInit } from "@angular/core";
import createForm from "ts-nano-form";
import FormUser from "./createFormUser";

const { field } = FormUser;

@Component({
  selector: "app-form",
  templateUrl: "./form.component.html",
  styleUrls: ["./form.component.scss"],
})
export class FormComponent implements OnInit {
  @Input() field: string = "";
  public value: string = "";
  public error: string = "";
  public fieldName = field("name");

  ngOnInit() {
    field(this.field).subscribeValue((value) => (this.value = value));
    field(this.field).subscribeError((value) => (this.error = value));
  }

  changeName(e: any) {
    field(this.field).setValue(e.target.value);
  }

  submitData() {
    submit((data) => console.log("submit", data));
  }
}`;

export const angularFormHtmlCode = `<div>
  <app-form field="name" />
  <button (click)="submitData()">Submit</button>
</div>`;

export const angularFormTsCode = `import { Component } from "@angular/core";
import { FormUser, FormUserFields } from "../formUser";

const { submit } = FormUser;

@Component({
  selector: "app-root",
  templateUrl: "app.component.html",
  styleUrls: ["app.component.scss"],
})
export class AppComponent {
  constructor() {}

  submitData() {
    submit((data) => console.log("submit", data));
  }
}`;
