import { BookOpen, History, ListTree, Calculator as Calc, ArrowRight } from 'lucide-react';

export function IntroductionSection() {
  return (
    <section id="introduction" className="mb-20 scroll-mt-20">
      <div className="mb-12">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 bg-green-500/10 rounded-lg flex items-center justify-center border border-green-500/20">
            <BookOpen className="w-6 h-6 text-green-400" />
          </div>
          <div>
            <h2 className="text-3xl font-mono text-green-400">Topic 1</h2>
            <p className="text-slate-400 font-mono text-sm">Number System Introduction</p>
          </div>
        </div>
        <h3 className="text-2xl text-slate-100 mb-4">Number Systems: Fundamentals, Basics, Operations & Conversions</h3>
      </div>

      {/* Introduction */}
      <div className="bg-slate-900/50 rounded-xl p-6 sm:p-8 border border-slate-800 mb-8">
        <h4 className="text-xl font-mono text-cyan-400 mb-4 flex items-center gap-2">
          <BookOpen className="w-5 h-5" />
          I. Introduction to Number Systems
        </h4>
        <div className="space-y-4 text-slate-300 leading-relaxed">
          <p>A number system is a method of representing numbers using a specific set of symbols and rules. It defines how numbers are written, counted, and calculated.</p>
          <p>Number systems are important because computers and digital devices rely on them to store, process, and communicate data.</p>
        </div>
      </div>

      {/* History */}
      <div className="bg-slate-900/50 rounded-xl p-6 sm:p-8 border border-slate-800 mb-8">
        <h4 className="text-xl font-mono text-cyan-400 mb-4 flex items-center gap-2">
          <History className="w-5 h-5" />
          II. History and Importance of Number Systems
        </h4>
        
        <div className="mb-6">
          <h5 className="text-lg font-mono text-green-400 mb-3">History</h5>
          <ul className="space-y-2 text-slate-300">
            <li className="flex gap-3">
              <span className="text-green-400 mt-1">•</span>
              <span>Early humans used simple counting methods such as tally marks.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-green-400 mt-1">•</span>
              <span>The decimal system developed from human use of ten fingers.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-green-400 mt-1">•</span>
              <span>The binary number system was introduced for computing because electronic circuits operate using two states: ON and OFF.</span>
            </li>
          </ul>
        </div>

        <div>
          <h5 className="text-lg font-mono text-green-400 mb-3">Importance</h5>
          <ul className="space-y-2 text-slate-300">
            <li className="flex gap-3">
              <span className="text-cyan-400 mt-1">→</span>
              <span>Used in computer systems</span>
            </li>
            <li className="flex gap-3">
              <span className="text-cyan-400 mt-1">→</span>
              <span>Used in digital electronics</span>
            </li>
            <li className="flex gap-3">
              <span className="text-cyan-400 mt-1">→</span>
              <span>Used in data processing and programming</span>
            </li>
            <li className="flex gap-3">
              <span className="text-cyan-400 mt-1">→</span>
              <span>Essential for understanding how computers work internally</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Types of Number Systems */}
      <div className="bg-slate-900/50 rounded-xl p-6 sm:p-8 border border-slate-800 mb-8">
        <h4 className="text-xl font-mono text-cyan-400 mb-6 flex items-center gap-2">
          <ListTree className="w-5 h-5" />
          III. Types of Number Systems
        </h4>

        {/* Decimal */}
        <div className="mb-8 bg-slate-800/30 rounded-lg p-6 border border-slate-700">
          <div className="flex items-center gap-2 mb-4">
            <span className="px-3 py-1 bg-blue-500/10 text-blue-400 rounded-md font-mono text-sm border border-blue-500/20">Base 10</span>
            <h5 className="text-lg font-mono text-slate-100">1. Decimal Number System</h5>
          </div>
          <ul className="space-y-2 text-slate-300 mb-4">
            <li className="flex gap-3">
              <span className="text-blue-400">•</span>
              <span>Uses digits <code className="px-2 py-0.5 bg-slate-900 rounded font-mono text-sm text-blue-300">0 to 9</code></span>
            </li>
            <li className="flex gap-3">
              <span className="text-blue-400">•</span>
              <span>Each digit's value depends on its position</span>
            </li>
            <li className="flex gap-3">
              <span className="text-blue-400">•</span>
              <span>Base is 10</span>
            </li>
          </ul>
          <div className="bg-slate-950 rounded-lg p-4 border border-slate-700">
            <p className="text-slate-400 text-sm mb-2">Example:</p>
            <code className="text-green-400 font-mono">452 = (4 × 10²) + (5 × 10¹) + (2 × 10⁰)</code>
          </div>
          <p className="mt-4 text-slate-400 text-sm italic">This is the standard number system used in daily life.</p>
        </div>

        {/* Binary */}
        <div className="bg-slate-800/30 rounded-lg p-6 border border-slate-700">
          <div className="flex items-center gap-2 mb-4">
            <span className="px-3 py-1 bg-green-500/10 text-green-400 rounded-md font-mono text-sm border border-green-500/20">Base 2</span>
            <h5 className="text-lg font-mono text-slate-100">2. Binary Number System</h5>
          </div>
          <ul className="space-y-2 text-slate-300 mb-4">
            <li className="flex gap-3">
              <span className="text-green-400">•</span>
              <span>Uses only <code className="px-2 py-0.5 bg-slate-900 rounded font-mono text-sm text-green-300">0 and 1</code></span>
            </li>
            <li className="flex gap-3">
              <span className="text-green-400">•</span>
              <span>Base is 2</span>
            </li>
            <li className="flex gap-3">
              <span className="text-green-400">•</span>
              <span>Used by computers</span>
            </li>
          </ul>
          <div className="bg-slate-950 rounded-lg p-4 border border-slate-700">
            <p className="text-slate-400 text-sm mb-2">Example:</p>
            <code className="text-green-400 font-mono block">1011₂ = (1 × 2³) + (0 × 2²) + (1 × 2¹) + (1 × 2⁰) = 11₁₀</code>
          </div>
          <p className="mt-4 text-slate-400 text-sm italic">Binary numbers represent the electrical states of computer hardware.</p>
        </div>
      </div>

      {/* Place Value */}
      <div className="bg-slate-900/50 rounded-xl p-6 sm:p-8 border border-slate-800 mb-8">
        <h4 className="text-xl font-mono text-cyan-400 mb-4">IV. Place Value and Positional Notation</h4>
        <p className="text-slate-300 mb-4">In positional notation, the value of a digit depends on:</p>
        <ul className="space-y-2 text-slate-300 mb-6 ml-4">
          <li className="flex gap-3">
            <span className="text-green-400">•</span>
            <span>The digit itself</span>
          </li>
          <li className="flex gap-3">
            <span className="text-green-400">•</span>
            <span>Its position in the number</span>
          </li>
        </ul>

        <div className="bg-slate-950 rounded-lg p-6 border border-slate-700">
          <p className="text-slate-400 mb-4">Example (Decimal): <span className="text-white font-mono text-xl ml-2">345</span></p>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b border-slate-700">
                  <th className="px-4 py-3 text-left font-mono text-green-400">Digit</th>
                  <th className="px-4 py-3 text-left font-mono text-green-400">Position</th>
                  <th className="px-4 py-3 text-left font-mono text-green-400">Value</th>
                </tr>
              </thead>
              <tbody className="font-mono">
                <tr className="border-b border-slate-800">
                  <td className="px-4 py-3 text-cyan-400">3</td>
                  <td className="px-4 py-3 text-slate-300">Hundreds</td>
                  <td className="px-4 py-3 text-slate-300">3 × 100</td>
                </tr>
                <tr className="border-b border-slate-800">
                  <td className="px-4 py-3 text-cyan-400">4</td>
                  <td className="px-4 py-3 text-slate-300">Tens</td>
                  <td className="px-4 py-3 text-slate-300">4 × 10</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-cyan-400">5</td>
                  <td className="px-4 py-3 text-slate-300">Ones</td>
                  <td className="px-4 py-3 text-slate-300">5 × 1</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <p className="mt-4 text-slate-400 text-sm italic">The same rule applies to binary, where each position represents a power of 2.</p>
      </div>

      {/* Operations & Conversions */}
      <div className="bg-slate-900/50 rounded-xl p-6 sm:p-8 border border-slate-800 mb-8">
        <h4 className="text-xl font-mono text-cyan-400 mb-6 flex items-center gap-2">
          <Calc className="w-5 h-5" />
          V. Operations & Conversions
        </h4>

        {/* Decimal to Binary */}
        <div className="mb-8">
          <h5 className="text-lg font-mono text-green-400 mb-4 flex items-center gap-2">
            <ArrowRight className="w-4 h-4" />
            1. Decimal to Binary Conversion
          </h5>
          <div className="bg-slate-800/30 rounded-lg p-5 border border-slate-700">
            <p className="text-slate-300 mb-3 font-mono text-sm">Steps:</p>
            <ol className="space-y-2 text-slate-300 mb-4 list-decimal list-inside">
              <li>Divide the decimal number by 2</li>
              <li>Record the remainder</li>
              <li>Continue until the quotient is 0</li>
              <li>Read remainders from bottom to top</li>
            </ol>
            <div className="bg-slate-950 rounded-lg p-4 border border-slate-700">
              <p className="text-slate-400 text-sm mb-2">Example:</p>
              <code className="text-green-400 font-mono">10₁₀ → 1010₂</code>
            </div>
          </div>
        </div>

        {/* Binary to Decimal */}
        <div>
          <h5 className="text-lg font-mono text-green-400 mb-4 flex items-center gap-2">
            <ArrowRight className="w-4 h-4" />
            2. Binary to Decimal Conversion
          </h5>
          <div className="bg-slate-800/30 rounded-lg p-5 border border-slate-700">
            <p className="text-slate-300 mb-3 font-mono text-sm">Steps:</p>
            <ol className="space-y-2 text-slate-300 mb-4 list-decimal list-inside">
              <li>Multiply each bit by powers of 2</li>
              <li>Add all the values</li>
            </ol>
            <div className="bg-slate-950 rounded-lg p-4 border border-slate-700">
              <p className="text-slate-400 text-sm mb-2">Example:</p>
              <code className="text-green-400 font-mono">1101₂ = (1×2³) + (1×2²) + (0×2¹) + (1×2⁰) = 13₁₀</code>
            </div>
          </div>
        </div>
      </div>

      {/* Conclusion */}
      <div className="bg-gradient-to-r from-green-500/10 to-cyan-500/10 rounded-xl p-6 sm:p-8 border border-green-500/20">
        <h4 className="text-xl font-mono text-green-400 mb-4">VI. Conclusion</h4>
        <div className="space-y-3 text-slate-300">
          <p>Understanding the fundamentals of number systems helps us know how numbers are represented and processed in computers.</p>
          <p>The decimal system is used by humans, while the binary system is used by machines.</p>
          <p>Mastery of these basics is essential for students in information technology and computer-related fields.</p>
        </div>
      </div>
    </section>
  );
}
