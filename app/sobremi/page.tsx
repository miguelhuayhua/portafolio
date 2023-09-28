
import Client from "./client";
import { Metadata } from "next";
export const metadata: Metadata = {
    title: 'Miguel Huayhua - Sobre mí',
    description: 'Conozca un poco a cerca de mí, mi personalidad y mi ética de trabajo. ',

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