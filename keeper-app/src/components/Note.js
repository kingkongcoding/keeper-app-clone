import React from 'react';
import './Note.css'
import DeleteSharpIcon from '@mui/icons-material/DeleteSharp';

function Note(props) {

    function handleClick() {
        props.onDelete(props.id)
    }

    return (
        <div className='note'>
            <h1>{props.title}</h1>
            <p>{props.content}</p>
            <button onClick={handleClick}><DeleteSharpIcon /></button>
        </div>
    )
}

export default Note;