import { ILoginError, ILoginProps, ISignUpProps } from "@/interfaces";

const APIURL = process.env.NEXT_PUBLIC_API_URL;
export async function register(userData: ISignUpProps) {
    try {
        const res = await fetch(`${APIURL}/users/register`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userData)
        });
        
        if (res.ok) {
            return res.json();
        } else {
            const errorText = await res.text();
            console.error("Failed to register:", errorText);
            throw Error(errorText);
        }
    } catch (error) {
        console.error("Error during registration:", error);
    }
}

export async function login(userData: ILoginProps) {
    try {
        const res = await fetch(`${APIURL}/users/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userData)
        });
        
        if (res.ok) {
            return res.json();
        } else {
            const errorText = await res.text();
            console.error("Failed to login:", errorText);
            throw Error(errorText);
        }
    } catch (error) {
        console.error("Error during login:", error);
    }
}
