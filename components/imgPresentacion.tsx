import Image from "next/image";

const ImagenPre = () => {
    return ( 
        <main>
            
            <div
            className="hidden lg:flex  h-full justify-center items-center lg:flex-col"
            >
                
           
            <Image src="/hotp.jpg" alt="presentacion"
                width="1000" height="900" 
            />
            </div>
            
        </main>
     );
}
 
export default ImagenPre;