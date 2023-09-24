import './globals.scss'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Miguel Huayhua - Freelancer',
  description: 'Freelancer Boliviano experto en el desarrollo de aplicaciones web, con el manejo de distintas tecnologías.',

  openGraph: {
    title: "Miguel Huayhua - Freelancer Desarrollo de Aplicaciones y Programas",
    description: "Freelancer Boliviano experto en el desarrollo de aplicaciones web, con el manejo de las distintas tecnologías actuales.",
    authors: "Miguel Huayhua"

  }

}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body>{children}</body>

    </html>
  )
}
