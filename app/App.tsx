import { HelmetProvider } from 'react-helmet-async';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import './styles/global.css';

export function App() {
  // Simple client-side routing (you could use React Router for more complex scenarios)
  const currentPath = typeof window !== 'undefined' ? window.location.pathname : '/';
  
  const renderPage = () => {
    switch (currentPath) {
      case '/about':
        return <About />;
      case '/contact':
        return <Contact />;
      default:
        return <Home />;
    }
  };

  return (
    <HelmetProvider>
      <Layout>
        {renderPage()}
      </Layout>
    </HelmetProvider>
  );
}