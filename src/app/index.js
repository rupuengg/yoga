import React from 'react';
import { render } from 'react-dom';

import { Head } from './Common/Head';
import { Banner } from './Home/Banner';
import { Aboutus } from './Home/Aboutus';
import { Knowl } from './Home/Knowl';

import './index.scss';

class App extends React.Component{
  render(){
    return (
      <div>
        <Head/>
        <Banner/>
        <Aboutus/>
        <Knowl/>
      </div>
    );
  }
}

render(
  <App/>,
  window.document.getElementById('root')
);
