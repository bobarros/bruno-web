const xmlHandler = async (req, res) => {
  const contentRes = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset
    xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
    xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
    xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
    http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
  <url>
    <loc>https://www.mydomain.com/</loc>
    <lastmod>2020-05-08T00:00:59+00:00</lastmod>
    <priority>1.00</priority>
  </url>
</urlset>`;

  res.setHeader('Content-Type', 'text/xml');   
  
  return res.send(contentRes);
};


export default xmlHandler;