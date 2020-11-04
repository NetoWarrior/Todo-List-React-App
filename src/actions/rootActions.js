export const addNewTask = (taskList,newTask) => {
    return {
        type: 'ADD_NEW_TASK',
        taskList,
        newTask
    }
}

export const  newTaskList = (listTitle) => {
    return {
        type:'ADD_NEW_TASK_LIST',
        listTitle
    }
}

// export const completeTask = (taskList,)