import React from 'react';
import './App.css';

import ClassCounter from './hooks/useState/CounterWithClass';
import HookCounter from './hooks/useState/HookCounter';

function App() {
  return (
    <div className="App">
      <ClassCounter />
      <HookCounter />
    </div>
  );
}

export default App;
