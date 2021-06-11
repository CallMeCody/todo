import React from 'react';

import ToDo from './components/todo/todo.js';

import 'bootstrap/dist/css/bootstrap.min.css';
import SiteContext from './context/context.js';

function App() {
    return (
      <>
      <SiteContext>
        <ToDo />
      </SiteContext>
      </>
    );
}

export default App;
