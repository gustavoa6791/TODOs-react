import React from 'react';
import ReactDOM from 'react-dom';
import './style.css'
import { TodoContext } from '../../../context/todoContext'


function ModalTodoCreate({children}) {

    const {modalOpen} = React.useContext(TodoContext)

    if (modalOpen){
        return ReactDOM.createPortal(

            <div className='ModalBackground'>
                {children}
            </div>
            ,
            document.getElementById('modal')
        ) 
    }
}

export default ModalTodoCreate