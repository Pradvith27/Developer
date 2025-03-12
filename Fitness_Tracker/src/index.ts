import { addUser, logWorkout, getAllWorkoutsOf, getUserWithWorkouts, updateUser } from "./fitness_tracker";
import * as readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

addUser("1", "Pruthvi", 20, 75, 175);
addUser("2", "Niranjan", 21, 68, 172);
addUser("3", "Nandish", 22, 80, 178);
addUser("4", "Rajesh", 20, 85, 180);
addUser("5", "Deepak", 21, 70, 169);

logWorkout("1", { type: "running", duration: 30, caloriesBurned: 300 });
logWorkout("2", { type: "cycling", duration: 45, caloriesBurned: 400 });
logWorkout("3", { type: "yoga", duration: 60, caloriesBurned: 200 });
logWorkout("4", { type: "weightlifting", duration: 50, caloriesBurned: 350 });
logWorkout("5", { type: "swimming", duration: 40, caloriesBurned: 380 });

rl.question("Enter user ID to get details: ", (userId) => {
  try {
    const userDetails = getUserWithWorkouts(userId);
    console.log(userDetails);
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error(error.message);
    } else {
      console.error("An unknown error occurred");
    }
  }
  rl.close();
});