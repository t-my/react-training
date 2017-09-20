import React from 'react';
import ReactDOM from 'react-dom';

import Header from './components/header';

const App = function() {
  return (
    <div>
      <Header/>
      SC5 IoT Hub Test application
    </div>
  );
};

ReactDOM.render(<App/>, document.querySelector('#root'));
