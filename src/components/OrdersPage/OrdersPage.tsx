"use client";
import { getOrders } from "@/helpers/orders.helpers";
import { createOrder } from "@/helpers/orders.helpers";
import { IOrder, IProduct, userSession } from "@/interfaces";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import ProductList from "../ProductList";
import { useAuth } from "@/context/AuthContext";

const OrdersPage=()=>{
    const {userData}=useAuth();
    const router=useRouter();
const [orders, setOrders] = useState<IOrder[]>([]);



const fetchData=async()=>{
    const ordersResponse=await getOrders( userData?.token!);
    setOrders(ordersResponse)
}



useEffect(() => {
    if(userData?.userData){
        userData?.userData.name ===undefined ? router.push('/login'): fetchData()
    }
    
}, [userData?.userData])





return(
    <div className="w-full items-center justify-around flex flex-row">
    {orders && orders.length > 0 ? (
        orders?.map((item) => {
            return(
            <div key={item.id}>
                <h1>{new Date(item.date).toDateString()}</h1>
                <h2> Status: {item.status}</h2>
                
                

            </div>
            )
        })
    ) : (
        <div>
            <h1>You don't have any orders</h1>
            
        </div>
    )
    }

</div>

)

}

export default OrdersPage
