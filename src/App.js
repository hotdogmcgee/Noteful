import React from 'react';
import SideBarMain from './SideBarMain/SideBarMain.js'
import './App.css'
import NoteListMain from './NoteListMain/NoteListMain.js';
import NotePageSidebar from './NotePageSidebar/NotePageSidebar.js'
import NotePageMain from './NotePageMain/NotePageMain.js'
import { Route, Switch, Link } from 'react-router-dom'
import dummy from './dummy'

//need to make functions to return proper routes based on condition
class App extends React.Component {
  state = {
    notes: dummy.notes,
    folders: dummy.folders
  }


  makeSideBar() {
    //render contents of SideBar
  }

  makeMain() {
    //render contents of Main
  }



  render() { 
    return (
    <>
    <header>
        <Link to={"/"}><h1>NOTEFUL</h1></Link>
      </header>
    <main className='app'>
        
      <Switch>
        <Route exact path="/" render={() => 

          <>
            <SideBarMain allFolders={this.state.folders.map(item => item)}/>
            <NoteListMain allNotes={this.state.notes.map(note => note)}/>
          </>
        }
        />
          
        <Route path="/folder/:name" render={() => 
            <>
              <SideBarMain allFolders={this.state.folders.map(item => item)}/>
              {/* need to make this conditional on click */}
              <NoteListMain allNotes={this.state.notes.filter(item => item.folderId === dummy.folders[1].id)}/>
              
            </>
           }
          />

        <Route path="/note/:name" render={() =>
          <>
            <NotePageSidebar />
            <NotePageMain notes={this.state.notes}/>
          </>
        }
        />

      </Switch>
      

      
    </main>
    </>
  );
  }
}

export default App;
