import Link from "next/link";

export default function  TiendaLayout({ children }){
    return <>
    <nav>
        <h3>Sección Categorias</h3>
        <ul>
            <li>
                <Link href="/tienda/categorias/computadores">
                Computadores
                </Link>
                </li>
            <li>
                <Link href="/tienda/categorias/celulares">
                Celulares
                </Link>
            </li>
            <li>
                <Link href="/tienda/categorias/accesorios">
                Accesorios
                </Link>
                </li>
        </ul>
    </nav>
    {children}
    </>;
}