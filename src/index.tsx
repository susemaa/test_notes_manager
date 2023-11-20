import React from 'react';
import ReactDOM from 'react-dom/client';
import Init from './Init';
import '@susemaa/test_component_library/dist/index.css';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
document.getElementById('root')?.classList.add('h-full', 'overflow-y-auto');
root.render(
  <React.StrictMode>
    <Init />
  </React.StrictMode>
);
