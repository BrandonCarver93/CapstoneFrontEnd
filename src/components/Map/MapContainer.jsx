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
      loader: true,
      stores: [],
    };
  }
  async componentDidMount() {
    this.getLocation();
    // console.log("called here 1");
    // this.initialize();
    // console.log(window);
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
   // console.log("called here 2");
   const {latitude, longitude } =this.state
    const userLocation = new window.google.maps.LatLng(latitude, longitude);

    map = new window.google.maps.Map(document.getElementById("root"), {
      center: userLocation,
      zoom: 15,
    });

    const request = {
      location: userLocation,
      radius: "5000",
      type: ["grocery_or_supermarket"],
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
    // console.log(stores, "stores was here ");
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
                  const { name } = store; 
                 return  (<Marker key={JSON.stringify(index)} name={name} title={name}/>)
              })}
          </Map>
      </div>
    );
  }
}

export default GoogleApiWrapper({
   apiKey: "AIzaSyCl8cpddceefKFJvWYjy-YXb-VWCncohrc",
})(MapContainer);
