import ButtonFuntion from "@/components/botonfuntion";
import ImagenPre from "@/components/imgPresentacion";

import BaneerDiscount from "@/components/ui/baneerDiscount";
import BannerAuto from "@/components/ui/banner-autos";
import BannerHotel from "@/components/ui/bannerHotel";
import { Carousel } from "@/components/ui/carousel";
import CarouselTextBanner from "@/components/ui/carousel-text-banner";

import { Separator } from "@radix-ui/react-separator";

export default function Home(){
    return(
        <main>
            <CarouselTextBanner/>
            <ImagenPre/>
            <BaneerDiscount/>
            <BannerAuto/>
            <BannerHotel/>
           
            
        </main>
    );
};