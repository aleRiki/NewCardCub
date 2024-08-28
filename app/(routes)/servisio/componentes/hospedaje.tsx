import { Separator } from "@/components/ui/separator";
import ServicioHavitacion from "./servicioHavitacio";
import ServiciosHospedaje from "./servisioHopedaje";

const Hospedaje = () => {
    return ( <>
     <ServiciosHospedaje/>
     <Separator/>
     <ServicioHavitacion/>
    
    </>
       
     );
}
 
export default Hospedaje;