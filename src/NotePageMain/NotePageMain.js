import React from 'react'
import './NotePageMain.css'
import Note from '../Note/Note.js'

function NotePageMain(props) {

    const { notes } = props
    const displayNote = notes[0]
    return (
        <div className="select-note-container">
            <Note note={displayNote}/>
            <p>{displayNote.content}</p>
        </div>
    ) 
}

export default NotePageMain