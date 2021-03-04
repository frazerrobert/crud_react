import React, { useState } from 'react';
import isPresent from './util';

function App() {
  const [product, setProduct] = useState([]);
  const [term, setTerm] = useState('')

  const addProduct = (item) => {
    if (isPresent(item)) {
      setProduct(product.concat(item));
    }
  }

  return (
    <div>
      <input type="text" name="Enter Product name" value={term} onChange={(e) => setTerm(e.target.value)} />
      <button onClick={() => addProduct(term)}>
        Submit
      </button>
      <ul>
        {product.map((item) => <li key={item}>{item}</li>)}
      </ul>
    </div>
  );
}

export default App;
