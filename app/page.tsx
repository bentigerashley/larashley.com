import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <section className="hero" aria-labelledby="home-title">
        <h1 className="sr-only" id="home-title">Lara Ashley Ceramics</h1>
        <Image
          alt="Lara Ashley Ceramics, with the La maker’s stamp impressed into clay"
          className="hero-image"
          height={1086}
          priority
          sizes="100vw"
          src="/images/laralogo.png"
          width={1448}
        />
      </section>

      <section className="collection-links" aria-label="Explore the work">
        <Link href="/functional-ware">Functional ware</Link>
        <Link href="/art-pieces">Art pieces</Link>
      </section>

      <section className="maker-intro">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua.
        </p>
      </section>
    </main>
  );
}
