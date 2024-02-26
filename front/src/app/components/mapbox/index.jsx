"use client"
import Map, { Marker, GeolocateControl, FullscreenControl, NavigationControl, ScaleControl, Popup } from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';


export function Mapbox({ ubication,direction,height}) {
  const coordinates = ubication;

  return (
    <>
          <Map
              mapLib={import('mapbox-gl')}
            mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX}
            initialViewState={{
                longitude:ubication[1],
                latitude: ubication[0],
                zoom:14.5
              }}
              
        style={{ width: "100%", height: height || 500,minHeight:"500px" }}
        
            mapStyle="mapbox://styles/mapbox/streets-v12"
          >
                <Marker longitude={coordinates[1]} latitude={coordinates[0]}></Marker>
                <FullscreenControl position="top-left" />
                <NavigationControl position="top-left" />
                <ScaleControl />
                <GeolocateControl />
                <Popup
                    anchor="top"
                    longitude={coordinates[1]}
                    latitude={coordinates[0]}
                >
                    <div>
                        {direction}
                    </div>
                </Popup>
          </Map>
    </>
  );
}
