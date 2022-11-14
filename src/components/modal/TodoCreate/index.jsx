//import React from 'react';
import ReactDOM from 'react-dom';
import './style.css'

function ModalTodoCreate({children}) {
    return ReactDOM.createPortal(
        <div className='ModalBackground'>
            {children}
        </div>,
        document.getElementById('modal')
    ) 
}

export default ModalTodoCreate