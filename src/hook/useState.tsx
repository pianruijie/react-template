import React from 'react';
import {useState, useEffect} from 'react';
const Foo = () => {
  const [count, setCount] = useState(0);
  console.log(123);
  useEffect(() => {
    console.log(count);
  });
  return (
    <div>
      <div>clicked {count} times</div>
      {/* <button onClick={setCount(count + 1)}></button> */}
    </div>
  );
};
export default Foo;
