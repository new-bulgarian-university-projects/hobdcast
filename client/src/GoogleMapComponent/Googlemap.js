import React from 'react';
import { compose, withStateHandlers } from "recompose";
import { InfoWindow, withGoogleMap, withScriptjs, GoogleMap, Marker } from 'react-google-maps';

// sample locations - https://gist.githubusercontent.com/farrrr/dfda7dd7fccfec5474d3/raw/758852bbc1979f6c4522ab4e92d1c92cba8fb0dc/data.json

const Map = compose(
    withStateHandlers(() => ({
        isMarkerShown: true,
        markerPosition: {latitude: 42.698334, longitude: 23.319941}
      }), {
        onMapClick: ({ isMarkerShown }) => (e) => ({
            markerPosition: e.latLng,
            isMarkerShown:true
        })
      }),
    withScriptjs,
    withGoogleMap
)
    (props =>
        <GoogleMap
            defaultZoom={12}
            isMarkerShown={true}
            defaultCenter={{ lat: 42.698334, lng: 23.319941 }}
            onClick={props.onMapClick}
        >
            {props.isMarkerShown && <Marker position={props.markerPosition} />}

        </GoogleMap>
    )

export default class MapContainer extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const apiKey = 'AIzaSyD0cxUP_HyE9qNT8ee4gy_XlS3GlvhZuT4';
        const url = `https://maps.googleapis.com/maps/api/js?key=${apiKey}`;
        return (
            <div style={{ height: '100%' }}>
                <Map 
                    isMarkerShown={true}
                    googleMapURL={apiKey}
                    loadingElement={<div style={{ height: `100%` }} />}
                    containerElement={<div style={{ height: `400px` }} />}
                    mapElement={<div style={{ height: `100%` }} />}
                />
            </div>
        )
    }
}
