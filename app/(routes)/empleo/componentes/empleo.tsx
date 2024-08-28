import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
  
const EmpleoOferta = () => {
    return ( 
        <Table>
        <TableCaption>Oferta De Empleos </TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Cantidad</TableHead>
            <TableHead>Estado </TableHead>
            <TableHead>Puesto</TableHead>
            <TableHead className="text-right">Salario</TableHead>
            <TableHead className="text-right">Acciones</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell className="font-medium">4</TableCell>
            <TableCell>Activo</TableCell>
            <TableCell>Administrador de Hoteles </TableCell>
            <TableCell className="text-right">$25 345.00</TableCell>
            <TableCell className="text-right"><button className="bg-red-300 hover:bg-blue-400 text-white font-bold py-1 px-1 rounded-lg transition-colors duration-300">Aplicar</button></TableCell>
          </TableRow>
        </TableBody>
      </Table>
      
    );
}
 
export default EmpleoOferta;