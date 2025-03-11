type ReminderData = {
    id: string;
    title: string;
    description: string;
    dueDate: string;
    completed: boolean;
};

export class Reminder {
    id: string;
    title: string;
    description: string;
    dueDate: string;
    completed:boolean;

    constructor(id: string, title: string, description: string, dueDate: string ) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.completed=false;
    }

    toObject(): ReminderData {
        return {
            id: this.id,
            title: this.title,
            description: this.description,
            dueDate: this.dueDate,
            completed:this.completed
        };
    }
}

export {ReminderData};