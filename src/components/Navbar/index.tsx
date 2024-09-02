// "use client";

// import Image from "next/image";
// import Link from "next/link";
// import styles from './navbar.module.css';
// import { useContext, useEffect, useState } from "react";
// import { productsToPreLoad } from "../../../public/data"; // Asegúrate de importar productsToPreLoad
// import { userSession } from "@/interfaces";
// import { useAuth } from "@/context/AuthContext";



// const Navbar = () => {
//     const {userData}= useAuth();
//     const [open, setOpen] = useState(true);
//     const [windowSize, setWindowSize] = useState([1200, 800]);
                                                                                                                        
   
//     const windowsizeHandler = () => {
//         setWindowSize([window.innerWidth, window.innerHeight]);
//         window.innerHeight >= 800 ? setOpen(true) : setOpen(false);
//     };

//     useEffect(() => {
//         window.addEventListener("resize", windowsizeHandler);
//         return () => {
//             window.removeEventListener("resize", windowsizeHandler);
//         };
//     }, [windowSize]);

//     return (
//         <div className="bg-[#040404] p-0 fixed top-0 left-0 w-full h-12 z-[1000] flex items-center">
//             <div className={styles.navbar}>
//                 <Image src="/imagenes/logo.png" alt="logo" width={200} height={100} />
//                 <input
//                     type="text"
//                     placeholder="Search..."
//                     className="w-full max-w-[200px] rounded-lg bg-white shadow-secondary"
//                 />
//                 <div className={styles.navbarItems}>
//                     <div>
//                         {
//                             !userData?.token? (

//                                 <Link className={styles.navbar_item} href="/login" >SignIn</Link>

//                             ):(

//                                 <Link className={styles.navbar_item} href="/user-dashboard" >
//                                     <p>Profile:{userData?.userData?.name}</p>
//                                 </Link>

//                             )
//                         }

                    
//                     </div>
//                     <div className="block md:hidden" onClick={() => setOpen(!open)}>
//                         <div className="w-4 h-0.5 bg-black"></div>
//                     </div>

                    // {/* {open && (
                    //     windowSize[0] >= 720 && (
                    //     <div className="w-full flex flex-row p-2 items-center gap-[10px] justify-around ">
                    //         {categoriesToPreLoad.map((category) => (
                    //             <Link key={category.id} href={`/products/${category.id}`} className={styles.navbar_item}>
                    //             <label className={styles.navbar_item}>{category.name}</label>
                    //             </Link>

                    //         ))}
                    //     </div>
                    // )
                    
                    // )} */}

//                     <Link href="/home" className={styles.navbar_item}>Home</Link>
//                     <Link href="/checkout" className={styles.navbar_item}>Checkout</Link>
//                     <Link href="/user-dashboard" className={styles.navbar_item}>User Dashboard</Link>
//                     <Link href="/orders" className={styles.navbar_item}>Orders</Link>
                    
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Navbar;
"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useAuth } from "@/context/AuthContext";
import styles from './navbar.module.css';

const Navbar = () => {
    const { userData } = useAuth();
    const [open, setOpen] = useState(false);
    const [windowSize, setWindowSize] = useState([1200, 800]);

    const windowsizeHandler = () => {
        setWindowSize([window.innerWidth, window.innerHeight]);
    };

    useEffect(() => {
        window.addEventListener("resize", windowsizeHandler);
        return () => {
            window.removeEventListener("resize", windowsizeHandler);
        };
    }, []);

    return (
        <div className="bg-[#040404] p-0 fixed top-0 left-0 w-full h-12 z-[1000] flex items-center">
            <div className="container mx-auto flex justify-between items-center px-4 md:px-8">
                <div className="flex items-center">
                    <Image src="/imagenes/logo.png" alt="logo" width={160} height={80} />
                </div>

                <div className="flex-grow hidden md:flex items-center justify-center">
                    <input
                        type="text"
                        placeholder="Search..."
                        className="w-full max-w-[200px] rounded-lg bg-white shadow-secondary p-2"
                    />
                </div>

                <div className="hidden md:flex items-center gap-4">
                    <Link href="/home" className={styles.navbar_item}>Home</Link>
                    <Link href="/checkout" className={styles.navbar_item}>Checkout</Link>
                    <Link href="/user-dashboard" className={styles.navbar_item}>User Dashboard</Link>
                    <Link href="/orders" className={styles.navbar_item}>Orders</Link>
                    {
                        !userData?.token ? (
                            <Link href="/login" className={styles.navbar_item}>SignIn</Link>
                        ) : (
                            <Link href="/user-dashboard" className={styles.navbar_item}>
                                Profile: {userData?.userData?.name}
                            </Link>
                        )
                    }
                </div>

                
            </div>

           
        </div>
    );
};

export default Navbar;
