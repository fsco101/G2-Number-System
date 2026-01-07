import { useState } from 'react';
import { Menu, X, Binary, Calculator, Hash } from 'lucide-react';
import { IntroductionSection } from './components/IntroductionSection';
import { SolvingSection } from './components/SolvingSection';
import { SignedNumberSection } from './components/SignedNumberSection';

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setMobileMenuOpen(false);
    }
  };

  const topics = [
    { id: 'introduction', title: 'Number System Introduction', icon: Binary },
    { id: 'solving', title: 'Operations & Solving', icon: Calculator },
    { id: 'signed-numbers', title: 'Signed Numbers', icon: Hash },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-slate-900/95 backdrop-blur-sm border-b border-green-500/20 shadow-lg shadow-green-500/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-green-400 to-cyan-500 rounded-lg flex items-center justify-center">
                <span className="text-slate-950 font-mono text-lg">G2</span>
              </div>
              <h1 className="text-xl font-mono tracking-tight">
                Number<span className="text-green-400">Systems</span>
              </h1>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex gap-1">
              {topics.map((topic) => (
                <button
                  key={topic.id}
                  onClick={() => scrollToSection(topic.id)}
                  className="px-4 py-2 rounded-lg hover:bg-slate-800 transition-colors text-sm font-mono text-slate-300 hover:text-green-400 flex items-center gap-2"
                >
                  <topic.icon className="w-4 h-4" />
                  {topic.title}
                </button>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-slate-800 transition-colors"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <nav className="md:hidden py-4 space-y-2 border-t border-slate-800">
              {topics.map((topic) => (
                <button
                  key={topic.id}
                  onClick={() => scrollToSection(topic.id)}
                  className="w-full px-4 py-3 rounded-lg hover:bg-slate-800 transition-colors text-left font-mono text-slate-300 hover:text-green-400 flex items-center gap-3"
                >
                  <topic.icon className="w-5 h-5" />
                  {topic.title}
                </button>
              ))}
            </nav>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-slate-900 to-slate-950 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <div className="inline-block mb-6 px-4 py-2 bg-green-500/10 border border-green-500/20 rounded-full">
            <span className="text-green-400 font-mono text-sm">Binary • Decimal • Octal • Hexadecimal</span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-mono mb-6">
            Understanding <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-cyan-500">Number Systems</span>
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto mb-8">
            A comprehensive guide to number systems fundamentals, operations, conversions, and signed number representations for computer science.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm font-mono">
            <div className="px-4 py-2 bg-slate-800/50 rounded-lg border border-slate-700">
              Base 2: <span className="text-green-400">1010</span>
            </div>
            <div className="px-4 py-2 bg-slate-800/50 rounded-lg border border-slate-700">
              Base 8: <span className="text-cyan-400">12</span>
            </div>
            <div className="px-4 py-2 bg-slate-800/50 rounded-lg border border-slate-700">
              Base 10: <span className="text-blue-400">10</span>
            </div>
            <div className="px-4 py-2 bg-slate-800/50 rounded-lg border border-slate-700">
              Base 16: <span className="text-purple-400">A</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <IntroductionSection />
        <SolvingSection />
        <SignedNumberSection />
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 border-t border-slate-800 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 text-center">
          <p className="text-slate-400 font-mono text-sm">
            © 2026 Number Systems Guide • Built for IT & Computer Science Students
          </p>
        </div>
      </footer>
    </div>
  );
}
