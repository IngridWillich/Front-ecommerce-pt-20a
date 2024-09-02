"use client";
import { register } from "@/helpers/auth.helpers";
import { validateSignUpForm } from "@/helpers/validate";
import { ISignUpError, ISignUpProps } from "@/interfaces";
import { useRouter } from "next/navigation";
import React, { useState, useEffect } from "react";

const SignUp = () => {
    const router = useRouter();
    const initialState = {
        email: "",
        password: "",
       name:"",
        phone: "",
        address: ""
    };

    const [formDta, setFormDta] = useState<ISignUpProps>(initialState);
    const [errors, setErrors] = useState<ISignUpError>(initialState);

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setFormDta({ ...formDta, [name]: value });
        setErrors({ ...errors, [name]: "" });
    };

    const handleOnSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const validationErrors = validateSignUpForm(formDta);
        setErrors(validationErrors);

        if (Object.keys(validationErrors).length === 0) {
            alert("submitted form");
            try {
                console.log(formDta);
                await register(formDta);
                alert("succesfully registered");
                router.push('/SignIn');
            } catch (error) {
                console.error("Error registering user:", error);
                alert("Error registering user, please try again");
            }
        }

        
    };

    useEffect(() => {
        const validationErrors = validateSignUpForm(formDta);
        setErrors(validationErrors);
    }, [formDta]);

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-900">
            <form onSubmit={handleOnSubmit} className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-lg">
                <div className="relative w-full mb-5">
                    <input
                        type="email"
                        name="email"
                        value={formDta.email}
                        onChange={handleInputChange}
                        placeholder="Email"
                        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                    />
                    {errors.email && <p className="text-red-600">{errors.email}</p>}
                </div>
                <div className="relative w-full mb-5">
                    <input
                        type="password"
                        name="password"
                        value={formDta.password}
                        onChange={handleInputChange}
                        placeholder="Password"
                        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                    />
                    {errors.password && <p className="text-red-600">{errors.password}</p>}
                </div>
                <div className="grid md:grid-cols-2 md:gap-6">
                    <div className="relative w-full mb-5">
                        <input
                            type="text"
                            name="name"
                            value={formDta.name}
                            onChange={handleInputChange}
                            placeholder="First Name"
                            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                        />
                        {errors.first_name && <p className="text-red-600">{errors.first_name}</p>}
                    </div>
                    
                </div>
                <div className="relative w-full mb-5">
                    <input
                        type="tel"
                        name="phone"
                        value={formDta.phone}
                        onChange={handleInputChange}
                        placeholder="Phone Number"
                        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                    />
                    {errors.phone && <p className="text-red-600">{errors.phone}</p>}
                </div>
                <div className="relative w-full mb-5">
                    <input
                        type="text"
                        name="address"
                        value={formDta.address}
                        onChange={handleInputChange}
                        placeholder="Address"
                        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                    />
                    {errors.address && <p className="text-red-600">{errors.address}</p>}
                </div>
                <div className="flex items-center justify-center">
                    <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 focus:outline-none">
                        Sign Up
                    </button>
                </div>
            </form>
        </div>
    );
};

export default SignUp;
