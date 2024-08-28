import Link from 'next/link';
import { buttonVariants } from './button';
import Image from 'next/image';

 
const BaneerDiscount = () => {

 
    return ( 

        <div className="p-5 sm:p-20 text-center items-center">
            <h2 className=" uppercase font-black text-2xl text-primary">Promos hasta con el 30% de descuento  </h2>
            <h2 className=" uppercase font-black text-2xl text-primary">vistanos en ofertas para mayor información </h2>
            
            <div className="hideden gap-1 max-w-6xl mx-auto mt-3 text-center items-center">
        
           
            <Image src="/presentacion.jpg" alt="pormo" width="900" height="900"
            
            />
            </div>
           
            <div className=" max-w-md mx-auto sm:flex justify-center gap-8 mt-5">
            <Link href="/ofertas/ofertas" className={ buttonVariants()}>Comprar</Link>
           
            </div>

        </div>
     );
}
 
export default BaneerDiscount;