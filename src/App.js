import React from 'react';
import './App.css';

import ClassCounter from './hooks/useState/ClassCounter';
import UseStateCounter from './hooks/useState/UseStateCounter';
import UseStateCounterWithPreviousState from './hooks/useState/UseStateCounterWithPreviousState';
import UseStateAndObjects from './hooks/useState/UseStateAndObjects';
import UseStateAndArrays from './hooks/useState/UseStateAndArrays'
import UseEffectUpdateDocumentTitle from './hooks/useEffect/UseEffectUpdateDocumentTitle';
import ClassPreventcomponentDidUpdate from './hooks/useEffect/ClassPreventcomponentDidUpdate';
import MouseMoveWithClass from './hooks/useEffect/MouseMoveWithClass';
import UseEffectMouseMove from './hooks/useEffect/UseEffectMouseMove';

function App() {
  return (
    <div className="App">
      <ClassCounter />
      <UseStateCounter />
      <UseStateCounterWithPreviousState />
      <UseStateAndObjects />
      <UseStateAndArrays />
      <UseEffectUpdateDocumentTitle />
      <ClassPreventcomponentDidUpdate />
      <MouseMoveWithClass />
      <UseEffectMouseMove />
    </div>
  );
}

export default App;
