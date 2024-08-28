const ServiciosHospedaje = () => {
    return ( 
        <div className="bg-gray-200 py-40;">
 
    <div className="bg-white shadow-lg p-12">
      <h1 className="text-gray-700 text-center text-3xl">¡Grandes Ofertas Esperan por Ti!</h1>
      <p className="text-gray-600 text-center text-lg mt-4">No te pierdas estas increíbles oportunidades.</p>
      <div className="flex justify-center mt-10">
        <div className="text-2xl">
          <h2>Descuento del 20%</h2>
          <p className="text-4xl font-bold">en todos los productos</p>
          <a href="" className="block bg-white text-blue-500 text-decoration-none py-2 px-4 rounded-md mt-5">Comprar ahora</a>
        </div>
        <div className="bg-green-500 text-white p-8 text-center w-72 mx-5">
          <h2>Envío Gratis</h2>
          
          <p className="text-4xl font-bold">en pedidos mayores a $50</p>
          <a href="#" className="block bg-blacjk text-green-500 text-decoration-none py-2 px-4 rounded-md mt-5">Comprar ahora</a>
        </div>
      </div>
    </div>
  </div>
     );
}
 
export default ServiciosHospedaje;