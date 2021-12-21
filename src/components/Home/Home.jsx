import React from 'react';
import MapContainer from '../Map/MapContainer';
import WineRating from '../Rating/Rating';



const Home = (props) => {

    let renderedWines = props.wines.map((wine) => {
      return(
        <div className="Wine">
          <div class="card mb-3" style={{ width: '50rem' }}>
            <div class="row g-5">
              <div class="col-md-4">
                <img url="..." class="img-fluid rounded-start" alt="..."/>
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title">{wine.vineyard}</h5>
                  <h6 class="card-text">{wine.varietal}</h6>
                  <p class="card-text">{wine.description}</p>
                  <p class="card-text">{wine.pairing}</p>
                  <p class="card-text">${wine.price}</p>
                  <p class="card-text">{wine.rating}</p>
                  <WineRating />
                </div>
              </div>
            </div>
        </div>
      </div>
      );
    });
    return(
        <div className="Map-wines">
          <h4><small class="text-muted">Places near you to buy wine.</small></h4>
          <MapContainer />
          {renderedWines}
        </div>
    );
};
export default Home;
