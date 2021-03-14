import { Controller } from "stimulus";

export default class extends Controller {

  static targets = ["name"];

  greet() {
    console.log(`Hello ${this.name}!`);
  }

  get name() {
    console.log(this);
    return this.nameTarget.value;
  }
};