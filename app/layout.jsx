import Navbar from "../components/Navbar"
import {Roboto} from "next/font/google"
export const metadata = {
  title: 'Tienda',
  description: 'Listas',
}

const roboto = Roboto({
  weight: ["300","400","500","700"],
  style: ["italic", "normal"],
  subsets: ["latin"],
})

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={roboto.className}>
       <Navbar />
        {children}
        </body>
    </html>
  )
}
