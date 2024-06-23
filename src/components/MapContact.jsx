import { useState, useCallback } from 'react';
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';

// Définir les bibliothèques de manière statique
const libraries = ['places'];

const containerStyle = {
    width: '100%',
    height: '385px'
};

const center = {
    lat: 45.77866571252193,
    lng: 4.796409341077399
};

const position = { lat: 45.77866571252193, lng: 4.796409341077399 };

const MapComponent = () => {
    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: 'AIzaSyBGxzNk2p2jA8vJue8iQ9431n1RnvC4Ef0',
        libraries: libraries,
    });

    const [map, setMap] = useState(null);

    const onLoad = useCallback((mapInstance) => {
        const marker = new window.google.maps.Marker({
            map: mapInstance,
            position: position,
            title: '40 Rue Laure Diebold, 69009 Lyon, France',
        });

        const infoWindow = new window.google.maps.InfoWindow({
            content: '40 Rue Laure Diebold, 69009 Lyon, France',
        });

        marker.addListener('click', () => {
            infoWindow.open({
                anchor: marker,
                map: mapInstance,
            });
        });

        setMap(mapInstance);
    }, []);

    const onUnmount = useCallback(() => {
        setMap(null);
    }, []);

    return isLoaded ? (
        <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={13}
            onLoad={onLoad}
            onUnmount={onUnmount}
        />
    ) : <div>Loading...</div>;
};

export default MapComponent;
