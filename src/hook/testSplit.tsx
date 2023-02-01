import React from 'react';
import {useState, useEffect} from 'react';
import _ from 'lodash';
import './a';

const bar = () => {
  useEffect(() => {
    let user: User = {
      name: '',
      age: 123
    };
    console.log(user);
  });
  return (
    <div>
      <div>split demo</div>
    </div>
  );
};
export default bar;
