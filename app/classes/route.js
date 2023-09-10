import { NextResponse } from "next/server";

class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  speak() {
    console.log(`Hello ${this.firstName} ${this.lastName}`);
    return `Hello ${this.firstName} ${this.lastName}`;
  }
}

const herman = new Person("Herman", "Larsen");

export async function GET(request) {
  return NextResponse.json({ response: herman.speak() }, { status: 200 });
}
