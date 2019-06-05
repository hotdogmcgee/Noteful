import React from 'react'
import './Note.css'

export default function Note(props) {

    const { note } = props
    return (
        <>
            <li>
                <div className="note-info">
                    <h3>{note.name}</h3>
                    <p>{note.modified}</p>
                </div>
                
                <button className="delete-button">DELETE</button>
            </li>
        </>
    )
}