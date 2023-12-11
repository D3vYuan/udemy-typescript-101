// -- Case #1 --
for (let i = 0; i < 5; i++) {
  console.log(i);
}
console.log("--");

// -- Case #2 --
let reviews: number[] = [5, 5, 4.5, 1, 3];

let total: number = 0;

for (let i = 0; i < reviews.length; i++) {
  console.log(reviews[i]);
  total += reviews[i];
}

let average: number = total / reviews.length;
console.log(`Review Average = ${average}`);

console.log("--");

// -- Case #3 --
let sports: string[] = ["Golf", "Cricket", "Tennis", "Swimming"];

for (let i = 0; i < sports.length; i++) {
  console.log(sports[i]);
}

console.log("--");

for (let sport of sports) {
  if (sport == "Cricket") {
    console.log(`My favourite sport is ${sport}`);
  } else {
    console.log(sport);
  }
}

console.log("--");

// -- Case #4 --

let sports_growable: string[] = ["Golf", "Cricket", "Tennis"];

sports_growable.push("Baseball");
sports_growable.push("Futbol");

for (let sport of sports_growable) {
  console.log(sport);
}

console.log("--");
