
"use client";

import React, { useEffect, useState } from 'react';
import { IProduct, userSession } from "@/interfaces";
import { useRouter } from 'next/navigation';

const ProductDetail: React.FC<IProduct> = ({ id, name, image, description, price, stock, categoryId }) => {
    const router = useRouter();
    const [userSession, setUserSession] = useState<userSession | undefined>(undefined);

    useEffect(() => {
        const userSessionLocal = localStorage.getItem("userSession");
        if (userSessionLocal) {
            setUserSession(JSON.parse(userSessionLocal));
        }
    }, []);

    const handleClick = () => {
        if (!userSession?.token) {
            alert("You need to be logged in to add items to the cart.");
            router.push('/login');
        } else {
            const cart: IProduct[] = JSON.parse(localStorage.getItem("cart") || "[]");
            const productExists = cart.some((product: IProduct) => {
                if (product.id === id) {
                    return true;
                }
                return false;
            });

            if (productExists) {
                alert("Product is already in the cart.");
                router.push('/cart');
            } else {
                cart.push({
                    id,
                    name,
                    image,
                    description,
                    price,
                    stock,
                    categoryId
                });
                localStorage.setItem("cart", JSON.stringify(cart));
                alert("Product added to cart.");
                //router.push('/cart');
            }
        }
    };

    return (
        <div className="flex flex-col items-center p-4 md:p-6 bg-gray-100 rounded-lg shadow-md max-w-full md:max-w-lg mx-auto">
            <h1 className="text-2xl md:text-3xl font-semibold mb-4">{name}</h1>
            <img
                className="w-32 h-auto md:w-48 md:h-auto object-cover rounded-lg "
                src={image}
                alt={`Product image of ${name}`}
                width={300}
                height={300}
            />
            <p className="text-base md:text-lg text-gray-700 mb-2">{description}</p>
            <p className="text-lg md:text-xl font-bold mb-2">Price: ${price.toFixed(2)}</p>
            <p className="text-sm md:text-md text-gray-600 mb-4">Stock: {stock}</p>
            <button
                onClick={handleClick}
                className="bg-orange-500 text-white px-4 py-2 md:px-6 md:py-3 rounded-lg hover:bg-orange-600 transition duration-300"
            >
                Add to Cart
            </button>
        </div>
    );
};

export default ProductDetail;
