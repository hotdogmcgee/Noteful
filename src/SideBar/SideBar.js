import React from 'react'
import './SideBar.css'

class SideBar extends React.Component {
    render () {
        return (
            <div className="folder-container">
                <ul className="folder-list">
                    <li>test</li>
                    <li>test2</li>
                    <li>test</li>
                    <li>test2</li>
                    <li>test</li>
                    <li>test2</li>
                </ul>
                {/* probably will be changed to <Link></Link>, will have it's own add folder component eventually */}
                <div className="add-folder-button">Add Folder</div>
            </div>
        )
    }
}

export default SideBar