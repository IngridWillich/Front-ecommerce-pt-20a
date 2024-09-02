"use client"
import { useAuth } from '@/context/AuthContext';
import { login } from '@/helpers/auth.helpers';
import { validateLoginForm } from '@/helpers/validate';
import { ILoginError, ILoginProps } from '@/interfaces';
import { useRouter } from 'next/navigation';
import React from 'react';

import { useState, useEffect } from "react";



const Login = () => {
    const {setUserData}=useAuth()
    const router=useRouter();
   
    const initialState={
        email: "",
        password: ""
    }

    const [formDta, setFormDta] = useState<ILoginProps>(initialState);
    const [errors, setErrors] = useState<ILoginError> (initialState);
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setFormDta({ ...formDta, [name]: value });
        setErrors({ ...errors, [name]: "" });

    };

    const handleOnSubmit = async ( event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
       
        const response= await login(formDta)
        console.log(response)
        const {token,user}=response;
       const userData={
          id: user.id,
          name: user.name,
          email: user.email,
          address: user.address,
          phone: user.phone,
        //   password: user.password,
        //   token: token
        orders: user.orders
       }
       setUserData({token, userData})
        // localStorage.setItem("userSession", JSON.stringify({token,user:clearUser}));//guarda el usuario en el localStorage
        alert ("submitted form")
        router.push('/home')
        //una vez que el usuario se registre redirecciona a la ruta principal
    };
     
    useEffect(()=>{
        const errors=validateLoginForm(formDta)
        setErrors(errors)

    },[formDta])

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-900 mt-20">
            <form onSubmit={handleOnSubmit} className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-lg mt-10">
                <div className="relative w-full mb-10 mt-10">
                    <input
                        id="email"
                        type="email"
                        name="email"
                        value={formDta.email}
                        onChange={handleInputChange}
                        placeholder="example@gmail.com"
                        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                    />
                    {errors.email && <p className="text-red-600">{errors.email}</p>}
                </div>
                <div className="relative w-full mb-5">
                    <input
                    id="password"
                        type="password"
                        name="password"
                        value={formDta.password}
                        onChange={handleInputChange}
                        placeholder="********"
                        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                    />
                    {errors.password && <p className="text-red-600">{errors.password}</p>}
                </div>
                <div className="flex items-center justify-center">
                    <button 
                        type="submit" 
                        className={`px-6 py-2 font-semibold rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 ${
                            errors.email || errors.password ? "bg-gray-400 cursor-not-allowed" : "bg-blue-600 text-white hover:bg-blue-700"
                        }`}
                        disabled={!!errors.email || !!errors.password}
                    >
                        Login
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Login;
