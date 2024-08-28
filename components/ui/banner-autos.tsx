import Link from 'next/link';
import { useState } from 'react';
import { buttonVariants } from './button';
import { Separator } from '@radix-ui/react-separator';
import Image from 'next/image';

const BannerAuto = () => {


    return (
        <>
            <div className="mt-4 text-center">

                <h4 className=" mt-2 text-5xl font-extrabold upperce">Autos de lujo </h4>
                <h4 className=" mt-2 text-5xl font-extrabold upperce">Bellas Vistas y paisajes   </h4>


            </div>
            <Separator />
            <div className="mt-4 text-center">
                    <Link href="/venta/ventas/" >
                    <div className="grid grid-cols-5 gap-3 max-w-7xl mx-auto">

                        <Image src="/clasico3.jpg " alt="" width="200" height="200"
                             />
                        <Image src="/clasico.jpg" alt="lujo"

                            width="200" height="200" />

                        <Image src="/chebrole.jpg " alt=""
                            width="200" height="200" />
                        <Image src="/bmw.jpg" alt=""
                            width="200" height="200" />
                        <Image src="/ferrari.jpg " alt=""
                            width="200" height="200" />
                        <Image src="/peugeo1.jpg" alt=""
                            width="200" height="200" />
                        <Image src="/ferrari.jpg " alt=""
                            width="200" height="200" />
                        <Image src="/clasico4.jpg" alt=""
                            width="200" height="200" />
                        <Image src="/ferrari.jpg " alt=""
                            width="200" height="200" />

                        <Image src="/clasico7.jpg" alt=""
                            width="200" height="200" />
                    </div>
                    
                </Link>
            </div>

        </>

    );
}

export default BannerAuto;