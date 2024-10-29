import React, { } from 'react';

const MapTest = () =>{
    const fruits = ['apples', 'bananas', 'oranges'];

    return(
        <div>
            <h2>Fruits</h2>
            <ul>
                {
                    fruits.map((fruit, index)=>(
                        <li key={index}>{fruit}</li>
                    ))
                }
            </ul>
        </div>
    )
}

export default MapTest;