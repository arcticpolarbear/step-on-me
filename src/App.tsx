import React from 'react';
import './App.css';
import CoachInterface from './components/coach/ui/CoachInterface';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Welcome to StepOnMe.com your virtual swing and ballroom dancing coach!
        </p>
        <CoachInterface></CoachInterface>
      </header>
    </div>
  );
}

export default App;
