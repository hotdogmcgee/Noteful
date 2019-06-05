import React from 'react'
import './SideBarMain.css'

class SideBarMain extends React.Component {
    
    render () {
        const folderList = this.props.allFolders.map((folder, key) => 
            <li key={key}>{folder.name}</li>)
            
        return (
            <div className="folder-container">
                <ul className="folder-list">
                    {folderList}
                </ul>
                {/* probably will be changed to <Link></Link>, will have it's own add folder component eventually */}
                <div className="add-folder-button">Add Folder</div>
            </div>
        )
    }
}

SideBarMain.defaultProps = {
    folder: []
}

export default SideBarMain