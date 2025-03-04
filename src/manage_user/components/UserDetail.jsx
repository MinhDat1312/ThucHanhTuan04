import React from 'react';
import { useParams } from 'react-router-dom';

const UserDetail = () => {
    const users = JSON.parse(localStorage.getItem('users'));

    const { id } = useParams();
    const user = users.find((user) => user.id == parseInt(id));

    return (
        <div>
            <div className="max-w-lg mx-auto bg-white shadow-lg rounded-lg p-6 mt-10">
                {!user ? (
                    <h2></h2>
                ) : (
                    <>
                        <h2 className="text-2xl font-bold text-gray-800 mb-4">Chi tiết người dùng</h2>
                        <p>
                            <strong className="text-gray-700">Tên:</strong> {user.name}
                        </p>
                        <p>
                            <strong className="text-gray-700">Email:</strong> {user.email}
                        </p>
                        <p>
                            <strong className="text-gray-700">Tuổi:</strong> {user.age}
                        </p>
                    </>
                )}
            </div>
        </div>
    );
};

export default UserDetail;
