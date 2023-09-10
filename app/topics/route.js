import { NextResponse } from "next/server";

const newTopics = new Set();

newTopics.add("cats");

newTopics.add("cars");

class myClass {
  basicProperty = "my string";

  emptyProperty;

  constructor(myInitialValue) {
    this.myInitialValue = myInitialValue;
  }

  myMethod() {
    console.log(this.myInitialValue);
  }
}

const myClassInstance = new myClass("hello world");

myClassInstance.myMethod();

class User {
  language = "Norwegian";
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  greetUser() {
    console.log(`hello, ${this.firstName} ${this.lastName}!`);
  }
}

class shoppingCart {
  cart = [];

  constructor(shopName, currency) {
    this.shopName = shopName;
    this.currency = currency;
  }

  addToCart(item) {
    this.cart.push(item);
  }

  removeFromCart(item) {
    const idToFind = item.id;
    const indexToRemove = this.cart.findIndex(
      (currentItem) => currentItem.id === idToFind
    );

    if (indexToRemove === -1) {
      return null;
    }

    const newCart = this.cart.filter((item, index) => index !== indexToRemove);

    this.cart = [...newCart];

    console.log("removed ", item.title, " from cart");
  }

  calculateTotalCost() {
    const totalCost = this.cart.reduce((total, item) => {
      total += item.price;
      return total;
    }, 0);
    return totalCost;
  }

  displayTotalCost() {
    console.log("total items: ", this.cart.length);
    console.log("total cost: ", this.calculateTotalCost());
  }

  displayCart() {
    console.log("your cart:");
    console.log("-----------");
    this.cart.forEach((item) => {
      console.log(item.title);
    });
    console.log("----------");
  }
}

const myCart = new shoppingCart("Rema 1000", "NOK");

const cookies = { id: 6, title: "safari", price: 25.5 };
const soda = { id: 2, title: "databrus", price: 15 };

myCart.addToCart(cookies);
myCart.addToCart(soda);
myCart.addToCart(soda);
myCart.displayCart();
myCart.displayTotalCost();
myCart.removeFromCart(soda);
myCart.displayCart();
myCart.displayTotalCost();

const userOne = new User("bon", "jovi");

userOne.greetUser();

export async function GET(request) {
  console.log("search params >>>", request.nextUrl.searchParams);
  let params = new URLSearchParams(request.nextUrl.searchParams);
  let searchedTopic = params.get("topic");
  const topicsTrue = newTopics.has(searchedTopic);
  let message = "";
  if (topicsTrue) {
    message = "yes, the topic: " + searchedTopic + " exists";
  } else {
    message = "Sorry, the topic: " + searchedTopic + " does not exist";
  }

  return NextResponse.json({ data: message }, { status: 200 });
}

export async function POST(request) {
  let res = await request.json();
  console.log(res.topic);
  newTopics.add(res.topic);
  console.log("request" + request.body);
  console.log(newTopics.size);
  return NextResponse.json({ message: "something happened" });
}

export async function DELETE(request) {
  let res = await request.json();
  newTopics.delete(res.topic);
  return NextResponse.json({ message: "something happened" });
}
