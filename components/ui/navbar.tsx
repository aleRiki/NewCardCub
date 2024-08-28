"use client"
import { Heart, ShoppingCart, User, Warehouse } from "lucide-react";
import Head from "next/head";
import { useRouter } from "next/navigation";
import MenuList from "./menu-lis";
import ToggleTheme from "./toggle-theme";
import Home from "@/app/page";

const Navbar = () => {
    const router = useRouter()
    return ( 
        <div className="flex items-center justify-between p-4 mx-auto cursor-pointer sm:max-w-4xl dm:max-w-6xl ">
           <div
           className="grid grid-cols-3 gap-1 max-w-7xl mx-auto mt-5 text-center"
           >
           <h1 className="text-3xl" onClick={() => router.push("/")}>
                Card
                
                <samp className="font-bold">
                
                    Cub
                </samp>
            </h1>
           </div>
          
            <div className=" items-center justify-between hidden sm:flex">
                <MenuList/>
            </div>
            <div className="flex sm:hidden">
                <MenuList/>
            </div>
            <div className="flex items-center justify-between gap-2 sm:gap-7">
                <ShoppingCart 
                strokeWidth="1" 
                className="cursor-pointer" 
                onClick={() => router.push("/carrito/")}/>
                
                
                <User
                    strokeWidth="1"
                    onClick={() => router.push("/sign-in")}
                    className="/cursor-pointer"
                />
                <ToggleTheme/>
            </div>
        </div>
     );
}
 
export default Navbar;