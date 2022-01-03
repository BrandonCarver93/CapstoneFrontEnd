import React from 'react';
import MapContainer from '../Map/MapContainer';
import Reviews from '../Reviews/Reviews';
import WineRating from '../Rating/Rating'
import './Home.css';



const Home = (props) => {
 
    let renderedWines = props.wines.map((wine) => {
      return(
      <div className="Wine">
          <div className="card mb-3" style={{ width: '50rem' }}>
            <div className="row g-5">
              <div className="col-md-4">
                <img src='https://www.lcbo.com/content/dam/lcbo/products/467811.jpg/jcr:content/renditions/cq5dam.web.1280.1280.jpeg' className="img-fluid rounded-start" alt="..."/> 
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">{wine.vineyard}</h5>
                  <h6 className="card-text">{wine.varietal}</h6>
                  <p className="card-text">{wine.description}</p>
                  <p className="card-text">{wine.pairing}</p>
                  <p className="card-text">{wine.ratings}</p>
                  <center><h4>Reviews</h4></center>
                   <div className="card mb-8">
                  {wine.reviews.map((element)=><>
                  <WineRating />
                  <p>{element.text}</p></>)}
                  <Reviews />
                  </div>
                </div>
              </div>
            </div>
        </div>
      </div>
      );
    });
    return(
        <div className="Map-wines">
          <h4><small className="text-muted">Places near you to buy wine.</small></h4>
          <MapContainer />
          {renderedWines}
        </div>
    );
};
export default Home;
