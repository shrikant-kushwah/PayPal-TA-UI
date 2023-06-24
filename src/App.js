import React from 'react';
import Header from './components/Header';
import FilterButtons from './components/FilterButtons';
import TransactionTable from './components/TransactionTable';
import './App.css';

const transactionsData = [
  {
    id: 1,
    date: '2023-06-18',
    description: 'Payment received',
    amount: 150.0,
  },
  {
    id: 2,
    date: '2023-06-19',
    description: 'Payment sent',
    amount: -50.0,
  },
  {
    id: 3,
    date: '2023-06-20',
    description: 'Payment received',
    amount: 15.0,
  },
  {
    id: 4,
    date: '2023-06-21',
    description: 'Payment sent',
    amount: -5.0,
  },
  {
    id: 5,
    date: '2023-06-22',
    description: 'Payment received',
    amount: 10.0,
  },
  {
    id: 6,
    date: '2023-06-23',
    description: 'Payment sent',
    amount: -70.0,
  },
  {
    id: 7,
    date: '2023-06-24',
    description: 'Payment received',
    amount: 124.0,
  },
  {
    id: 8,
    date: '2023-06-25',
    description: 'Payment sent',
    amount: -37.0,
  },

];

function App() {
  return (
    <div className="App">
      <Header />
      <div className="content">
        <FilterButtons />
        <TransactionTable transactions={transactionsData} />
      </div>
    </div>
  );
}

export default App;
