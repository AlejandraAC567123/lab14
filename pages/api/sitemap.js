export default async function handler(req, res) {
  // Dynamically resolve protocol and host, fallback to default domain
  const host = req.headers.host || "mi-sitio.com";
  const protocol = req.headers["x-forwarded-proto"] || (host.includes("localhost") ? "http" : "https");
  const BASE_URL = `${protocol}://${host}`;

  const urls = ["/", "/blog", "/contacto"];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${urls
    .map((url) => `<url><loc>${BASE_URL}${url}</loc></url>`)
    .join("\n  ")}
</urlset>`;

  res.setHeader("Content-Type", "text/xml");
  res.write(sitemap);
  res.end();
}
