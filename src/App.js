import React, { useState } from 'react';
import './App.css';  // Optional: styling for the App component

function App() {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  // Handle button click
  const handleClick = (value) => {
    setInput((prev) => prev + value); // Append clicked value
  };

  // Clear input
  const clearInput = () => {
    setInput('');
    setResult('');
  };

  // Calculate the result
  const calculateResult = () => {
    try {
      setResult(eval(input)); // Evaluate the expression
    } catch (error) {
      setResult('Error'); // Handle invalid input
    }
  };

  return (
    <div style={styles.container}>
      <h1>React Calculator</h1>
      <div style={styles.calculator}>
        {/* Display Input */}
        <div style={styles.display}>
          <div>{input || '0'}</div>
          <div>{result ? `= ${result}` : ''}</div>
        </div>

        {/* Buttons */}
        <div style={styles.buttons}>
          {['7', '8', '9', '/', '4', '5', '6', '*', '1', '2', '3', '-', '0', '.', '=', '+'].map((btn) => (
            <button
              key={btn}
              style={styles.button}
              onClick={() => (btn === '=' ? calculateResult() : handleClick(btn))}
            >
              {btn}
            </button>
          ))}
          <button style={styles.button} onClick={clearInput}>
            C
          </button>
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
    textAlign: 'center',
    marginTop: '50px',
  },
  calculator: {
    display: 'inline-block',
    border: '2px solid #ccc',
    borderRadius: '10px',
    padding: '20px',
    backgroundColor: '#f9f9f9',
  },
  display: {
    border: '1px solid #ccc',
    borderRadius: '5px',
    padding: '10px',
    marginBottom: '10px',
    fontSize: '24px',
    backgroundColor: '#fff',
    textAlign: 'right',
  },
  buttons: {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 60px)',
    gap: '10px',
  },
  button: {
    padding: '15px',
    fontSize: '18px',
    cursor: 'pointer',
    backgroundColor: '#61dafb',
    border: 'none',
    borderRadius: '5px',
  },
};

export default App;
