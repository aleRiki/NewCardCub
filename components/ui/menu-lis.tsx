"use client"

import * as React from "react"
import Link from "next/link"

import { cn } from "@/lib/utils"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { DollarSign, HandCoinsIcon, House, SettingsIcon, ShieldAlert, Speech, Warehouse } from "lucide-react"

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Ferrary",
    href: "/categoi/ferrary",
    description:
      "El Ferrari del 2024 es un automóvil deportivo de última generación que representa la evolución más reciente de la icónica marca italiana. Diseñado con una apariencia audaz y agresiva, este modelo transmite un fuerte sentido de poder y elegancia.",
  },
  {
    title: "BMW",
    href: "/categoi/bmw",
    description:
      "El BMW del 2024 es un automóvil de lujo y alto rendimiento que representa la última evolución de la marca alemana conocida por su excelente calidad de conducción y diseño refinado.",
  },
  {
    title: "Clasico",
    href: "/categori/clasico",
    description:
      "En las calles de Cuba, los automóviles clásicos siguen siendo una parte integral de la cultura y el paisaje urbano. Estos vehículos, que en su mayoría datan de las décadas de 1950 y 1960, han sobrevivido a través de los años gracias a la ingeniosidad y el esfuerzo de los mecánicos y propietarios cubanos.",
  },
  
]

 const MenuList = () => {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        
      <NavigationMenuItem>
          <Link href="/" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
            <House/>
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        
        <NavigationMenuItem>
          <Link href="/venta/ventas" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
            <HandCoinsIcon/>
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/servisio/servicio" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
            <SettingsIcon/>
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        
        <NavigationMenuItem>
          
          <NavigationMenuItem>
          <Link href="/ofertas/ofert" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
             <DollarSign/>
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/info/" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
            <ShieldAlert/>
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/empleo/empleos" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Empleos 
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        
      </NavigationMenuList>
    </NavigationMenu>
  )
}
export default MenuList
 
const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    
  )
})
ListItem.displayName = "ListItem"

