import { Command } from "@/components/ui/command";
import { DatePickerDemo } from "./componente/calendario";
import Image from "next/image";

export default function Home (){
    return(
    <main>
     
         <p>Informacion</p>
        <a
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                    href="/"
                  >
                    <div className="grid grid-cols-2 gap-3 max-w-7xl mx-auto mt-5 text-center">
                    <div className="mb-2 mt-4 text-lg font-medium">
                     CardCub
                    
                    <p className="text-sm leading-tight text-muted-foreground">
                    Bienvenidos a CardCub, su socio de confianza para disfrutar de la mejor experiencia de movilidad en Cuba. Somos una empresa dedicada a brindar soluciones de alquiler de automóviles que se adaptan a las necesidades de residentes y visitantes por igual.
                   
                   
                    </p>
                    </div>
                    <Image src="/logop.jpg" alt=""
                      height="200" width="200" 
                    />
                    </div>
                    
                    
                  </a>
                  

    </main>
       
    )
    ;
}