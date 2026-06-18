// pages/contacto.js
import Head from "next/head";
import { useState } from "react";

export default function Contacto() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setError("Please fill out all fields.");
      return;
    }
    setError("");
    setSubmitted(true);
  };

  return (
    <>
      <Head>
        <title>Connect with Us - NeoSEO Contact</title>
        <meta name="description" content="Get in touch with the NeoSEO engineering team. Let's discuss your web project performance, SEO audits, and core web vitals goals." />
        <meta name="keywords" content="Contact Next.js developer, SEO audit request, core web vitals optimization, modern dark web design" />

        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="Connect with Us - NeoSEO Contact" />
        <meta property="og:description" content="Reach out today to discuss optimizations or request a performance audit." />
        <meta property="og:image" content="/og-image.png" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://mi-sitio.com/contacto" />
      </Head>

      <header className="page-header">
        <h1>
          Start a <span className="gradient-text">Conversation</span>
        </h1>
        <p>
          Have a project in mind, or want to audit your current search engine visibility? Get in touch and let&apos;s build something exceptional.
        </p>
      </header>

      <section style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
        gap: "3rem",
        margin: "2rem 0",
        alignItems: "start"
      }}>
        {/* Info Card Block */}
        <div className="card" style={{ height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
          <div>
            <h3 style={{ color: "var(--accent-cyan)", borderBottom: "1px solid var(--border-color)", paddingBottom: "1rem" }}>
              Contact Information
            </h3>
            <p style={{ marginTop: "1.5rem" }}>
              We collaborate with brands worldwide to orchestrate speed and visibility optimizations.
            </p>
            <div style={{ margin: "2rem 0", display: "flex", flexDirection: "column", gap: "1.25rem" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                <span style={{ fontSize: "1.25rem", color: "var(--accent-purple)" }}>✉️</span>
                <span>hello@neoseo.com</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                <span style={{ fontSize: "1.25rem", color: "var(--accent-purple)" }}>📍</span>
                <span>San Francisco, CA & Remote Worldwide</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                <span style={{ fontSize: "1.25rem", color: "var(--accent-purple)" }}>🕒</span>
                <span>Mon - Fri: 9:00 AM - 6:00 PM EST</span>
              </div>
            </div>
          </div>
          <p style={{ fontSize: "0.85rem", fontStyle: "italic", margin: 0 }}>
            🚀 Average response time: Less than 24 hours.
          </p>
        </div>

        {/* Form Form/Success block */}
        <div style={{
          backgroundColor: "var(--bg-card)",
          border: "1px solid var(--border-color)",
          borderRadius: "12px",
          padding: "2.5rem"
        }}>
          {submitted ? (
            <div style={{ textAlign: "center", padding: "2rem 0" }}>
              <div style={{
                width: "70px",
                height: "70px",
                borderRadius: "50%",
                backgroundColor: "rgba(0, 245, 212, 0.1)",
                border: "2px solid var(--accent-cyan)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                margin: "0 auto 1.5rem auto",
                fontSize: "2rem",
                color: "var(--accent-cyan)",
                boxShadow: "0 0 15px var(--accent-cyan-glow)"
              }}>
                ✓
              </div>
              <h3 style={{ color: "var(--accent-cyan)", marginBottom: "0.5rem" }}>Message Transmitted</h3>
              <p style={{ fontSize: "0.95rem" }}>
                Thank you, <strong>{formData.name}</strong>. Your inquiry has been routed successfully. Our team will contact you at <strong>{formData.email}</strong> shortly.
              </p>
              <button
                className="btn btn-outline"
                style={{ marginTop: "1.5rem" }}
                onClick={() => {
                  setFormData({ name: "", email: "", message: "" });
                  setSubmitted(false);
                }}
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
              <div>
                <label htmlFor="name" style={{ display: "block", marginBottom: "0.5rem", fontSize: "0.9rem", fontWeight: "600" }}>
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Jane Doe"
                  style={{
                    width: "100%",
                    padding: "0.8rem 1rem",
                    backgroundColor: "var(--bg-input)",
                    border: "1px solid var(--border-color)",
                    borderRadius: "6px",
                    color: "var(--text-color)",
                    outline: "none",
                    transition: "border-color var(--transition-speed), box-shadow var(--transition-speed)"
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = "var(--accent-cyan)";
                    e.target.style.boxShadow = "0 0 8px var(--accent-cyan-glow)";
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = "var(--border-color)";
                    e.target.style.boxShadow = "none";
                  }}
                />
              </div>

              <div>
                <label htmlFor="email" style={{ display: "block", marginBottom: "0.5rem", fontSize: "0.9rem", fontWeight: "600" }}>
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="jane@example.com"
                  style={{
                    width: "100%",
                    padding: "0.8rem 1rem",
                    backgroundColor: "var(--bg-input)",
                    border: "1px solid var(--border-color)",
                    borderRadius: "6px",
                    color: "var(--text-color)",
                    outline: "none",
                    transition: "border-color var(--transition-speed), box-shadow var(--transition-speed)"
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = "var(--accent-cyan)";
                    e.target.style.boxShadow = "0 0 8px var(--accent-cyan-glow)";
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = "var(--border-color)";
                    e.target.style.boxShadow = "none";
                  }}
                />
              </div>

              <div>
                <label htmlFor="message" style={{ display: "block", marginBottom: "0.5rem", fontSize: "0.9rem", fontWeight: "600" }}>
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Describe your project goals or performance issues..."
                  rows="5"
                  style={{
                    width: "100%",
                    padding: "0.8rem 1rem",
                    backgroundColor: "var(--bg-input)",
                    border: "1px solid var(--border-color)",
                    borderRadius: "6px",
                    color: "var(--text-color)",
                    outline: "none",
                    resize: "vertical",
                    fontFamily: "inherit",
                    transition: "border-color var(--transition-speed), box-shadow var(--transition-speed)"
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = "var(--accent-cyan)";
                    e.target.style.boxShadow = "0 0 8px var(--accent-cyan-glow)";
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = "var(--border-color)";
                    e.target.style.boxShadow = "none";
                  }}
                />
              </div>

              {error && (
                <div style={{ color: "#ff4d4d", fontSize: "0.9rem", fontWeight: "500" }}>
                  ⚠️ {error}
                </div>
              )}

              <button type="submit" className="btn btn-primary" style={{ width: "100%", marginTop: "0.5rem" }}>
                Transmit Message
              </button>
            </form>
          )}
        </div>
      </section>
    </>
  );
}
