//(a)Creating an arrayof strings
var myTasks = [];
var myTasks2 = [];
//(b)adding a tasks function
function addTask(task) {
    myTasks.push(task);
    console.log(task + "has been added to my tasks.");
    return myTasks.length;
}
//create a task to list everything g
function listAllTasks() {
    myTasks.forEach(function (ele) {
        console.log("item: " + ele + "is on my tasks list. ");
    });
    //here im creating a task to delete
    function deleteTask(task) {
        var index = myTasks.indexOf(task);
        if (index > -1) {
            myTasks.splice(index, 1);
            console.log("item: " + task + "has been removed from my tasks list");
        }
        else {
            console.log("item: " + task + "wasNot found in my tasks list. ");
        }
        return myTasks.length;
    }
    addTask("Work");
    addTask("eat");
    listAllTasks();
    deleteTask("sleep");
    deleteTask("Munch");
}
