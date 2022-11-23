import React, { useEffect, useRef, useState } from 'react';
import {useJsApiLoader, GoogleMap, Marker} from '@react-google-maps/api';

const CreateRoute = () => {
    
    const el = useRef();

    // const {isLoaded} = useJsApiLoader({
    //     googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    // })

    // if(isLoaded) {
    //     return <SkeltonText />
    // }

    useEffect(()=> {
        console.log(el.current);
        const map = new google.maps.Map(el.current, {
            center: { lat: 40.6782, lng: -73.9442 },
            zoom: 14,
            options: {
                zoomControl: false,
                streetViewControl: false,
                mapTypeControl: false,
                fullscreenControl: false
            }
          });
    }, [el]);

    return (


        <div id='create-route-page'>
            <div id='floating-panel'>
                <div>
                    <h3>Plan Your Route</h3>
                    <div>
                        <input className='float-input' type='text' id='from' placeholder='Origin'></input>
                    </div>
                </div>
            <div>
                <div>
                    <input className='float-input' type='text' id='to' placeholder='Destination'></input>
                </div>
            </div>
            <label id='mode-label'>
            <strong>Mode of Travel</strong>
            </label>
            <br></br>
                <select id='mode'>
                    <option value='RUNNING'>Running</option>
                    <option value='CYCLING'>Cycling</option>
                    <option value='WALKING'>Walking</option>
                </select>
            </div>
            <div id='map'ref={el}>
            </div>
        </div>
    )
}

export default CreateRoute;