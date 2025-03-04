import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const UserList = (props) => {
    const { users, handleDeleteUser } = props;

    const deleteUser = (id) => {
        handleDeleteUser(id);
    };

    return (
        <>
            <h2 className="text-xl text-center font-semibold my-4">Danh sách người dùng</h2>
            {users.length > 0 && (
                <ul className="space-y-2">
                    <li className="flex rounded p-2 gap-4 justify-start">
                        <div className="flex gap-4 justify-center w-1/4">
                            <span className="w-1/4">ID</span>
                        </div>
                        <span className="w-2/4">Tên người dùng</span>
                        <div className="w-1/4"></div>
                    </li>
                    {users.map((user) => (
                        <li key={user.id} className="flex border rounded p-2 gap-4 justify-start">
                            <div className="flex gap-4 justify-center w-1/4">
                                <span className="w-1/4">{user.id}</span>
                            </div>
                            <Link to={`/user/${user.id}`} className="w-2/4">
                                {user.name}
                            </Link>
                            <div className="flex gap-4 justify-center w-1/4">
                                <button
                                    onClick={() => {
                                        deleteUser(user.id);
                                    }}
                                    className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-400"
                                >
                                    Xóa
                                </button>
                            </div>
                        </li>
                    ))}
                </ul>
            )}
        </>
    );
};

export default UserList;
