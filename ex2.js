var Todo = /** @class */ (function () {
    function Todo() {
        this.myTasks = [];
    }
    Todo.prototype.addTask = function (task) {
        this.myTasks.push(task);
        console.log(task + "has been added to my tasks. ");
        return this.myTasks.length;
    };
    //listing all the tasks
    Todo.prototype.listAllTasks = function () {
        console.log("tasks in the list:n");
        for (var i = 0; i < this.myTasks.length; i++) {
            console.log(this.myTasks[i]);
        }
    };
    // deleting a task from the list
    Todo.prototype.deleteTask = function (task) {
        var index = this.myTasks.indexOf(task);
        if (index > -1) {
            this.myTasks.splice(index, 1);
            console.log(task + " has been removed from my tasks.");
        }
        else {
            console.log(task + " was not found in the task list.");
        }
        return this.myTasks.length;
    };
    return Todo;
}());
//these are instances from the test
var myTodos = new Todo();
myTodos.addTask("Work!");
myTodos.addTask("Study TypeScript");
myTodos.listAllTasks();
myTodos.deleteTask("Work!");
myTodos.listAllTasks();
