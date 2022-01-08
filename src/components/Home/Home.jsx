import React from 'react';
import MapContainer from '../Map/MapContainer';
import Reviews from '../Reviews/Reviews';
import WineRating from '../Rating/Rating'
import './Home.css';



const Home = (props) => {

  const changeSource = (e) => {
    e.target.onerror = null; e.target.src = 'https://www.laverstokepark.co.uk/wp-content/uploads/2018/03/coming-soon-wine.jpg' 
  }
    let renderedWines = props.wines.map((wine) => {
      return(
      <div className="Wine">
          <div className="card mb-3" style={{ width: '50rem' }}>
            <div className="row g-5">
              <div className="col-md-4">
                <img onError ={(e)=> changeSource(e)} src={wine.image || 'https://www.laverstokepark.co.uk/wp-content/uploads/2018/03/coming-soon-wine.jpg'} className="img-fluid rounded-start" alt="..."/> 
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">{wine.vineyard}</h5>
                  <h6 className="card-text">{wine.varietal}</h6>
                  <p className="card-text">{wine.description}</p>
                  <p className="card-text">{wine.pairing}</p>
                  <p className="card-text">{wine.ratings}</p>
                  </div>
                </div>
              </div>
              <div className="reviews">
                <center><h4>Reviews</h4></center>
                <div className="card">
                    {wine.reviews.map((element)=><>
                    <WineRating ratingValue={element.rating} />
                    <p>{element.text}</p></>)}
                    <Reviews id={wine} />
                </div>
            </div>
        </div>
      </div>
      );
    });
    return(
        <div className="Map-wines">
          <h4><small className="text-muted">Places near you to buy wine.</small></h4>
          <div id="myMap"></div>
          <MapContainer />
          {renderedWines[0]}
        </div>
    );
};
export default Home;
