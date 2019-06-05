import React from 'react'
import './NoteListMain.css'
import Note from '../Note/Note.js'

class NoteListMain extends React.Component {
    render () {
        console.log(this.props.allNotes)

        const noteList = this.props.allNotes.map((note, key) => 
            <Note key={key} note={note}/> )

        return (
            <section id="main-display">
                <ul className="notes-list">
                    {/* each note displayed with Note component, will contain delete component */}
                    {noteList}
                </ul>
                <div className="add-note-button">Add Note</div>
            </section>
        )
    }
}

export default NoteListMain