import React from 'react';
import './App.css';

import ClassCounter from './hooks/useState/ClassCounter';
import UseStateCounter from './hooks/useState/UseStateCounter';
import UseStateCounterWithPreviousState from './hooks/useState/UseStateCounterWithPreviousState';
import UseStateAndObjects from './hooks/useState/UseStateAndObjects';
import UseStateAndArrays from './hooks/useState/UseStateAndArrays'

function App() {
  return (
    <div className="App">
      <ClassCounter />
      <UseStateCounter />
      <UseStateCounterWithPreviousState />
      <UseStateAndObjects />
      <UseStateAndArrays />
    </div>
  );
}

export default App;
