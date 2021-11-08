import React, { useState, useEffect } from 'react';
import './App.css';

import Todos from './components/Todos';

function App() {
  return (
    <div className="App">
      <React.Fragment>
        <div className="container">
          <div className="startsTopRight">
            <div className="startsTopLeft">
              <div className="headerDiv">What's new mission?</div>
              <Todos>

              </Todos>
            </div>
          </div>
        </div>
      </React.Fragment>
    </div>
  );
}

export default App;
