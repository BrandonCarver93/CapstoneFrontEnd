import React from 'react';
import {Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import './Map.css';
class MapContainer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            latitude: 33.42336,
            longitude: -84.0531968,
            userAddress: null,
            stores: [
                {latitude: 33.437652, longitude: -84.039727},
                {latitude:33.452649, longitude: -84.169444},
                {latitude: 33.458320, longitude: -84.172951}
            ]
        };
    }
    async componentDidMount() {
        this.getLocation()
    }


    getLocation = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(this.getCoordinates, this.handleLocationError);
        } else {
            alert("Geolocation is not supported by this browser.");
        }
    }

    getCoordinates = (position) => {
        console.log(position,'string');
        const { latitude, longitude } = position.coords;
        console.log(latitude,longitude,'asdad');
        this.setState({
            latitude ,
            longitude
        })
    }

    render() {
        const {longitude, latitude, stores} = this.state
        return (
            <div className="Map">
            <Map
            google={this.props.google}
            zoom={13}
            style={{width:'46%',height:'75vh'}}
            initialCenter={{
                lat: latitude,
                lng: longitude
            }}
            >
            {/* <Marker position={{ lat: stores[0].latitude, lng: stores[0].longitude}} />
            <Marker position={{ lat: stores[1].latitude, lng: stores[1].longitude}} />
            <Marker position={{ lat: stores[2].latitude, lng: stores[2].longitude}} /> */}
            <Marker position={{ lat: latitude, lng: longitude}} />
           
            {/* {this.displayStore()} */}
            </Map>
            </div>
        )
    }
}


export default GoogleApiWrapper({apiKey:'AIzaSyCl8cpddceefKFJvWYjy-YXb-VWCncohrc'})(MapContainer); 