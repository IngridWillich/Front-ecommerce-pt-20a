// import { IProduct, IProductProps } from "@/interfaces";
// import Image from "next/image";
// import Link from "next/link";
// const ProductCard: React.FC<IProductProps> = ({product}) => {
    

//     return (
//         <div className="flex flex-row items-center rounded-lg bg-gray-600 text-surface shadow-secondary w-[340px] h-[260px] md:flex-row gap-4">
//             <img className="h-full max-h-[260px] w-full max-w-[180px] rounded-t-lg object-cover md:w-48" src={product.image} 
//                 alt={`Product image ${product.name}`} 
                
                
//             />
       
           
//             <h2 className="text-lg font-semibold mb-2">{product.name}</h2>
//             <p className="text-gray-700 mb-4">Price: ${product.price}</p>
//             <p className="text-gray-700 mb-4">Stock:{product.stock}</p>
//             <Link href={`/detail/${product.id}`}>
//                 <button className="bg-blue-500 text-white px-4 py-2 rounded">SHOW DETAILS {">"}</button>
//             </Link>
//         </div>
//     );
// }

// export default ProductCard;

import { IProductProps } from "@/interfaces";
import Image from "next/image";
import Link from "next/link";


const ProductCard: React.FC<IProductProps> = ({ product }) => {
  return (
    <div className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-lg md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
        <Link href={`/detail/${product.id}`} passHref>
        <div className="relative w-16 h-16 sm:w-24 sm:h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 overflow-hidden transition-transform duration-300 transform hover:scale-105 rounded-lg md:rounded-l-lg" >
    <img 
        src={product.image}
        alt={product.name}
      width={280}
      height={280}
      
        className="w-full h-auto object-cover max-w-[180px] max-h-[260px]"
    />
</div>

      </Link>
      <div className="p-4 flex flex-col justify-between">
        <h2 className="text-lg font-semibold mb-2">{product.name}</h2>
        <p className="text-gray-700 mb-4">Price: ${product.price}</p>
        <p className="text-gray-700 mb-4">Stock: {product.stock}</p>
        <Link href={`/detail/${product.id}`}>
          <button className="bg-blue-500 text-white px-4 py-2 rounded">SHOW DETAILS {">"}</button>
        </Link>
      </div>
    </div>
  );
}

export default ProductCard;


