import { Separator } from "@radix-ui/react-separator";
import Link from "next/link";


const dataFooter =[
    {
        id:1,
        name:"sobre nosotros",
        link:"/info",
    },
    {
        id:2,
        name:"productos",
        link:"#",
    },
    {
        id:1,
        name:"mi cuenta",
        link:"#",
    },
    {
        id:1,
        name:"politica de seguridad",
        link:"#",
    },
]

const Footer = () => {
    return (
        <footer className="mt-4">
           <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8 ">
            <div className="sm:flex sm:items-center sm:justify-between">
               <p>
                <samp className="font-bold">
                    CardCub
                </samp>
                
                </p> 
                
            </div>
            <Separator className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
            <samp className="block text-sm text-gray-500 sm:text-center dark:text-gray-400 " >
                &copy; 2024
                <Link href="#" >
                    CardCuba
                </Link>
                  Todos los derechos reservados 
            </samp>
           </div>
        </footer>
      );
}
 
export default Footer;
<footer>

</footer>