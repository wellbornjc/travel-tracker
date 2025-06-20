import { useState } from 'react'
import './App.css'
import { usStatesArray } from './states.js'

function States() { 
  const [expandedState, setExpandedState] = useState(null);

  const handleExpandState = (stateId) => {
    setExpandedState(expandedState === stateId ? null : stateId);
  };

  const stateList = usStatesArray.map((state) => (
    <div className='stateContainer' key={state.id}> 
      <div className='stateNameTab' onClick={() => handleExpandState(state.id)}>
        <button className='expandStateButton'>{state.id === expandedState ? '-' : '+'}</button>
        <div className='stateName'>{state.name}</div>
      </div>
      {expandedState === state.id && <div className='nationalParksHeader'>National Parks</div>}
      {expandedState === state.id && state.nationalparks.map((park) => (
        <div className='checklistItem' key={park.id}>
          <input type='checkbox' />
          <div>{park.name}</div>
        </div>
        ))}
    </div>
  ))
  return ( 
    <ul>{stateList}</ul>
  );
}


function App() {
  return (
    <ul>
      <h1 className='header'>Travel Tracker - A Roadtrip Checklist</h1>
      <States />
    </ul>
  )
}

export default App