import React from 'react';
import ReactDOM from 'react-dom';

import {SplitDemo, UseStateDemo} from './hook';

ReactDOM.render(
  <div>
    <UseStateDemo />
    <SplitDemo />
  </div>,
  document.getElementById('app')
);
