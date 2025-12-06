import { useEffect, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';

import './App.css';

const App = () => {
  const [count, setCount] = useState<number>(0);

  const increment = () => setCount(prev => prev + 1);

  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then(res => res.json())
      .then(data => {
        console.log(data.products);
      });
  }, []);

  return (
    <>
      <Link to={'/categories'}>categories</Link>
      <Link to={'/about'}>about</Link>
      <h1>{count}</h1>
      <button onClick={increment}>increment</button>
      <Outlet />
    </>
  );
};

export default App;
