// components/Layout.js
import Link from "next/link";
import { useRouter } from "next/router";

export default function Layout({ children }) {
  const router = useRouter();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Blog", path: "/blog" },
    { name: "Contact", path: "/contacto" },
  ];

  return (
    <>
      {/* Background Glowing Orbs */}
      <div className="glow-bg">
        <div className="glow-orb-1"></div>
        <div className="glow-orb-2"></div>
      </div>

      {/* Navigation Bar */}
      <nav className="navbar">
        <div className="container navbar-container">
          <Link href="/" className="logo">
            <span className="logo-dot"></span>
            NEO<span style={{ color: "var(--accent-purple)" }}>SEO</span>
          </Link>
          <ul className="nav-links">
            {navItems.map((item) => {
              const isActive = router.pathname === item.path;
              return (
                <li key={item.path} className={`nav-item ${isActive ? "active" : ""}`}>
                  <Link href={item.path}>
                    {item.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>

      {/* Main Page Content */}
      <main className="container" style={{ flex: 1, paddingBottom: "4rem" }}>
        {children}
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="container footer-content">
          <div className="footer-socials">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </div>
          <p style={{ fontSize: "0.85rem", margin: 0 }}>
            © {new Date().getFullYear()} NeoSEO. Designed for ultimate performance and SEO optimization.
          </p>
        </div>
      </footer>
    </>
  );
}
