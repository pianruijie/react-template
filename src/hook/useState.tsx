import React from 'react';
import {useState, useEffect} from 'react';
import _ from 'lodash';
import './a';

const Foo = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log(_.join(['Hello', 'webpack1'], ' '));
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
