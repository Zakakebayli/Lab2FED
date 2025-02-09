//(a)Creating an arrayof strings
let myTasks: Array<string> = [];
let myTasks2: string[] = [];
//(b)adding a tasks function
function addTask(task: string): number {
    myTasks.push(task);
    console.log(task + "has been added to my tasks.");
    return myTasks.length;
}
//create a task to list everything 
function listAllTasks(): void {
    myTasks.forEach((ele) => {
        console.log("item: " + ele + "is on my tasks list. ");
    })
    //here im creating a task to delete
    function deleteTask(task: string): number {
        let index: number = myTasks.indexOf(task);

        if (index > -1) {
            myTasks.splice(index, 1);
            console.log("item: " + task + "has been removed from my tasks list");

        } else {
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