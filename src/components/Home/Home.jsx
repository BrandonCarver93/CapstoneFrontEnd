import React from 'react';
import MapContainer from '../Map/MapContainer';

const Home = (props) => {

    let renderedWines = props.wines.map((wine) => {
        return(
            <div class="card mb-3">
  <div class="row g-0">
    <div class="col-md-4">
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">{wine.vineyard}</h5>
        <h6 class="card-text">{wine.varietal}</h6>
        <p class="card-text">{wine.description}</p>
        <p class="card-text">{wine.pairing}</p>
        <p class="card-text">${wine.price}</p>
      </div>
    </div>
  </div>
</div>

        );
    });
    return(
        <div>
            <MapContainer />
        {renderedWines}
        </div>
    );
};
export default Home;
