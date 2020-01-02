import React from 'react';
import './App.css';

import ClassCounter from './hooks/useState/CounterWithClass';
import HookCounter from './hooks/useState/HookCounter';
import HookCounterWithPreviousState from './hooks/useState/HookCounterWithPreviousState';

function App() {
  return (
    <div className="App">
      <ClassCounter />
      <HookCounter />
      <HookCounterWithPreviousState />
    </div>
  );
}

export default App;
