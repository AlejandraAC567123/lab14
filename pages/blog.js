// pages/blog.js
import Head from "next/head";

export default function Blog() {
  const posts = [
    {
      id: 1,
      title: "Mastering Core Web Vitals in 2026",
      summary: "Explore the newest metrics introduced by search engines and how to optimize your Next.js application for maximum speed scores.",
      date: "June 15, 2026",
      readTime: "5 min read",
      category: "Performance",
    },
    {
      id: 2,
      title: "The Ultimate Next.js SEO Checklist",
      summary: "From dynamic sitemaps to structured JSON-LD schemas, learn how to configure your Pages Router project for maximum crawlers search visibility.",
      date: "June 10, 2026",
      readTime: "8 min read",
      category: "SEO",
    },
    {
      id: 3,
      title: "Designing for the Dark Web: Neon Aesthetics",
      summary: "How to craft harmonized dark-mode color palettes using CSS variables, custom glow effects, and modern responsive typography systems.",
      date: "May 28, 2026",
      readTime: "6 min read",
      category: "Design",
    },
    {
      id: 4,
      title: "Serverless Dynamic Sitemaps in Next.js",
      summary: "Stop manually writing XML files. Learn how to construct automated dynamic sitemaps using Next.js API routing that respond to search engine crawlers.",
      date: "May 14, 2026",
      readTime: "4 min read",
      category: "Development",
    },
  ];

  return (
    <>
      <Head>
        <title>Insights & Articles - NeoSEO Blog</title>
        <meta name="description" content="Read the latest articles on search engine optimization, Next.js performance tuning, dark theme web design, and advanced developer resources." />
        <meta name="keywords" content="Next.js Blog, SEO Optimization, Core Web Vitals Guide, Dark Mode Design, Web Development" />

        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="Insights & Articles - NeoSEO Blog" />
        <meta property="og:description" content="Level up your tech stack and search engine authority with our deep dives." />
        <meta property="og:image" content="/og-image.png" />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://mi-sitio.com/blog" />
      </Head>

      <header className="page-header">
        <h1>
          Aesthetic <span className="gradient-text">Insights</span>
        </h1>
        <p>
          Deep dives, technical guides, and strategies to help you optimize your web presence and design interfaces that stand out.
        </p>
      </header>

      <section style={{ margin: "2rem 0" }}>
        <div className="card-grid">
          {posts.map((post) => (
            <article key={post.id} className="card" style={{ display: "flex", flexDirection: "column" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1rem" }}>
                <span style={{
                  fontSize: "0.75rem",
                  fontWeight: "700",
                  textTransform: "uppercase",
                  color: "var(--accent-cyan)",
                  border: "1px solid var(--accent-cyan)",
                  padding: "0.25rem 0.6rem",
                  borderRadius: "20px",
                  boxShadow: "0 0 6px var(--accent-cyan-glow)"
                }}>
                  {post.category}
                </span>
                <span style={{ fontSize: "0.8rem", color: "var(--text-muted)" }}>{post.readTime}</span>
              </div>
              <h3 style={{ marginTop: 0, marginBottom: "0.75rem", fontSize: "1.35rem" }}>{post.title}</h3>
              <p style={{ fontSize: "0.95rem", flexGrow: 1, marginBottom: "1.5rem" }}>{post.summary}</p>
              <div style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                paddingTop: "1rem",
                borderTop: "1px solid var(--border-color)"
              }}>
                <span style={{ fontSize: "0.8rem", color: "var(--text-muted)" }}>{post.date}</span>
                <span style={{
                  fontSize: "0.9rem",
                  fontWeight: "600",
                  color: "var(--accent-purple)",
                  cursor: "pointer",
                  transition: "text-shadow var(--transition-speed), color var(--transition-speed)"
                }}
                onMouseEnter={(e) => {
                  e.target.style.color = "var(--accent-cyan)";
                  e.target.style.textShadow = "0 0 8px var(--accent-cyan-glow)";
                }}
                onMouseLeave={(e) => {
                  e.target.style.color = "var(--accent-purple)";
                  e.target.style.textShadow = "none";
                }}>
                  Read Post →
                </span>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
