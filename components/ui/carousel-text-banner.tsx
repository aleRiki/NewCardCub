"use client"
import { link } from "fs";
import { useRouter } from "next/navigation";
import { title } from "process";
import { Carousel, CarouselContent, CarouselItem } from "./carousel";
import { Car } from "lucide-react";
import { Card, CardContent } from "./card";
import Autoplay from 'embla-carousel-autoplay'
export  const dataCarouselTop =[ 
    {
        id: 1,
        title:"Arrendamiento a Corto Plazo:",
        description:"Duración: de 1 día a 7 días, ",
       link:"#!", 

    },
    {
        id: 2,
        title:"Arrendamiento a Mediano Plazo:",
        description:"Duración: de 8 días a 30 días ",
       link:"#!", 

    },
    {
        id: 3,
        title:"Arrendamiento a Largo Plazo:",
        description:"Duración: más de 30 días ",
       link:"#!", 

    },
    {
        id: 4,
        title:"Todos nuestros planes incluyen",
        description:"Asistencia 24/7 en caso de emergencias ",
       link:"#!", 

    },
]

const CarouselTextBanner = () => {
    const router = useRouter()

    return ( 
        <div className="bg-gray-200 dark:bg-primary">
           <Carousel className="w-full max-w-4xl mx-auto "
            /* duracion del tiempo de carousel*/ 
            plugins={[
                Autoplay({
                    delay: 2500
                })
            ]}
           >
           <CarouselContent>
            {dataCarouselTop.map(({id, title, link, description}) => (
                <CarouselItem key={id} onClick={() => router.push(link)} className="cursor-poninter" >
                    <Card className="shadow-none borde-none bg-trasparent">
                    <CardContent className="flex flex-col justify-center p-2 items-center text-center">
                    <p className="sm:text-lg text-wrap dark:text-seccundary"
                    >{title}</p>
                    <p className="text-xs sm:text-sm text-wrap dark:text-seccundary"
                    >{description}</p>
                    </CardContent>
                    </Card>
                  
                </CarouselItem>
            ))}
            </CarouselContent>
            
           </Carousel>
        </div>
     );
}
 
export default CarouselTextBanner;