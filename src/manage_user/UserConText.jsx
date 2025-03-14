import { createContext, useState } from 'react';

export const UserConText = createContext();

export const UserProvider = ({ children }) => {
    const storageUsers = JSON.parse(localStorage.getItem('users')) || [];
    const [users, setUsers] = useState(storageUsers);
    const [submit, setSubmit] = useState(false);
    const [state, setState] = useState(0);

    const value = { users, setUsers, submit, setSubmit, state, setState };
    return <UserConText.Provider value={value}>{children}</UserConText.Provider>;
};
