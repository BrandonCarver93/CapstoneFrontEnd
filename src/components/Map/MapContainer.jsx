import React from "react";
import { Map, GoogleApiWrapper, Marker } from "google-maps-react";
import "./Map.css";
let map;
let service;

class MapContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      latitude: 33.42336,
      longitude: -84.0531968,
      userAddress: null,
      stores: [],
    };
  }
  async componentDidMount() {
    this.getLocation();
    this.initialize();
  }

  getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        this.getCoordinates,
        this.handleLocationError
      );
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  };

  getCoordinates = (position) => {
    console.log(position, "my coordinates");
    const { latitude, longitude } = position.coords;
    this.setState({
      latitude,
      longitude,
    });
  };

  initialize = () => {
   console.log("called here 2");
   const {latitude, longitude } =this.state
    const userLocation = new window.google.maps.LatLng(latitude, longitude);
    map = new window.google.maps.Map(document.getElementById("myMap"),
  
    {
      center: userLocation,
      zoom: 15,
    });
    const request = {
      location: userLocation,
      radius: "7000",
      type: ["supermarket"],
      fields: ["name", "rating", "formatted_address", "geometry"]
    };
    
    service = new window.google.maps.places.PlacesService(map);
    service.nearbySearch(request, this.callback);
  };
 
  callback = (results, status) => {
    if (status === window.google.maps.places.PlacesServiceStatus.OK) {
      console.log(results, "callback results");
      return this.setState({ stores: results });
    } else {
      console.log({ results, status }, 'error object');
    }
  };
  render() {
    const { longitude, latitude, stores } = this.state;
    return (
      <div className="Map">
          <Map
            google={this.props.google}
            zoom={13}
            style={{ width: "46%", height: "75vh" }}
            initialCenter={{
              lat: latitude,
              lng: longitude,
            }}
          >
              {stores.map((store, index) => {
                console.log(store)
                  const name = store; 
                  const lat = store.geometry.location.lat()
                  const lng = store.geometry.location.lng()
                  const position = { lat , lng }
                  console.log(lat,lng);
                 return  (<Marker
                  key={JSON.stringify(index)} 
                  position={position} title={name} />
                  )

              })}
          </Map>
      </div>
    );
  }
}

export default GoogleApiWrapper({ apiKey: "AIzaSyCl8cpddceefKFJvWYjy-YXb-VWCncohrc", })(MapContainer);
