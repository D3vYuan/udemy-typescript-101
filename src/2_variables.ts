// let <variableName>:<type> = <initial_value>;
let found: boolean = true;
let grade: number = 88.6;
let firstName: string = "Anup";
let lastName: string = "Kumar";

found = false;
grade = 99;
firstName = "Eric";
lastName = "Noh";

let myData: any = 50.0; // type-safety is lost

console.log(`Found: ${found}`);
console.log(`The grade is ${grade}`);
console.log(`Hi ${firstName} ${lastName}`);
