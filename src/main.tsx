import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ScrollToTop } from './components/ScrollToTop'
import { NavBar } from './components/NavBar'
import { FloatingCTA } from './components/FloatingCTA'
import { SplashScreen } from './components/SplashScreen'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Properties from './pages/Properties'
import Leadership from './pages/Leadership'
import Celebrities from './pages/Celebrities'
import Sponsors from './pages/Sponsors'
import Pipeline from './pages/Pipeline'
import Invest from './pages/Invest'
import SportsCast from './pages/SportsCast'
import Contact from './pages/Contact'
import './index.css'

interface ErrorBoundaryProps {
  children: React.ReactNode;
}
interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
}
class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  state: ErrorBoundaryState = { hasError: false, error: null };
  constructor(props: ErrorBoundaryProps) {
    super(props);
  }
  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error };
  }
  public render() {
    if (this.state.hasError) {
      return <div className="text-white bg-red-900 p-10 fixed inset-0 z-[9999] overflow-auto"><h1>Error</h1><pre>{this.state.error?.toString()}</pre><pre>{this.state.error?.stack}</pre></div>;
    }
    return this.props.children;
  }
}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <SplashScreen />
      <ScrollToTop />
      <NavBar />
      <FloatingCTA />
      <ErrorBoundary>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/properties" element={<Properties />} />
          <Route path="/leadership" element={<Leadership />} />
          <Route path="/celebrities" element={<Celebrities />} />
          <Route path="/sponsors" element={<Sponsors />} />
          <Route path="/pipeline" element={<Pipeline />} />
          <Route path="/invest" element={<Invest />} />
          <Route path="/sportscast" element={<SportsCast />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </ErrorBoundary>
    </BrowserRouter>
  </React.StrictMode>
)
