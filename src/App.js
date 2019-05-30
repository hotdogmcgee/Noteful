import React from 'react';
import SideBar from './SideBar/SideBar.js'
import './App.css'
import NoteList from './NoteList/NoteList.js';

function App() {
  return (
    <>
    <header>
        <h1>NOTEFUL</h1>
      </header>
    <main className='App'>
      <SideBar />
      <NoteList />
      {/* content goes here */}
    </main>
    </>
  );
}

export default App;
