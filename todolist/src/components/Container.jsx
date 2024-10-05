import React, { useState } from 'react';
import './Container.css';
import addImage from '../assets/add.png';
import crossImage from '../assets/cross.png'; 

const Container = () => {
  const [inputValue, setInputValue] = useState('');
  const [items, setItems] = useState([]);

  // Handle adding items
  const handleAddClick = () => {
    if (inputValue === '') {
      alert('Please enter a value');
    } else {
      const newItem = { text: inputValue, id: Date.now() };
      setItems([...items, newItem]);
      setInputValue(''); // Clear input
    }
  };

  // Handle removing a single item
  const handleRemoveItem = (id) => {
    setItems(items.filter(item => item.id !== id));
  };

  // Handle clearing all items
  const handleClearAll = () => {
    setItems([]);
  };

  return (
    <div className='container'>
      <h1>Todo List</h1>

      <div className='child-container'>
        <input
          type="text"
          id="input-1"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Enter a task"
        />
        <img
          src={addImage}
          className="add-image"
          alt="Add"
          onClick={handleAddClick}
          style={{ cursor: 'pointer' }}
        />
      </div>

      <ul>
        {items.map(item => (
          <li key={item.id}>
            <div className="list-item-container">
              {item.text}
              <img
                src={crossImage}
                className="cross-image"
                alt="Remove"
                onClick={() => handleRemoveItem(item.id)}
                style={{ cursor: 'pointer' }}
              />
            </div>
          </li>
        ))}
      </ul>

      <p onClick={handleClearAll} style={{ cursor: 'pointer' }}>
        Delete All
      </p>
    </div>
  );
};

export default Container;
