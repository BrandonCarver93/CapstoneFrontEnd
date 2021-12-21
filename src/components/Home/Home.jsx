import React from 'react';
import MapContainer from '../Map/MapContainer';
import WineRating from '../Rating/Rating';
import Reviews from '../Reviews/Reviews';



const Home = (props) => {

    let renderedWines = props.wines.map((wine) => {
      return(
      <div className="Wine">
          <div className="card mb-3" style={{ width: '50rem' }}>
            <div className="row g-5">
              <div className="col-md-4">
                <img url="..." className="img-fluid rounded-start" alt="..."/>
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">{wine.vineyard}</h5>
                  <h6 className="card-text">{wine.varietal}</h6>
                  <p className="card-text">{wine.description}</p>
                  <p className="card-text">{wine.pairing}</p>
                  <p className="card-text">{wine.ratings}</p>
                  <WineRating />
                  <Reviews />
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
