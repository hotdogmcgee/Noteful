import React from 'react'
import './NoteList.css'

class NoteList extends React.Component {
    render () {
        return (
            <section id="main-display">
                <ul className="notes-list">
                    {/* each note displayed with Note component, will contain delete component */}
                    <li>note 1</li>
                    <li>note 1</li>
                    <li>note 1</li>
                    <li>note 1</li>
                </ul>
                <div className="add-note-button">Add Note</div>
            </section>
        )
    }
}

export default NoteList