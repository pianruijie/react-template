import React from 'react';
import ReactDOM from 'react-dom';
import {UseStateDemo, SplitDemo} from './hook';

ReactDOM.render(
  <div>
    <UseStateDemo />
    <SplitDemo />
  </div>,
  document.getElementById('app')
);
