interface TodoInterface {
    myTasks: Array<string>;
}
class Todo implements TodoInterface {
    myTasks: Array<string> = [];
    addTask(task: string): number { //add a task to the list
        this.myTasks.push(task);
        console.log(task + "has been added to my tasks. ");
        return this.myTasks.length;
    }
    //listing all the tasks
    listAllTasks(): void {
        console.log("tasks in the list:n");
        for (let i = 0; i < this.myTasks.length; i++) {
            console.log(this.myTasks[i]);
        }

    }
    // deleting a task from the list
    deleteTask(task: string): number {
        let index = this.myTasks.indexOf(task);
        if (index > -1) {
            this.myTasks.splice(index, 1);
            console.log(task + " has been removed from my tasks.");
        } else {
            console.log(task + " was not found in the task list.");
        }
        return this.myTasks.length;
    }
}

//these are instances from the test
let myTodos = new Todo();
myTodos.addTask("Work!");
myTodos.addTask("Study TypeScript");
myTodos.listAllTasks();
myTodos.deleteTask("Work!");
myTodos.listAllTasks();
