import React, { useState } from 'react';
import 'antd/dist/antd.css';
import isPresent from './util';
import { Table } from 'antd';

function App() {
  const [product, setProduct] = useState([]);
  const [term, setTerm] = useState('');

  const addProduct = (item) => {
    if (isPresent(item)) {
      setProduct(product.concat({ name: item }));
      console.log(product);
    }
  };

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      render: (text) => <h4>{text}</h4>,
    },
  ];

  return (
    <div>
      <input
        type="text"
        name="Enter Product name"
        value={term}
        onChange={(e) => setTerm(e.target.value)}
      />
      <button onClick={() => addProduct(term)}>Add Product!</button>
      <Table dataSource={product} columns={columns} />
    </div>
  );
}

export default App;
