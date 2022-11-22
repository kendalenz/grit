import React, { useEffect, useRef, useState } from 'react';

{/* <div id='floating-panel'>
    <div>
        <div>
            <input type='text' id='from' placeholder='Origin'></input>
        </div>
    </div>
    <div>
        <div>
            <input type='text' id='to' placeholder='Destination'></input>
        </div>
    </div>
    <strong>Mode of Travel</strong>
    <select id='mode'></select>
        <option value='RUNNING'>Running</option>
        <option value='CYCLING'>Cycling</option>
        <option value='WALKING'>Walking</option>
</div> */}

const CreateRoute = () => {
    
    const el = useRef();

    useEffect(()=> {
        console.log(el.current);
        const map = new google.maps.Map(el.current, {
            center: { lat: 40.6782, lng: -73.9442 },
            zoom: 14,
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