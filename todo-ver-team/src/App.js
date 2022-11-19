import React from 'react';
import Back from './components/Back.js'
import ReceiptBox from './components/receipt/receiptBox.jsx';
//import C from './components/C';

function App() {
  return (
    <>
      <ReceiptBox user={"Test"} group={"TestGroup"} />
    </>
  );
}

export default App;
