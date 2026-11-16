import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About",
  description: "Meet Lara Ashley, a ceramic artist working with wheel-thrown forms in Mahurangi, Aotearoa New Zealand.",
};

export default function AboutPage() {
  return (
    <main className="about-page">
      <p className="eyebrow">About</p>
      <h1>Lara Ashley</h1>
      <p>
        Lara Ashley is a ceramic artist working in Mahurangi, Aotearoa New Zealand.
        She makes wheel-thrown vessels, exploring how pressure and small changes
        to a form can shift its structure.
      </p>
      <p>
        Starting with simple shapes, Lara pushes and distorts the clay, sometimes
        opening or breaking the surface. The resulting pieces show how the
        material stretches and responds to touch, balancing a sense of stability
        with the possibility of giving way.
      </p>
      <p>
        Experiments with raku and salt firing help her understand the material
        and develop new work. Her practice considers the relationship between
        deliberate decisions and the unexpected results of making with clay.
      </p>
      <p className="about-source">
        Read Lara’s artist profile on the{" "}
        <a href="https://www.mahurangiartistnetwork.com/mahurangiartists/lara-ashley">
          Mahurangi Artist Network
        </a>.
      </p>
      <nav className="collection-links" aria-label="More about Lara’s work">
        <Link href="/ceramics">Explore the ceramics</Link>
        <Link href="/contact">Get in touch</Link>
      </nav>
    </main>
  );
}
