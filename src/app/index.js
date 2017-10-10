import React from 'react';
import { render } from 'react-dom';
import { Head } from './Common/Head';

class App extends React.Component{
  render(){
    return (
      <div>
        <Head/>
      </div>
    );
  }
}

render(
  <App/>,
  window.document.getElementById('root')
);
