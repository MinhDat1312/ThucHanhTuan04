import React from 'react';
import { Route, Router, Routes } from 'react-router-dom';
import Home from './pages/Home';
import UserDetail from './components/UserDetail';
import NotFound from './pages/NotFound';

const UserApp = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/user/:id" element={<UserDetail />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </div>
    );
};

export default UserApp;
