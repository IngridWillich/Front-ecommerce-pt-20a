"use client";
import ProductCard from "@/components/ProductCard";
import { IProduct } from "@/interfaces";
import { useRouter } from "next/navigation";


export default function LandingPage() {
const router=useRouter()

const handleClick=()=>{
  

  router.push('/auth-page')
}
  return (
    <div>
      <h1>Welcome to MEGA</h1>
      <h2>Where you can buy your favorite products</h2>

<p></p>
      
      <button onClick={handleClick}>Login</button>



      
    </div>
  );
}

