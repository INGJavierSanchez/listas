import Link from "next/link"
export default function Navbar(){
    return(
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
</ul>
</nav>
);
}