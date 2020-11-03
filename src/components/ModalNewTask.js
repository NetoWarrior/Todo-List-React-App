import React from 'react';


export default function ModalNewTask({open, onClose, handleSubmit ,handleInputChange}) {


    if(!open) return null;
    return (
        <>
        <div className="overlay-task " />
        <div className="modal-new-task" >
        <button className="close-btn" onClick={onClose}><i class="fas fa-times"></i></button>
            <form onSubmit={handleSubmit}>
                <input 
                    onChange={handleInputChange}
                    type="text"
                    id="title"
                    placeholder="title"
                    required
                />
                <input 
                    onChange={handleInputChange}
                    type="text"
                    id="description"
                    placeholder="description"
                    required
                />
                <input 
                    onChange={handleInputChange}
                    type="text"
                    id="date"
                    placeholder = "date"
                    required
                />
                <button className="add-item" type="submit" >Add Task</button>    
            </form>
        </div>
        </>
        
    )
}
