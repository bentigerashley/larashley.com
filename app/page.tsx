import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="home-page">
      <section className="home-intro" aria-labelledby="home-title">
        <h1 className="sr-only" id="home-title">Lara Ashley Ceramics</h1>
        <Image
          alt="La, Lara Ashley’s maker’s mark"
          className="home-logo"
          height={512}
          sizes="100px"
          src="/images/favicon-stamp.png"
          width={512}
        />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
          nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
        <nav className="collection-links" aria-label="Explore Lara Ashley">
          <Link href="/contact">Contact</Link>
          <Link href="/about">Continue to ceramics</Link>
        </nav>
      </section>

      <div className="hero">
        <Image
          alt="Lara Ashley Ceramics, with the La maker’s stamp impressed into clay"
          className="hero-image"
          height={1086}
          priority
          sizes="(max-width: 850px) calc(100vw - 2rem), (max-width: 1168px) 55vw, 600px"
          src="/images/laralogo.png"
          width={1448}
        />
      </div>
    </main>
  );
}
