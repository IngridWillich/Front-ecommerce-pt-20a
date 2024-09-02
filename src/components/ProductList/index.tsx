


import { IProduct, IProductListProps } from "@/interfaces";
import ProductCard from "../ProductCard";
import Link from "next/link";

const ProductList: React.FC<IProductListProps> = ({ products }) => {
  
  return (
    <div className="flex flex-row flex-wrap">
      {products &&
      products?.map((product: IProduct) => (
        
                  <ProductCard product={product} key={product.id} />
                 
      ))}
    </div>
  );
};

export default ProductList;
// 
