import React from 'react';
import './FilterButtons.css';

function FilterButtons() {
  const handleFilterButtonClick = (filterType) => {
    
    console.log(`Filter button clicked: ${filterType}`);
  };

  return (
    <div className="filter-buttons">
      <button className="filter-button" onClick={() => handleFilterButtonClick('all')}>
        All Transactions
      </button>
      <button className="filter-button" onClick={() => handleFilterButtonClick('received')}>
        Received
      </button>
      <button className="filter-button" onClick={() => handleFilterButtonClick('sent')}>
        Sent
      </button>
    </div>
  );
}

export default FilterButtons;
