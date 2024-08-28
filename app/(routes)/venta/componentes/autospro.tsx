
import { Separator } from "@/components/ui/separator";
import { ShoppingBasketIcon, ShoppingCart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const HabitacionesVentas = () => {
    return (
    <main>
        <div className="grid grid-cols-5 gap-3 max-w-7xl mx-auto">

           
        </div>
        
        <Separator/>
        <Link
         href={`/carrito`}
        >
        <ShoppingCart/>
        </Link>
        </main>
        );
    
       
        
}

export default HabitacionesVentas;