import React from 'react';
import {useState, useEffect} from 'react';
import _ from 'lodash';
import './a';

const bar = () => {
  useEffect(() => {
    console.log(_.join(['Hello', 'webpack2'], ' '));
  });
  return (
    <div>
      <div>split demo</div>
    </div>
  );
};
export default bar;
