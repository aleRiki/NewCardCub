



import Link from "next/link";
import { buttonVariants } from "./ui/button";
import { Separator } from "@radix-ui/react-separator";
import { SeparatorHorizontal } from "lucide-react";

const ButtonFuntion = () => {
    return ( 
    <main>
        <SeparatorHorizontal/>
        <Link
         href={`/venta/vent`}
         className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700"
        >
            Ventas
        </Link>
       
        <Link
         href={`/ofertas/ofertas`}
         className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700"
        >
            Reservar
        </Link>
        <Link
         href={`/servisio/servi`}
         className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700"
        >
            Servicios
        </Link>
    </main>
        
     );
}
 
export default ButtonFuntion;