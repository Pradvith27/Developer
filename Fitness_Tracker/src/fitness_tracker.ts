export type User = {
    id: string;
    name: string;
    age: number;
    weight: number;
    height: number;
  };
  
  export type Workout = {
    type: string;
    duration: number; // in minutes
    caloriesBurned: number;
  };
  
  let users: User[] = [];
  let workouts: Record<string, Workout[]> = {}; // Stores workouts by user ID
  
  export function addUser(id: string, name: string, age: number, weight: number, height: number): void {
    if (users.some(user => user.id === id)) {
      throw new Error("User with this ID already exists.");
    }
    users.push({ id, name, age, weight, height });
    workouts[id] = []; // Initialize empty workout log
  }
  
  export function logWorkout(userId: string, workout: Workout): void {
    if (!users.some(user => user.id === userId)) {
      throw new Error("User not found.");
    }
    workouts[userId].push(workout);
  }
  
  export function getAllWorkoutsOf(userId: string): Workout[] {
    if (!users.some(user => user.id === userId)) {
      throw new Error("User not found.");
    }
    return workouts[userId];
  }
  
  export function getAllWorkoutsByType(userId: string, type: string): Workout[] {
    if (!users.some(user => user.id === userId)) {
      throw new Error("User not found.");
    }
    return workouts[userId].filter(workout => workout.type.toLowerCase() === type.toLowerCase());
  }
  
  export function getUsers(): User[] {
    return users;
  }
  
  export function getUserWithWorkouts(id: string): { user: User; workouts: Workout[] } | undefined {
    const user = users.find(user => user.id === id);
    if (!user) {
      throw new Error("User not found.");
    }
    return { user, workouts: workouts[id] };
  }
  
  export function updateUser(id: string, updatedFields: Partial<Omit<User, 'id'>>): void {
    const user = users.find(user => user.id === id);
    if (!user) {
      throw new Error("User not found.");
    }
    Object.assign(user, updatedFields);
  }