export function SiteFooter() {
  return (
    <footer className="site-footer">
      <p>Handmade ceramics by Lara Ashley.</p>
      <div>
        <a className="footer-icon gmail-icon" href="mailto:lara.ashley@gmail.com" aria-label="Email Lara">
          <svg aria-hidden="true" viewBox="0 0 24 24">
            <path d="M3.5 6.5 12 13l8.5-6.5" fill="none" stroke="currentColor" strokeWidth="2.8" />
            <path d="M3.5 6.5v11" fill="none" stroke="currentColor" strokeWidth="2.8" />
            <path d="M20.5 6.5v11" fill="none" stroke="currentColor" strokeWidth="2.8" />
          </svg>
        </a>
        <a className="footer-icon" href="https://www.instagram.com/larapottsceramics/" rel="noreferrer" target="_blank" aria-label="Lara Potts Ceramics on Instagram">
          <svg aria-hidden="true" viewBox="0 0 24 24">
            <rect x="3" y="3" width="18" height="18" rx="5" fill="none" stroke="currentColor" strokeWidth="1.8" />
            <circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" strokeWidth="1.8" />
            <circle cx="17.5" cy="6.5" r="1.1" fill="currentColor" />
          </svg>
        </a>
        <a href="/admin">Admin</a>
      </div>
    </footer>
  );
}
