import { ReminderDatabase } from "./ReminderDatabase";


const db = new ReminderDatabase();

db.createReminder
("1","Buy groceries","Buy groceries at 3 pm","11-03-2025");
db.createReminder("2","Buy bread","Buy bread at 3 pm","11-03-2025");
db.createReminder("3","Buy milk","Buy milk at 3 pm","12-03-2025");
console.log("Does the reminder with id 1 exists?",db.exists("1"))


console.log("Mark Reminder 1 as Completed: ",db.markReminderAsCompleted("1"));
console.log("Completed Reminders\n",db.getCompletedReminders());
console.log("Mark 1 as Not Completed: ",db.unmakReminderAsCompleted("1"));
console.log("Uncompleted Reminders\n",db.getUncompletedReminders());
console.log("Reminders Due Today\n",db.getRemindersDueToday());


console.log("Get All Reminders\n",db.getAllReminders());
console.log("Get Reminder with id 1\n",db.getReminder("1"));
console.log("Remove Reminder with id 1\n",db.removeReminder("1"));
console.log("Does the reminder with id 1 exists?",db.exists("1"))
console.log("All reminders\n",db.getAllReminders());
console.log("Filter Reminder By Date\n",db.filterRemindersByDate("11-03-2025"));
db.updateReminder("2","Buy milk","Buy milk at 3 pm","11-03-2025");