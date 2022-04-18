import React, { useState } from 'react';
import './CreateArea.css'
import AddSharpIcon from '@mui/icons-material/AddSharp';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';

function CreateArea(props) {

    const [isExpanded, setExpanded] = useState(false);

    const [note, setNote] = useState({
        title: "",
        content: ""
    })

    function handleChange(event) {
        const { name, value } = event.target;

        setNote(prevNote => {
            return {
                ...prevNote,
                [name]: value
            }
        })
    }

    function submitNote(event) {
        props.onAdd(note)
        event.preventDefault()
        setNote({
            title: "",
            content: ""
        })
    }

    function expand() {
        setExpanded(true);
    }

    return (
        <div>
            <form className="create-note">
                {isExpanded && <input
                    name="title"
                    onChange={handleChange}
                    placeholder="Title"
                    value={note.title} />}
                <textarea
                    name="content"
                    onClick={expand}
                    onChange={handleChange}
                    placeholder="Take a note..."
                    rows={isExpanded? 3 : 1}
                    value={note.content} />
                <Zoom in={isExpanded}>
                    <Fab onClick={submitNote}>
                        <AddSharpIcon />
                    </Fab>
                </Zoom>
            </form>
        </div>
    )
}

export default CreateArea;