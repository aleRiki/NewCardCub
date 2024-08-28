import { Separator } from "@radix-ui/react-dropdown-menu";
import Hospedaje from "../componentes/hospedaje";
import Result from "postcss/lib/result";
import ServicioHavitacion from "../componentes/servicioHavitacio";

export default function Page(){
    return(
        
        <div className="max-w-6xl py-4 mx-auto sm:py-16 sm:px-24 items-center">
            
                <h1 className="text-3xl font-medium">
                    Ofertas
                </h1>
           
            <Separator/>

            <Hospedaje/>
            

           </div> 
       
    )
}