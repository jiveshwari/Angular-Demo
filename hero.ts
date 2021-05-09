import { EmailValidator } from "@angular/forms";

export class Hero {

  constructor(
    public id: number,
    public name: string,
    public power: string,
    public lname: string,
    public email: string,
    public bday: string,
    public password: string,
    public reppass: string
  ) {  }

}