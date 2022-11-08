import React from "react";

export const ModalFooter = ({closeModal}) => {
    return (
        <div className='modal-footer'>
            <button className="add-btn" type="submit">Add task</button>
            <button className="close-btn" onClick={closeModal}>Close</button>
        </div>
    )
}