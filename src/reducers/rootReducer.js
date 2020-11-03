import uuid from 'react-uuid';

const initState = {
    tasks:[
        {id:"1",title:"My Task",list:[{id:"1",title:"Build Website",description:"testing",date:"2016-01-01"}]},
    ]
}

const rootReducer = (state = initState, action) => {
    switch(action.type){
        case 'ADD_NEW_TASK':
            let oldTasks = state.tasks.filter(task => {
               return action.taskList.id !== task.id 
            });
            const {taskList} = action;
            action.newTask = {
                ...action.newTask,

            }
            let newTaskList = {
                id:taskList.id,
                title:taskList.title,
                list:[...taskList.list,action.newTask]
            }
            return{
                ...state,
                tasks:[...oldTasks,newTaskList]
            }
        case 'ADD_NEW_TASK_LIST':
            let newTaskListItem = { id : uuid(),title:action.listTitle,list:[]}
            return{
                ...state,
                tasks:[...state.tasks,newTaskListItem]
            }
        default:
        return state;    
    }

}

export default rootReducer;