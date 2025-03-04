import React, { useEffect, useRef, useState } from 'react';
import UserList from '../components/UserList';

const storageUsers = JSON.parse(localStorage.getItem('users')) || [];

const Home = () => {
    const [users, setUsers] = useState(storageUsers);

    const tenRef = useRef();
    const emailRef = useRef();
    const ageRef = useRef();

    useEffect(() => {
        localStorage.setItem('users', JSON.stringify(users));
    }, [users]);

    let id = 5;
    const handleAddUser = () => {
        const name = tenRef.current.value.trim();
        const email = emailRef.current.value.trim();
        const age = ageRef.current.value;

        if (name && email && age) {
            const user = {
                id: id,
                name: name,
                age: age,
                email: email,
            };
            setUsers([...users, user]);
            tenRef.current.value = '';
            emailRef.current.value = '';
            id += 1;
        } else {
            alert('Nhập thông tin người dùng');
        }
    };

    const handleDeleteUser = (id) => {
        const currentUsers = users.filter((user) => user.id != id);
        setUsers(currentUsers);
    };

    return (
        <div className="max-w-lg mx-auto p-4 bg-white shadow-lg rounded-lg">
            <h1 className="text-2xl font-bold mb-4 text-center">Quản lý người dùng</h1>
            <div className="flex space-x-1 mb-4">
                <input
                    ref={tenRef}
                    type="text"
                    className="border p-2 flex-1 rounded focus:outline-sky-500"
                    placeholder="Tên người dùng"
                />
                <input
                    ref={emailRef}
                    type="email"
                    className="border p-2 flex-1 rounded focus:outline-sky-500"
                    placeholder="Email"
                />
                <input
                    ref={ageRef}
                    type="number"
                    className="border p-2 w-20 rounded focus:outline-sky-500"
                    placeholder="Tuổi"
                />
            </div>
            <button
                onClick={handleAddUser}
                className="bg-blue-500 text-white p-2 rounded w-full hover:bg-blue-400 cursor-pointer"
            >
                Thêm người dùng
            </button>
            <UserList users={users} handleDeleteUser={handleDeleteUser} />
        </div>
    );
};

export default Home;
