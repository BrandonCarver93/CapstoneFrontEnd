import React from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';

const MapContainer = () => {

    const mapStyles = {
        height: "50vh",
        width: "40%"};

    const defaultCenter = {
        lat: 41.3851, lng: 2.1734
    }
    return (
        <LoadScript 
        googleMapsApiKey='AIzaSyCl8cpddceefKFJvWYjy-YXb-VWCncohrc'>
        <GoogleMap
        mapContainerStyle={mapStyles}
        zoom={13}
        center={defaultCenter}
        />
        </LoadScript>

    )
}
export default MapContainer;
