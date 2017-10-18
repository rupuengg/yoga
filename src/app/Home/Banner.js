import React from 'react';

export class Banner extends React.Component{
  render(){
    return(
      <div className="container-fluid">
        <section id="home" className="content">
          <div id="myCarousel" className="carousel slide" data-ride="carousel">
            <div className="carousel-inner" role="listbox">
              <div className="item active">
                <img src="app/images/banner1.jpg" alt="Banner1"/>
              </div>
              <div className="item">
                <img src="app/images/banner2.jpg" alt="Banner2"/>
              </div>
              <div className="item">
                <img src="app/images/banner3.jpg" alt="Banner3"/>
              </div>
            </div>
          </div>
        </section>
			</div>
    );
  }
}
