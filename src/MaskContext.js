import React, { createContext, useReducer, useContext, useState } from 'react';




const MaskProvider = ({children}) => {
    
    const initialState = {

    }

    const [ addr, setAddr ] = useState(initialState)

    return (
        <MapContext.Provider value={addr}>
            {children}
        </MapContext.Provider>
    )

}