import React from 'react';
import { render } from 'react-dom';

class App extends React.Component{
  render(){
    return (
      <div>
        Test
      </div>
    );
  }
}

render(
  <App>Hello</App>,
  window.document.getElementById('root')
);
