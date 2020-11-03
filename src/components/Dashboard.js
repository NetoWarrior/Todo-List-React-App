import React,{Component} from 'react'
import {connect} from 'react-redux';
import TaskCard from './TaskCard';
import {newTaskList} from '../actions/rootActions';
import Navbar from './Navbar';
import ModalNewList from './ModalNewList';

class Dashboard extends Component {
    state = {
        title:"",
        isOpen:false
    }

    handleTitle = (e) => {
        console.log(e)
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSubmit= (event) => {
        event.preventDefault();
        console.log(this.state)
        this.props.newTaskList(this.state.title);
    }
    

    render(){
        console.log(this.props.tasks);
        const {tasks} = this.props;
        const tasklist = tasks.length ? (
            tasks.map( task => {
                return (
                    <TaskCard task={task} key={task.id} />
                )
            })
        ) : (
            <div>
                <h1>Nothing Here Yet</h1>
            </div>
        )
        
        return(
            <div>
                <Navbar />
                <div classname="task-container">
                    {tasklist}
                </div>
                <button className="add-list-btn" onClick={() => this.setState({isOpen:true})}><i class="fas fa-plus-circle"></i></button>
                <ModalNewList 
                    open={this.state.isOpen} 
                    onClose={() => this.setState({isOpen:false})} 
                    handleSubmit = {this.handleSubmit} 
                    handleTitle = {this.handleTitle}
                />
                
            </div>
        )
        
    }
    
    
}

const mapStateToProps = (state) => {
    return {
        tasks: state.tasks
    
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        newTaskList : (listTitle) => dispatch(newTaskList(listTitle))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Dashboard)