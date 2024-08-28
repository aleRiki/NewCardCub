import Link from "next/link";
import { buttonVariants } from "./button";
import Image from "next/image";



const BannerHotel = () => {
    return (
        <>
            <div className="mt-4 text-center">

                <h4 className=" mt-2 text-5xl font-extrabold upperce">Lujon </h4>
                <h4 className=" mt-2 text-5xl font-extrabold upperce">Hoteles de alta estandar  </h4>
                <h4 className=" mt-2 text-5xl font-extrabold upperce">Las mas bellas playas de la  Isla   </h4>


            </div>
            <div className="mt-4 text-center">
                <Link href="/ofertas/ventas/" >
                    <div className="grid grid-cols-5 gap-3 max-w-7xl mx-auto mt-5 text-center">

                        <Image src="/melia-varadero.jpg" alt=""
                            height="200" width="200" />
                        <Image src="/varadero.jpg" alt=""
                           height="200" width="200"/>
                        <Image src="/melia.jpg" alt=""
                           height="200" width="200"/>
                        <Image src="/santam.jpg" alt=""
                            height="200" width="200" />
                        <Image src="/cayo-santa-maria.jpg" alt=""
                            height="200" width="200" />
                    </div>
                </Link>
            </div>


        </>
    );
}

export default BannerHotel;