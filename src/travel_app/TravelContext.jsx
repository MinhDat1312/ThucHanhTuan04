import { createContext, useState } from 'react';

export const TravelContext = createContext();

export const TravelProvider = (props) => {
    const [submitted, setSubmitted] = useState(false);
    const [stateButton, setStateButton] = useState(false);

    return (
        <TravelContext.Provider value={{ submitted, setSubmitted, stateButton, setStateButton }}>
            {props.children}
        </TravelContext.Provider>
    );
};
