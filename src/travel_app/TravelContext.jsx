import React, { createContext, useEffect, useState } from 'react';

export const TravelContext = createContext();

export const TravelProvider = ({ children }) => {
    const carts = localStorage.getItem('carts') ? JSON.parse(localStorage.getItem('carts')) : [];

    const [cartItems, setCartItems] = useState(carts);
    const [submitted, setSubmitted] = useState(false);
    const [stateButton, setStateButton] = useState(false);

    useEffect(() => {
        localStorage.setItem('carts', JSON.stringify(cartItems));
    }, [cartItems]);

    const addToCart = (place) => {
        setCartItems((prevItems) => [...prevItems, place]);
    };

    const formatDateTime = (date) =>
        `${date.getDate().toString().padStart(2, '0')}/${(date.getMonth() + 1)
            .toString()
            .padStart(2, '0')}/${date.getFullYear()} ${date.getHours().toString().padStart(2, '0')}:${date
            .getMinutes()
            .toString()
            .padStart(2, '0')}:${date.getSeconds().toString().padStart(2, '0')}`;

    const value = {
        submitted,
        setSubmitted,
        stateButton,
        setStateButton,
        cartItems,
        setCartItems,
        addToCart,
        formatDateTime,
    };

    return <TravelContext.Provider value={value}>{children}</TravelContext.Provider>;
};
