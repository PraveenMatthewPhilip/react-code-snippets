import React from 'react';
import './App.css';

import ClassCounter from './hooks/useState/ClassCounter';
import UseStateCounter from './hooks/useState/useStateCounter';
import UseStateCounterWithPreviousState from './hooks/useState/UseStateCounterWithPreviousState';

function App() {
  return (
    <div className="App">
      <ClassCounter />
      <UseStateCounter />
      <UseStateCounterWithPreviousState />
    </div>
  );
}

export default App;
