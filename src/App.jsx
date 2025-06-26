import { useState } from 'react'
import './App.css'
import { usStatesArray } from './states.js'

function States() { 
  const [expandedState, setExpandedState] = useState(null);

  const handleExpandState = (stateId) => {
    setExpandedState(expandedState === stateId ? null : stateId);
  };

  const [checkedItems, setCheckedItems] = useState([]);

  const handledCheckingBoxes = (event) => {
    const itemId = event.target.value;

    if (event.target.checked) {
      setCheckedItems([...checkedItems, itemId])
    } else {
      setCheckedItems(checkedItems.filter((id) => id !== itemId));
    }
  };

  const stateList = usStatesArray.map((state) => (
    <div className='stateContainer' key={state.id}> 
      <div className='stateNameTab' onClick={() => handleExpandState(state.id)}>
        <button className='expandStateButton'>{state.id === expandedState ? '-' : '+'}</button>
        <div className='stateName'>{state.name} ({state.abbreviation})</div>
      </div>

      {expandedState === state.id && <div className='categoryHeader'>Vist The Capital:</div>}
      {expandedState === state.id && state.capital.map((city) => (
        <div className='checklistItem' key={city.id}>
          <input type='checkbox' value={city.id} checked={checkedItems.includes(city.id)} onChange={handledCheckingBoxes} />
          <div>{city.name}</div>
        </div>
      ))}

      {expandedState === state.id && <div className='categoryHeader'>Vist The Largest City:</div>}
      {expandedState === state.id && state.largestcity.map((city) => (
        <div className='checklistItem' key={city.id}>
          <input type='checkbox' value={city.id} checked={checkedItems.includes(city.id)} onChange={handledCheckingBoxes} />
          <div>{city.name}</div>
        </div>
      ))}

      {expandedState === state.id && <div className='categoryHeader'>Attractions:</div>}
      {expandedState === state.id && state.attractions.map((attraction) => (
        <div className='checklistItem' key={attraction.id}>
          <input type='checkbox' value={attraction.id} checked={checkedItems.includes(attraction.id)} onChange={handledCheckingBoxes} />
          <div>{attraction.name}</div>
        </div>
      ))}

      {expandedState === state.id && <div className='categoryHeader'>Other Things To Do:</div>}
      {expandedState === state.id && state.other.map((activity) => (
        <div className='checklistItem' key={activity.id}>
          <input type='checkbox' value={activity.id} checked={checkedItems.includes(activity.id)} onChange={handledCheckingBoxes} />
          <div>{activity.name}</div>
        </div>
      ))}

      {expandedState === state.id && <div className='categoryHeader'>National Parks:</div>}
      {expandedState === state.id && state.nationalparks.map((park) => (
        park.name === 'null' ? (
          <div className='checklistItem' key={park.id}>- No National Parks</div>
        ) : (
        <div className='checklistItem' key={park.id}>
          <input type='checkbox' value={park.id} checked={checkedItems.includes(park.id)} onChange={handledCheckingBoxes} />
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