import React from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';


const MapContainer = () => {

    const mapStyles = {
        height: "50vh",
        width: "42%"};

    const defaultCenter = {
        lat: 33.447334, lng: -84.146858
    }
    return (
        <div className="Map">
        <LoadScript 
        googleMapsApiKey='AIzaSyCl8cpddceefKFJvWYjy-YXb-VWCncohrc'>
        <GoogleMap
        mapContainerStyle={mapStyles}
        zoom={13}
        center={defaultCenter}
        />
        </LoadScript>
        </div>
    )
}
export default MapContainer;
