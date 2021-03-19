import React, { useState } from 'react';

const App = () => {
  const [count, setCount] = useState(0);
  const [user, setUser] = useState('');

  const increment = () => {
    setCount(count + 1);
  };
  const reduction = () => {
    setCount(count - 1);
  };
  const handleOnChange = (e) => {
    setUser(e.target.value);
  };
  console.log('user: ', user);

  return (
    <React.Fragment>
      <div>Count: {count}</div>
      <button onClick={increment}>Increment</button>
      <button onClick={reduction}>Reduction</button>
      <br />
      <input name="user" onChange={handleOnChange} value={user} />

      <div className="app-main">
        <div className="information">
          <h1>Basic Information</h1>
          <div>Name: Greg S. Trillanes</div>
          <div>Age: 25</div>
          <div>Gender: Male</div>
          <div>Contact#: 0955-439-5527</div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default App;
