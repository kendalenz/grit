import React, { useEffect, useRef, useState } from 'react';

const CreateRoute = () => {
    const [place, setPlace] = useState();
    
    const el = useRef();

    useEffect(()=> {
        console.log(el.current);
        const map = new google.maps.Map(el.current, {
            center: { lat: 40.6782, lng: -73.9442 },
            zoom: 8,
          });
    }, [el]);

    return (
        <div ref={el} style={{height: '500px'}}>

        </div>
    )
}

export default CreateRoute;