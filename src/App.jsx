import React from 'react';
import './App.css';

const App = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-blue-600 text-white p-4">
        <h1 className="text-xl">My Shopping Mall</h1>
      </header>
      <main className="p-8">
        <div className="grid grid-cols-3 gap-8">
          <div className="bg-white shadow-md rounded-lg p-4">
            <img src="https://via.placeholder.com/200" alt="Product" className="w-full h-48 object-cover rounded-md" />
            <h2 className="text-lg font-bold mt-4">Product 1</h2>
            <p className="text-gray-500 mt-2">Description of product 1.</p>
            <p className="text-xl font-semibold mt-2">$20.00</p>
          </div>
          <div className="bg-white shadow-md rounded-lg p-4">
            <img src="https://via.placeholder.com/200" alt="Product" className="w-full h-48 object-cover rounded-md" />
            <h2 className="text-lg font-bold mt-4">Product 2</h2>
            <p className="text-gray-500 mt-2">Description of product 2.</p>
            <p className="text-xl font-semibold mt-2">$30.00</p>
          </div>
          <div className="bg-white shadow-md rounded-lg p-4">
            <img src="https://via.placeholder.com/200" alt="Product" className="w-full h-48 object-cover rounded-md" />
            <h2 className="text-lg font-bold mt-4">Product 3</h2>
            <p className="text-gray-500 mt-2">Description of product 3.</p>
            <p className="text-xl font-semibold mt-2">$25.00</p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default App;