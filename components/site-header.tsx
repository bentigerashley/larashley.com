import Image from "next/image";
import Link from "next/link";

export function SiteHeader() {
  return (
    <header className="site-header">
      <Link className="brand" href="/" aria-label="Lara Ashley Ceramics home">
        <Image src="/images/favicon-stamp.png" width={44} height={44} alt="" loading="eager" />
        <span>Lara Ashley Ceramics</span>
      </Link>
      <nav aria-label="Primary navigation">
        <Link href="/functional-ware">Functional ware</Link>
        <Link href="/art-pieces">Art pieces</Link>
        <Link href="/contact">Contact</Link>
      </nav>
    </header>
  );
}
