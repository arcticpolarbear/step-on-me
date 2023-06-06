import React from 'react';
import './App.css';
import CoachWindow from './components/coach/ui/CoachWindow';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Welcome to StepOnMe.com your virtual swing and ballroom dancing coach!
        </p>
        <CoachWindow></CoachWindow>
      </header>
    </div>
  );
}

export default App;
