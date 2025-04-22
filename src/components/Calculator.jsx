import React, { useState, useEffect } from 'react';

const Calculator = () => {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [operation, setOperation] = useState('add');
  const [result, setResult] = useState(null);
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const a = parseFloat(num1);
    const b = parseFloat(num2);

    if (isNaN(a) || isNaN(b)) {
      setError('Please enter valid numbers');
      setResult(null);
      return;
    }

    if (operation === 'divide' && b === 0) {
      setError('Cannot divide by zero');
      setResult(null);
      return;
    }

    setError('');
    if (operation === 'add') setResult(a + b);
    if (operation === 'subtract') setResult(a - b);
    if (operation === 'multiply') setResult(a * b);
    if (operation === 'divide') setResult(a / b);
  };

  useEffect(() => {
    if (result !== null) console.log('Result:', result);
  }, [result]);

  return (
    <div
      className="flex items-center justify-center min-h-screen bg-gray-900">
    
    
      <div className="  p-10 rounded-3xl shadow-2xl w-full max-w-lg opacity-100">
        <h2 className="text-5xl font-extrabold text-center text-white mb-12">
          📱 <span className="text-indigo-400">Calculator</span>
        </h2>

        
        <div
          className="bg-gray-700 text-white text-right text-4xl font-mono px-6 py-6 rounded-lg mb-8">
         
    
          {error ? (
            <span className="text-red-500">❓ {error}</span>
          ) : result !== null ? (
            <span className="text-green-400">✔️ {result}</span>
          ) : (
            <span className="text-gray-500">0</span>
          )}
        </div>

      
        <form onSubmit={handleSubmit} className="space-y-6">
          <input
            type="text"
            placeholder="First number"
            value={num1}
            onChange={(e) => setNum1(e.target.value)}
            className="w-full p-4 rounded-lg border-2 border-gray-500 focus:border-indigo-500 focus:outline-none text-xl bg-transparent text-white placeholder-gray-200"
          />

          <input
            type="text"
            placeholder="Second number"
            value={num2}
            onChange={(e) => setNum2(e.target.value)}
            className="w-full p-4 rounded-lg border-2 border-gray-500 focus:border-indigo-500 focus:outline-none text-xl bg-transparent text-white placeholder-gray-200"
          />

          <select
            value={operation}
            onChange={(e) => setOperation(e.target.value)}
            className="w-full p-4 rounded-lg border-2 border-gray-500 focus:border-indigo-500 focus:outline-none text-xl bg-transparent text-white placeholder-gray-300"
          >
            <option value="add">➕ Add (+)</option>
            <option value="subtract">➖ Subtract (−)</option>
            <option value="multiply">✖️ Multiply (×)</option>
            <option value="divide">➗ Divide (÷)</option>
          </select>

          
          <button
            type="submit"
            className="w-60 bg-slate-600 text-white font-mono py-4 rounded-lg shadow-lg"
          >
           📱 CALCULATE
          </button>
        </form>
      </div>
    </div>
  );
};

export default Calculator;
