import Navbar from "../components/Navbar"
export const metadata = {
  title: 'Listas',
  description: 'Listas',
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
       <Navbar />
        {children}
        </body>
    </html>
  )
}
