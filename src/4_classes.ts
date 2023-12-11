import { Customer } from "./utility/4_classes/Customer";
import { Customer2 } from "./utility/4_classes/Customer2";
import { Customer3 } from "./utility/4_classes/Customer3";

// -- Case #1 --
let myCustomer = new Customer("Martin", "Dixon");

// myCustomer.firstName = "Martin";
// myCustomer.lastName = "Dixon";

console.log(
  `My customer first and last name is ${myCustomer.firstName} ${myCustomer.lastName}`
);

console.log("--");

// -- Case #2 --

let myCustomer2 = new Customer2("Martin", "Dixon");

myCustomer2.firstName = "Mao";

console.log(
  `My customer first and last name is ${myCustomer2.firstName} ${myCustomer2.lastName}`
);

console.log("--");

// -- Case #3 --
let myCustomer3 = new Customer3("Martin", "Dixon");

// myCustomer3.lastName = "Mao";

console.log(
  `My customer first and last name is ${myCustomer3.firstName} ${myCustomer3.lastName}`
);

console.log("--");
