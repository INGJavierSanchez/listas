import Link from "next/link"
export const metadata = {
  title: 'Listas',
  description: 'Listas',
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        <nav> <h1>Menú</h1>
      <ul>
        <li>
          <Link href="/">
          Pagína Principal
          </Link>
        </li>
        <li>
        <Link href="/tienda">
        Tienda
        </Link>
        </li>
        <li>
        <Link href="/tienda/categorias">
        Categorias
        </Link>
        </li>
      </ul>
      </nav>
        {children}
        </body>
    </html>
  )
}
