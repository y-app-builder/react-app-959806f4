```tsx
import React, { useState } from 'react';

const App = () => {
  const [count, setCount] = useState<number>(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  const buttonStyle = {
    background: 'linear-gradient(to right, #ff6e7f, #bfe9ff)',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '5px',
    color: 'white',
    fontSize: '16px',
    cursor: 'pointer',
    transition: 'transform 0.3s ease-in-out',
  };

  const buttonHoverStyle = {
    ...buttonStyle,
    transform: 'scale(1.1)',
  };

  return (
    <div>
      <h1>Click Counter</h1>
      <p>You clicked {count} times</p>
      <button onClick={handleClick} style={buttonStyle} onMouseOver={(e) => e.currentTarget.style.cssText = Object.entries(buttonHoverStyle).map(([key, value]) => `${key}: ${value};`).join(' ')}>
        Click me
      </button>
    </div>
  );
};

export default App;
```