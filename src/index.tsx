import React from 'react';
import ReactDOM from 'react-dom';
import LazyLoad from '@/page/virtualList';
console.log(LazyLoad);
ReactDOM.render(
  <div>
    <LazyLoad />
  </div>,
  document.getElementById('app')
);
