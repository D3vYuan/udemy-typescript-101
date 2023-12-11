import { Coach } from "./utility/7_inheritance/Coach";
import { CricketCoach } from "./utility/7_inheritance/CricketCoach";
import { GolfCoach } from "./utility/7_inheritance/GolfCoach";

let cricketCoach = new CricketCoach();
let golfCoach = new GolfCoach();

let coaches: Coach[] = [];

coaches.push(cricketCoach);
coaches.push(golfCoach);

for (let coach of coaches) {
  console.log(coach.getDailyWorkout());
}

console.log("--");
