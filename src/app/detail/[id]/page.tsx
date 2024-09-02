import React from 'react';
import ProductDetail from "@/components/ProductDetail";
import { getProductsById } from "@/helpers/productshelper";
import Cart from '@/app/cart/page';

interface DetailProductProps {
    params: {
        id:string;
    }; 
}

const DetailProduct: React.FC<DetailProductProps> = async ({ params }) => {
    const {id} = params;
    const product = await getProductsById(id); // Convertir a string

    return (
        <div>
            <h1>Detail</h1>

            <ProductDetail {...product} />
        </div>
    
    )
};

export default DetailProduct;
