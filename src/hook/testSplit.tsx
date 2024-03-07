import './a';

import _ from 'lodash';
import React from 'react';
import {useEffect, useState} from 'react';

const bar = () => {
  useEffect(() => {
    const user: User = {
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
