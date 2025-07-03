import { renderToString } from 'react-dom/server';
import { App } from './App';

export default function handler() {
  const appHtml = renderToString(<App />);
  
  return new Response(
    `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Vinxi React SEO App</title>
  <meta name="description" content="A modern Vinxi application with React and SEO optimization">
  <meta name="keywords" content="vinxi, react, seo, vite, full-stack">
  <meta name="author" content="">
  <meta property="og:title" content="Vinxi React SEO App">
  <meta property="og:description" content="A modern Vinxi application with React and SEO optimization">
  <meta property="og:type" content="website">
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="Vinxi React SEO App">
  <meta name="twitter:description" content="A modern Vinxi application with React and SEO optimization">
  <link rel="icon" type="image/svg+xml" href="/favicon.svg">
  <link rel="stylesheet" href="/_build/assets/entry-client.css">
</head>
<body>
  <div id="root">${appHtml}</div>
  <script type="module" src="/_build/assets/entry-client.js"></script>
</body>
</html>`,
    {
      headers: {
        'Content-Type': 'text/html',
      },
    }
  );
}