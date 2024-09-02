
import ProductCard from "@/components/ProductCard";
import ProductList from "@/components/ProductList";
import { getProductsDB } from "@/helpers/productshelper";
import { IProduct } from "@/interfaces";
import { useEffect, useState } from "react";



async function Home() {
    const products= await getProductsDB();
    return (
        <div>
            <ProductList products={products} />
            
        </div>
    );
}

export default Home


