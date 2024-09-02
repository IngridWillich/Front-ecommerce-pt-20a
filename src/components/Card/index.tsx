import { IProduct } from "@/interfaces";
import React from "react";

const Card: React.FC<IProduct>=({name, image, description, price, stock, categoryId, id})=>{

    return (
        <div>
            <img src={image} alt={`Product image ${name}`} />
            <h2>{name}</h2>
            <p>{description}</p>
            <p>{price}</p>
            <p>{stock}</p>
            <p>{categoryId}</p>
            
        </div>
    )
}

export default Card