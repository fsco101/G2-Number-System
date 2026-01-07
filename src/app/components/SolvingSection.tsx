import { Calculator, ArrowRightLeft, Plus, Minus } from 'lucide-react';

export function SolvingSection() {
  return (
    <section id="solving" className="mb-20 scroll-mt-20">
      <div className="mb-12">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 bg-cyan-500/10 rounded-lg flex items-center justify-center border border-cyan-500/20">
            <Calculator className="w-6 h-6 text-cyan-400" />
          </div>
          <div>
            <h2 className="text-3xl font-mono text-cyan-400">Topic 2</h2>
            <p className="text-slate-400 font-mono text-sm">Operations & Solving</p>
          </div>
        </div>
      </div>

      {/* What is a Number System */}
      <div className="bg-slate-900/50 rounded-xl p-6 sm:p-8 border border-slate-800 mb-8">
        <h4 className="text-xl font-mono text-cyan-400 mb-4">What is a Number System?</h4>
        <p className="text-slate-300 mb-6">A number system is a way of representing numbers using a set of digits.</p>
        
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b border-slate-700">
                <th className="px-4 py-3 text-left font-mono text-green-400">Number System</th>
                <th className="px-4 py-3 text-left font-mono text-green-400">Base</th>
                <th className="px-4 py-3 text-left font-mono text-green-400">Digits Used</th>
              </tr>
            </thead>
            <tbody className="font-mono">
              <tr className="border-b border-slate-800 bg-blue-500/5">
                <td className="px-4 py-3 text-slate-300">Decimal</td>
                <td className="px-4 py-3 text-blue-400">10</td>
                <td className="px-4 py-3 text-slate-300">0 – 9</td>
              </tr>
              <tr className="border-b border-slate-800 bg-green-500/5">
                <td className="px-4 py-3 text-slate-300">Binary</td>
                <td className="px-4 py-3 text-green-400">2</td>
                <td className="px-4 py-3 text-slate-300">0, 1</td>
              </tr>
              <tr className="border-b border-slate-800 bg-yellow-500/5">
                <td className="px-4 py-3 text-slate-300">Octal</td>
                <td className="px-4 py-3 text-yellow-400">8</td>
                <td className="px-4 py-3 text-slate-300">0 – 7</td>
              </tr>
              <tr className="bg-purple-500/5">
                <td className="px-4 py-3 text-slate-300">Hexadecimal</td>
                <td className="px-4 py-3 text-purple-400">16</td>
                <td className="px-4 py-3 text-slate-300">0 – 9, A – F</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Octal Number System */}
      <div className="bg-slate-900/50 rounded-xl p-6 sm:p-8 border border-slate-800 mb-8">
        <div className="flex items-center gap-2 mb-4">
          <span className="px-3 py-1 bg-yellow-500/10 text-yellow-400 rounded-md font-mono text-sm border border-yellow-500/20">Base 8</span>
          <h4 className="text-xl font-mono text-cyan-400">Octal Number System</h4>
        </div>
        
        <ul className="space-y-2 text-slate-300 mb-4">
          <li className="flex gap-3">
            <span className="text-yellow-400">•</span>
            <span><strong>Base:</strong> 8</span>
          </li>
          <li className="flex gap-3">
            <span className="text-yellow-400">•</span>
            <span><strong>Digits Used:</strong> 0 to 7</span>
          </li>
          <li className="flex gap-3">
            <span className="text-yellow-400">•</span>
            <span>Each digit represents a power of 8</span>
          </li>
        </ul>

        <div className="bg-slate-800/30 rounded-lg p-5 border border-slate-700">
          <h5 className="text-sm font-mono text-slate-400 mb-3">Uses:</h5>
          <ul className="space-y-2 text-slate-300">
            <li className="flex gap-3">
              <span className="text-yellow-400">→</span>
              <span>Shorter representation of binary numbers</span>
            </li>
            <li className="flex gap-3">
              <span className="text-yellow-400">→</span>
              <span>Used in older computer systems</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Hexadecimal Number System */}
      <div className="bg-slate-900/50 rounded-xl p-6 sm:p-8 border border-slate-800 mb-8">
        <div className="flex items-center gap-2 mb-4">
          <span className="px-3 py-1 bg-purple-500/10 text-purple-400 rounded-md font-mono text-sm border border-purple-500/20">Base 16</span>
          <h4 className="text-xl font-mono text-cyan-400">Hexadecimal Number System</h4>
        </div>
        
        <ul className="space-y-2 text-slate-300 mb-6">
          <li className="flex gap-3">
            <span className="text-purple-400">•</span>
            <span><strong>Base:</strong> 16</span>
          </li>
          <li className="flex gap-3">
            <span className="text-purple-400">•</span>
            <span><strong>Digits:</strong> 0–9 and A–F</span>
          </li>
        </ul>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b border-slate-700">
                <th className="px-4 py-3 text-left font-mono text-purple-400">Hex</th>
                <th className="px-4 py-3 text-left font-mono text-purple-400">Decimal</th>
              </tr>
            </thead>
            <tbody className="font-mono">
              {[
                ['A', '10'],
                ['B', '11'],
                ['C', '12'],
                ['D', '13'],
                ['E', '14'],
                ['F', '15']
              ].map(([hex, dec]) => (
                <tr key={hex} className="border-b border-slate-800 hover:bg-purple-500/5 transition-colors">
                  <td className="px-4 py-3 text-purple-400">{hex}</td>
                  <td className="px-4 py-3 text-slate-300">{dec}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Conversion Between Number Systems */}
      <div className="bg-slate-900/50 rounded-xl p-6 sm:p-8 border border-slate-800 mb-8">
        <h4 className="text-xl font-mono text-cyan-400 mb-6 flex items-center gap-2">
          <ArrowRightLeft className="w-5 h-5" />
          Conversion Between Number Systems
        </h4>

        {/* Decimal ↔ Binary */}
        <div className="mb-6 bg-slate-800/30 rounded-lg p-5 border border-slate-700">
          <h5 className="text-lg font-mono text-green-400 mb-4">Decimal ↔ Binary</h5>
          <div className="space-y-3 text-slate-300">
            <div className="flex gap-3">
              <span className="text-blue-400">→</span>
              <span><strong className="text-slate-200">Decimal → Binary:</strong> repeated division by 2</span>
            </div>
            <div className="flex gap-3">
              <span className="text-green-400">←</span>
              <span><strong className="text-slate-200">Binary → Decimal:</strong> sum of powers of 2</span>
            </div>
          </div>
        </div>

        {/* Binary ↔ Octal & Hexadecimal */}
        <div className="bg-slate-800/30 rounded-lg p-5 border border-slate-700">
          <h5 className="text-lg font-mono text-green-400 mb-4">Binary ↔ Octal & Hexadecimal</h5>
          
          <div className="space-y-4">
            <div className="bg-slate-950 rounded-lg p-4 border border-slate-700">
              <h6 className="text-yellow-400 font-mono text-sm mb-2">Binary to Octal</h6>
              <p className="text-slate-300">Group binary digits into <span className="text-yellow-400 font-mono">3 bits</span></p>
            </div>
            
            <div className="bg-slate-950 rounded-lg p-4 border border-slate-700">
              <h6 className="text-purple-400 font-mono text-sm mb-2">Binary to Hexadecimal</h6>
              <p className="text-slate-300">Group binary digits into <span className="text-purple-400 font-mono">4 bits</span></p>
            </div>
          </div>
        </div>
      </div>

      {/* Binary Operations */}
      <div className="grid md:grid-cols-2 gap-6">
        {/* Binary Addition */}
        <div className="bg-slate-900/50 rounded-xl p-6 border border-slate-800">
          <h4 className="text-xl font-mono text-cyan-400 mb-4 flex items-center gap-2">
            <Plus className="w-5 h-5" />
            Binary Addition Rules
          </h4>
          
          <div className="space-y-3 font-mono">
            <div className="bg-slate-800/50 rounded-lg p-4 border border-slate-700">
              <code className="text-green-400">0 + 0 = 0</code>
            </div>
            <div className="bg-slate-800/50 rounded-lg p-4 border border-slate-700">
              <code className="text-green-400">0 + 1 = 1</code>
            </div>
            <div className="bg-slate-800/50 rounded-lg p-4 border border-slate-700">
              <code className="text-green-400">1 + 1 = 10</code>
              <span className="text-slate-400 text-sm ml-2">(carry 1)</span>
            </div>
          </div>
        </div>

        {/* Binary Subtraction */}
        <div className="bg-slate-900/50 rounded-xl p-6 border border-slate-800">
          <h4 className="text-xl font-mono text-cyan-400 mb-4 flex items-center gap-2">
            <Minus className="w-5 h-5" />
            Binary Subtraction Rules
          </h4>
          
          <div className="space-y-3 font-mono">
            <div className="bg-slate-800/50 rounded-lg p-4 border border-slate-700">
              <code className="text-red-400">1 − 0 = 1</code>
            </div>
            <div className="bg-slate-800/50 rounded-lg p-4 border border-slate-700">
              <code className="text-red-400">1 − 1 = 0</code>
            </div>
            <div className="bg-slate-800/50 rounded-lg p-4 border border-slate-700">
              <code className="text-red-400">0 − 1 = borrow</code>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
