
import Client from "./client";
import { Metadata } from "next";
export const metadata: Metadata = {
    title: 'Miguel Huayhua - Historial',
    description: 'Vea un poco de mi historial de trabajo por este medio.',

    openGraph: {
        title: "Miguel Huayhua - Freelancer Desarrollo de Aplicaciones y Programas",
        description: "Freelancer Boliviano experto en el desarrollo de aplicaciones web, con el manejo de las distintas tecnologías actuales.",
        authors: "Miguel Huayhua"
    }
}
export default async function Historial() {


    return (
        <div className="body">

            <Client />

        </div>
    )
}