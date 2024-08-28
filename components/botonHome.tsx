import Link from "next/link";

const BotonHome = () => {
    return ( 
        <main>
            <Link
         href={`/`}
         className="bg-red-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700"
        >
            Home
        </Link>
        </main>
    );
}
 
export default BotonHome;