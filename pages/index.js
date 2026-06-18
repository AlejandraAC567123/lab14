import Head from "next/head";
import Link from "next/link";
import dynamic from "next/dynamic";

const DynamicComponent = dynamic(() => import("../components/LargeComponent"), { ssr: false });

export default function Home() {
  return (
    <>
      <Head>
        <title>NeoSEO - Modern SEO & Performance Optimization</title>
        <meta name="description" content="Boost your website's visibility and user experience with NeoSEO. Modern solutions with purple/cyan dark interfaces, Pages Router optimization, and fast loading." />
        <meta name="keywords" content="SEO, Next.js, Pages Router, Core Web Vitals, Web Development, Modern Dark Theme" />
        <meta name="google-site-verification" content="Tvqsd_Qf0-Ed46aRDw4AVYwf16rMf-TeTHhuj-JG14c" />
        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="NeoSEO - Modern SEO & Performance Optimization" />
        <meta property="og:description" content="Discover speed, performance, and top-tier SEO optimizations wrapped in an aesthetic dark-neon layout." />
        <meta property="og:image" content="/og-image.png" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://mi-sitio.com/" />
      </Head>

      {/* Hero Section */}
      <section style={{ padding: "6rem 0 4rem 0", textAlign: "center", maxWidth: "900px", margin: "0 auto" }}>
        <h1 style={{ marginBottom: "1.5rem" }}>
          Next-Generation SEO & <br />
          <span className="gradient-text">Performance Orchestration</span>
        </h1>
        <p style={{ fontSize: "1.25rem", marginBottom: "2.5rem", maxWidth: "700px", margin: "0 auto 2.5rem auto" }}>
          Supercharge your visibility. We build lightning-fast web applications designed to dominate search engine result pages while providing a premium user experience.
        </p>
        <div style={{ display: "flex", gap: "1.25rem", justifyContent: "center", flexWrap: "wrap" }}>
          <Link href="/contacto" className="btn btn-primary">
            Get Started
          </Link>
          <Link href="/blog" className="btn btn-outline">
            Read Insights
          </Link>
        </div>
      </section>

      {/* Highlights / Features Grid */}
      <section style={{ margin: "4rem 0" }}>
        <div style={{ textAlign: "center", marginBottom: "3rem" }}>
          <h2 style={{ marginBottom: "0.75rem" }}>Why Choose NeoSEO?</h2>
          <p style={{ maxWidth: "600px", margin: "0 auto" }}>
            Engineered from the ground up for search engine crawlers and human visitors alike.
          </p>
        </div>

        <div className="card-grid">
          <div className="card">
            <div className="card-icon">🎯</div>
            <h3>Dynamic Metadata</h3>
            <p>
              Automated and unique page headers, descriptive tags, and rich Open Graph assets tailored for high-quality preview sharing on social platforms.
            </p>
          </div>

          <div className="card">
            <div className="card-icon">⚡</div>
            <h3>Core Web Vitals</h3>
            <p>
              Optimized for Speed Index, LCP, and FID. By implementing lazy loading and code splitting, we guarantee high performance audit scores.
            </p>
          </div>

          <div className="card">
            <div className="card-icon">🗺️</div>
            <h3>Dynamic Sitemaps</h3>
            <p>
              Always-in-sync XML sitemap listing active routes dynamically. Configured alongside a crawlers-friendly robots.txt file.
            </p>
          </div>
        </div>
      </section>

      {/* Lazy Loaded Component Demonstration */}
      <DynamicComponent />
    </>
  );
}
