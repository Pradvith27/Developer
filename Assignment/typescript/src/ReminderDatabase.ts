import { Reminder,ReminderData  } from "./Reminder";
 

export class ReminderDatabase {
    private reminders: Map<string, Reminder>;

    constructor() {
        this.reminders = new Map<string, Reminder>();
    }

    createReminder(id: string, title: string, description: string, dueDate: string): string {
        const reminder = new Reminder(id, title, description, dueDate);
        this.reminders.set(id, reminder);
        return id;
    }

    exists(id: string): boolean {
        return this.reminders.has(id);
    }

    markReminderAsCompleted(id: string): boolean {
        if (this.reminders.has(id)) { 
            this.reminders.get(id)!.completed=true;
            return true;
        }
        return false;
    }
    unmakReminderAsCompleted(id: string): boolean {
        if (this.reminders.has(id)) {
            this.reminders.get(id)!.completed=false;
            return true;
        }
        return false;
    }
    getCompletedReminders(): ReminderData[] {
        return Array.from(this.reminders.values())
        .filter(reminder => reminder.completed === true)    
        .map(reminder => reminder.toObject());
    }
    getUncompletedReminders(): ReminderData[] {
        return Array.from(this.reminders.values())
        .filter(reminder => reminder.completed === false)
        .map(reminder => reminder.toObject());
    }
    getRemindersDueToday(): ReminderData[] {
        const today = new Date().toISOString().split("T")[0];   
        return Array.from(this.reminders.values())
        .filter(reminder => reminder.dueDate === today)
        .map(reminder => reminder.toObject());
    }
    getAllReminders(): ReminderData[] {
        return Array.from(this.reminders.values()).map(reminder => reminder.toObject());
    }

    getReminder(id: string): ReminderData | null {
        return this.reminders.has(id) ? this.reminders.get(id)!.toObject() : null;
    }

    removeReminder(id: string): boolean {
        return this.reminders.delete(id);
    }

    updateReminder(id: string, title?: string, description?: string, dueDate?: string): boolean {
        if (this.reminders.has(id)) {
            const reminder = this.reminders.get(id)!;
            if (title) reminder.title = title;
            if (description) reminder.description = description;
            if (dueDate) reminder.dueDate = dueDate;
            return true;
        }
        return false;
    }

    filterRemindersByDate(date: string) {
        return Array.from(this.reminders.values())
            .filter(reminder => reminder.dueDate === date)
            .map(reminder => reminder.toObject());
    }
}