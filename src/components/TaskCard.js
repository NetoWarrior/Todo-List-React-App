import React,{Component} from 'react';
import { connect } from 'react-redux';
import { addNewTask} from '../actions/rootActions';
import ModalNewTask from './ModalNewTask';

class TaskCard extends Component {

    state = {
        id:"",
        title:'',
        description:'',
        date:'',
        isOpen:false
    }

    handleInputChange = (e) => {
        this.setState({
            [e.target.id] : e.target.value    
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
        this.props.addNewTask(this.props.task,this.state);
    }

    
    
    render(){
        console.log(this.props);
        const {task} = this.props;
        const list = task.list.length ? (
            task.list.map( item => {
                return (
                        <label class="container" >{item.title} 
                        <input type="checkbox" />
                        <span class="checkmark"></span>
                        </label>
                )
            })
        ): (
            <div>
                <h1>Nothing Here</h1>
            </div>
        )
        return(
            <>
            <div class="taskCard">
            <h1>{task.title}</h1>
            {list}
            <button onClick={() => this.setState({isOpen:true})}>Add a Task</button>
            <ModalNewTask 
                open={this.state.isOpen} 
                onClose={() => this.setState({isOpen:false})}
                handleInputChange={this.handleInputChange}
                handleSubmit={this.handleSubmit}
                />
            
            
            </div>
            </>
            
        )
    } 
        
    
    
    
}

const mapDispatchToProps = (dispatch) => {
    return{
        addNewTask: (taskList,newTask) => dispatch(addNewTask(taskList,newTask))
    }
}

export default connect(null,mapDispatchToProps)(TaskCard)
