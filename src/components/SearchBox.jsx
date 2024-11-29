import React, { useState } from 'react';

const SearchBox = () => {
    const [isActive, setIsActive] = useState(false);

    const toggleSearchBox = () => {
        setIsActive(!isActive);
    };

    return (
        <div className={`search-container ${isActive ? 'active' : ''}`}>
            <button onClick={toggleSearchBox} className="search-btn">Search</button>
            <input type="text" className="search-input" placeholder="Search..." />
            <button onClick={toggleSearchBox} className="search-close-btn">Close</button>
        </div>
    );
};

export default SearchBox;