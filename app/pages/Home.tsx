import { Helmet } from 'react-helmet-async';
import { Hero } from '../components/Hero';
import { Features } from '../components/Features';

export function Home() {
  return (
    <>
      <Helmet>
        <title>Home - Vinxi React SEO App</title>
        <meta name="description" content="Welcome to our modern Vinxi application with React and comprehensive SEO optimization" />
        <meta property="og:title" content="Home - Vinxi React SEO App" />
        <meta property="og:description" content="Welcome to our modern Vinxi application with React and comprehensive SEO optimization" />
        <meta property="og:url" content="/" />
        <link rel="canonical" href="/" />
      </Helmet>
      
      <Hero />
      <Features />
    </>
  );
}