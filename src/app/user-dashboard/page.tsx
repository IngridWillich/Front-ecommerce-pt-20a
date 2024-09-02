// "use client";

// import { useAuth } from '@/context/AuthContext';
// import { useState, useEffect } from 'react';
// import { useRouter } from 'next/navigation';
// import { getOrders } from '@/helpers/orders.helpers'; 
// import { IOrder } from '@/interfaces';

// const UserDashboard = () => {
//     const { userData } = useAuth();
//     const [orders, setOrders] = useState<IOrder[]>([]);
//     const router = useRouter();

//     useEffect(() => {
//         if (!userData?.token) {
//             router.push('/login'); 
//         } else {
//             fetchOrders();
//         }
//     }, [userData]);

//     const fetchOrders = async () => {
//         if (userData?.token) {
//             const ordersResponse = await getOrders(userData.token);
//             setOrders(ordersResponse);
//         }
//     };

//     return (
//         <div className="p-8 bg-gray-100 min-h-screen">
//             <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-md">
//                 <h1 className="text-2xl font-bold mb-6">User Dashboard</h1>

//                 <section className="mb-8">
//                     <h2 className="text-xl font-semibold mb-4">Profile</h2>
//                     {userData ? (
//                         <div className="border p-4 rounded-md bg-gray-50">
//                             <p><strong>Name:</strong> { userData?.userData?.name}</p>
//                             <p><strong>Email:</strong> { userData?.userData?.email}</p>
//                             <p><strong>Address:</strong> { userData?.userData?.address}</p>
//                             <p><strong>Phone:</strong> { userData?.userData?.phone}</p>
//                         </div>
//                     ) : (
//                         <p>Loading profile...</p>
//                     )}
//                 </section>

//                 <section className="mb-8">
//                     <h2 className="text-xl font-semibold mb-4">Orders</h2>
//                     {orders.length > 0 ? (
//                         <ul>
//                             {orders.map((order) => (
//                                 <li key={order.id} className="border p-4 rounded-md mb-2 bg-gray-50">
//                                     <p><strong>Date:</strong> {new Date(order.date).toDateString()}</p>
//                                     <p><strong>Status:</strong> {order.status}</p>
//                                     <p><strong>Products:</strong> {order.products.length}</p>
                                    

//                                 </li>
//                             ))}
//                         </ul>
//                     ) : (
//                         <p>No orders found.</p>
//                     )}
//                 </section>

                
//             </div>
//         </div>
//     );
// };

// export default UserDashboard;
"use client";

import { useAuth } from '@/context/AuthContext';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { getOrders } from '@/helpers/orders.helpers'; 
import { IOrder, IProduct } from '@/interfaces';

const UserDashboard = () => {
    const { userData } = useAuth();
    const [orders, setOrders] = useState<IOrder[]>([]);
    const router = useRouter();

    useEffect(() => {
        if (!userData?.token) {
            router.push('/login'); 
        } else {
            fetchOrders();
        }
    }, [userData]);

    const fetchOrders = async () => {
        if (userData?.token) {
            const ordersResponse = await getOrders(userData.token);
            setOrders(ordersResponse);
        }
    };

    return (
        <div className="p-8 bg-gray-100 min-h-screen">
            <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-md">
                <h1 className="text-2xl font-bold mb-6">User Dashboard</h1>

                <section className="mb-8">
                    <h2 className="text-xl font-semibold mb-4">Profile</h2>
                    {userData ? (
                        <div className="border p-4 rounded-md bg-gray-50">
                            <p><strong>Name:</strong> {userData?.userData?.name}</p>
                            <p><strong>Email:</strong> {userData?.userData?.email}</p>
                            <p><strong>Address:</strong> {userData?.userData?.address}</p>
                            <p><strong>Phone:</strong> {userData?.userData?.phone}</p>
                        </div>
                    ) : (
                        <p>Loading profile...</p>
                    )}
                </section>

                <section className="mb-8">
                    <h2 className="text-xl font-semibold mb-4">Orders</h2>
                    {orders.length > 0 ? (
                        <ul>
                            {orders.map((order) => (
                                <li key={order.id} className="border p-4 rounded-md mb-2 bg-gray-50">
                                    <p><strong>Date:</strong> {new Date(order.date).toDateString()}</p>
                                    <p><strong>Status:</strong> {order.status}</p>
                                    <p><strong>Products:</strong> {order.products.length}</p>
                                    <ul className="pl-4 mt-2 list-disc">
                                        {order.products.map((product: IProduct) => (
                                            <li key={product.id}>
                                               <p> <strong>Name:</strong> {product.name}</p>
                                                <p><strong>Price:</strong> ${product.price}</p>
                                            </li>

                                        ))}
                                    </ul>
                                  
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <p>No orders found.</p>
                    )}
                </section>
            </div>
        </div>
    );
};

export default UserDashboard;
