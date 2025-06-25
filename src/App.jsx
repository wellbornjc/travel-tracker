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
        <div className='stateName'>{state.name} ({state.abbreviation})</div>
      </div>

      {expandedState === state.id && <div className='categoryHeader'>Vist The Capital:</div>}
      {expandedState === state.id && 
        <div className='checklistItem'>
          <input type='checkbox' />
          <div>{state.capital}</div>
        </div>
      }

      {expandedState === state.id && <div className='categoryHeader'>Vist The Largest City:</div>}
      {expandedState === state.id && 
        <div className='checklistItem'>
          <input type='checkbox' />
          <div>{state.largestcity}</div>
        </div>
      }

      {expandedState === state.id && <div className='categoryHeader'>Attractions:</div>}
      {expandedState === state.id && state.attractions.map((attraction) => (
        <div className='checklistItem' key={attraction.id}>
          <input type='checkbox' />
          <div>{attraction.name}</div>
        </div>
      ))}

      {expandedState === state.id && <div className='categoryHeader'>Other Things To Do:</div>}
      {expandedState === state.id && state.other.map((activity) => (
        <div className='checklistItem' key={activity.id}>
          <input type='checkbox' />
          <div>{activity.name}</div>
        </div>
      ))}

      {expandedState === state.id && <div className='categoryHeader'>National Parks:</div>}
      {expandedState === state.id && state.nationalparks.map((park) => (
        park.name === 'null' ? (
          <div className='checklistItem' key={park.id}>- No National Parks</div>
        ) : (
        <div className='checklistItem' key={park.id}>
          <input type='checkbox' />
          <div>{park.name}</div>
        </div>
      )))}
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