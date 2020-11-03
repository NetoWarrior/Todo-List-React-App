import React from 'react'

export default function ModalNewList({open,onClose,handleSubmit,handleTitle}) {
    if(!open) return null;
    return (
        <>
        <div className="overlay-task " />
        <div className="modal-new-list" >
        <button className="close-btn" onClick={onClose}><i class="fas fa-times"></i></button>
        <form onSubmit={handleSubmit}>
            <input 
                onChange={handleTitle}
                type="text" 
                id="title"
                placeholder="New List"
            />
            <button className="add-list-btn"type="submit" ><i class="fas fa-plus-circle"></i></button>
        </form>
        </div>
        </>
    )
}
