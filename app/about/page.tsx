import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = { title: "About" };

export default function AboutPage() {
  return (
    <main className="story-page">
      <section className="story-copy">
        <h1>Lara Ashley</h1>
        <p className="lead">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua.
        </p>
        <p>
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
          commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur.
        </p>
      </section>
      <Image
        alt="Lara Ashley standing behind her ceramic work at a market"
        height={2339}
        priority
        sizes="(max-width: 850px) calc(100vw - 48px), 48vw"
        src="/images/mumatmarket.jpg"
        width={1734}
      />
    </main>
  );
}
