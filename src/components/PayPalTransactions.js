import React, { useState } from 'react';

const PayPalTransaction = () => {
  // Sample transaction data
  const transactions = [
    {
      id: 1,
      date: '2023-06-22',
      description: 'Payment received',
      amount: 150.0,
    },
    {
      id: 2,
      date: '2023-06-23',
      description: 'Payment sent',
      amount: -50.0,
    },
    // Add more transactions as needed
  ];

  const [filteredTransactions, setFilteredTransactions] = useState(transactions);

  const handleFilter = (filterType) => {
    let filteredData;
    switch (filterType) {
      case 'all':
        filteredData = transactions;
        break;
      case 'received':
        filteredData = transactions.filter((transaction) => transaction.amount > 0);
        break;
      case 'sent':
        filteredData = transactions.filter((transaction) => transaction.amount < 0);
        break;
      default:
        filteredData = transactions;
        break;
    }
    setFilteredTransactions(filteredData);
  };

  return (
    <div>
      <h1>PayPal Transactions</h1>
      <div>
        <button onClick={() => handleFilter('all')}>All Transactions</button>
        <button onClick={() => handleFilter('received')}>Received</button>
        <button onClick={() => handleFilter('sent')}>Sent</button>
      </div>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Description</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {filteredTransactions.map((transaction) => (
            <tr key={transaction.id}>
              <td>{transaction.date}</td>
              <td>{transaction.description}</td>
              <td>{transaction.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PayPalTransaction;
