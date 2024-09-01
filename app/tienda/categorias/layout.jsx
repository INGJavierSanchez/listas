import Link from "next/link";
export const metadata ={
    title: "Tienda -> Categorias"

}

export default function  CategoriaLayout({ children }){
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