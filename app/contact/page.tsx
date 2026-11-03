import type { Metadata } from "next";

export const metadata: Metadata = { title: "Contact" };

export default function ContactPage() {
  return (
    <main className="contact-page">
      <p className="eyebrow">Contact</p>
      <h1>Ask about the work</h1>
      <p>For enquiries about functional ware or art pieces, email Lara directly.</p>
      <a className="button" href="mailto:lara.ashley@gmail.com">lara.ashley@gmail.com</a>
      <p className="social-contact">
        You can also follow new work on <a href="https://www.instagram.com/larapottsceramics/" rel="noreferrer" target="_blank">Instagram</a>.
      </p>
    </main>
  );
}
