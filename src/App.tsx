import React from 'react';
import './App.css';
import Coach from './components/coach/ui/Coach';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Welcome to StepOnMe.com your virtual swing and ballroom dancing coach!
        </p>
        <Coach></Coach>
      </header>
    </div>
  );
}

export default App;
