import { Hash, Binary, AlertCircle, CheckCircle2, XCircle, TrendingUp } from 'lucide-react';

export function SignedNumberSection() {
  return (
    <section id="signed-numbers" className="mb-20 scroll-mt-20">
      <div className="mb-12">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 bg-purple-500/10 rounded-lg flex items-center justify-center border border-purple-500/20">
            <Hash className="w-6 h-6 text-purple-400" />
          </div>
          <div>
            <h2 className="text-3xl font-mono text-purple-400">Topic 3</h2>
            <p className="text-slate-400 font-mono text-sm">Signed Number Representation</p>
          </div>
        </div>
      </div>

      {/* Introduction */}
      <div className="bg-slate-900/50 rounded-xl p-6 sm:p-8 border border-slate-800 mb-8">
        <h4 className="text-xl font-mono text-cyan-400 mb-4">Number System</h4>
        <p className="text-slate-300 mb-4">A number system is a method of representing numbers using symbols and rules. In computer systems, number systems are essential because computers operate using binary (0 and 1). To represent both positive and negative numbers and real values, different techniques are used.</p>
      </div>

      {/* Signed Number Representation */}
      <div className="bg-slate-900/50 rounded-xl p-6 sm:p-8 border border-slate-800 mb-8">
        <h4 className="text-xl font-mono text-cyan-400 mb-4 flex items-center gap-2">
          <Binary className="w-5 h-5" />
          Signed Number Representation
        </h4>
        
        <p className="text-slate-300 mb-4">Signed number representation allows computers to represent both positive and negative numbers.</p>
        
        <div className="bg-slate-800/30 rounded-lg p-5 border border-slate-700 mb-4">
          <p className="text-slate-300 mb-3">The leftmost bit is called the <strong className="text-green-400">sign bit</strong>.</p>
          <div className="space-y-2 font-mono">
            <div className="flex items-center gap-3">
              <span className="px-3 py-1 bg-green-500/10 text-green-400 rounded border border-green-500/20">0</span>
              <span className="text-slate-300">→ Positive number</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="px-3 py-1 bg-red-500/10 text-red-400 rounded border border-red-500/20">1</span>
              <span className="text-slate-300">→ Negative number</span>
            </div>
          </div>
        </div>

        <p className="text-slate-400 text-sm italic">Different methods are used to represent signed numbers in binary.</p>
      </div>

      {/* Signed Magnitude */}
      <div className="bg-slate-900/50 rounded-xl p-6 sm:p-8 border border-slate-800 mb-8">
        <h4 className="text-xl font-mono text-cyan-400 mb-4">Signed Magnitude</h4>
        <p className="text-slate-300 mb-6">Signed magnitude is the simplest method of representing signed numbers.</p>

        {/* How it works */}
        <div className="mb-6">
          <h5 className="text-lg font-mono text-green-400 mb-3">How it works</h5>
          <ul className="space-y-2 text-slate-300">
            <li className="flex gap-3">
              <span className="text-green-400">•</span>
              <span>The most significant bit (MSB) is the sign bit.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-green-400">•</span>
              <span>The remaining bits represent the magnitude (absolute value).</span>
            </li>
          </ul>
        </div>

        {/* Example */}
        <div className="mb-6 bg-slate-950 rounded-lg p-5 border border-slate-700">
          <h5 className="text-sm font-mono text-slate-400 mb-3">Example (8-bit)</h5>
          <div className="space-y-2 font-mono">
            <div className="flex items-center gap-3">
              <span className="text-slate-400">+5 →</span>
              <code className="text-green-400">00000101</code>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-slate-400">-5 →</span>
              <code className="text-red-400">10000101</code>
            </div>
          </div>
        </div>

        {/* Advantages & Limitations */}
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-green-500/5 rounded-lg p-4 border border-green-500/20">
            <h6 className="text-green-400 font-mono text-sm mb-3 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4" />
              Advantages
            </h6>
            <ul className="space-y-2 text-slate-300 text-sm">
              <li className="flex gap-2">
                <span className="text-green-400">•</span>
                <span>Simple and easy to understand</span>
              </li>
              <li className="flex gap-2">
                <span className="text-green-400">•</span>
                <span>Direct representation of magnitude</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-red-500/5 rounded-lg p-4 border border-red-500/20">
            <h6 className="text-red-400 font-mono text-sm mb-3 flex items-center gap-2">
              <XCircle className="w-4 h-4" />
              Limitations
            </h6>
            <ul className="space-y-2 text-slate-300 text-sm">
              <li className="flex gap-2">
                <span className="text-red-400">•</span>
                <span>Two representations of zero (+0 and -0)</span>
              </li>
              <li className="flex gap-2">
                <span className="text-red-400">•</span>
                <span>Arithmetic operations are complex</span>
              </li>
              <li className="flex gap-2">
                <span className="text-red-400">•</span>
                <span>Rarely used in modern systems</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* 1's Complement */}
      <div className="bg-slate-900/50 rounded-xl p-6 sm:p-8 border border-slate-800 mb-8">
        <h4 className="text-xl font-mono text-cyan-400 mb-4">1's Complement</h4>
        <p className="text-slate-300 mb-6">1's complement represents negative numbers by inverting all bits of the positive number.</p>

        {/* How it works */}
        <div className="mb-6">
          <h5 className="text-lg font-mono text-green-400 mb-3">How it works</h5>
          <ol className="space-y-2 text-slate-300 list-decimal list-inside">
            <li>Write the binary form of the number</li>
            <li>Flip all bits (0 → 1, 1 → 0)</li>
          </ol>
        </div>

        {/* Example */}
        <div className="mb-6 bg-slate-950 rounded-lg p-5 border border-slate-700">
          <h5 className="text-sm font-mono text-slate-400 mb-3">Example (8-bit)</h5>
          <div className="space-y-2 font-mono">
            <div className="flex items-center gap-3">
              <span className="text-slate-400">+5 →</span>
              <code className="text-green-400">00000101</code>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-slate-400">-5 →</span>
              <code className="text-red-400">11111010</code>
            </div>
          </div>
        </div>

        {/* Advantages & Limitations */}
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-green-500/5 rounded-lg p-4 border border-green-500/20">
            <h6 className="text-green-400 font-mono text-sm mb-3 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4" />
              Advantages
            </h6>
            <ul className="space-y-2 text-slate-300 text-sm">
              <li className="flex gap-2">
                <span className="text-green-400">•</span>
                <span>Easier subtraction than signed magnitude</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-red-500/5 rounded-lg p-4 border border-red-500/20">
            <h6 className="text-red-400 font-mono text-sm mb-3 flex items-center gap-2">
              <XCircle className="w-4 h-4" />
              Limitations
            </h6>
            <ul className="space-y-2 text-slate-300 text-sm">
              <li className="flex gap-2">
                <span className="text-red-400">•</span>
                <span>Two representations of zero</span>
              </li>
              <li className="flex gap-2">
                <span className="text-red-400">•</span>
                <span>Requires end-around carry during addition</span>
              </li>
              <li className="flex gap-2">
                <span className="text-red-400">•</span>
                <span>Mostly obsolete today</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* 2's Complement */}
      <div className="bg-gradient-to-r from-green-500/10 to-cyan-500/10 rounded-xl p-6 sm:p-8 border border-green-500/20 mb-8">
        <h4 className="text-xl font-mono text-cyan-400 mb-2 flex items-center gap-2">
          <TrendingUp className="w-5 h-5 text-green-400" />
          2's Complement
        </h4>
        <p className="text-green-400 text-sm mb-4 font-mono">Most widely used in modern computers ✓</p>

        {/* How it works */}
        <div className="mb-6">
          <h5 className="text-lg font-mono text-green-400 mb-3">How it works</h5>
          <ol className="space-y-2 text-slate-300 list-decimal list-inside">
            <li>Take the 1's complement</li>
            <li>Add 1 to the result</li>
          </ol>
        </div>

        {/* Example */}
        <div className="mb-6 bg-slate-950 rounded-lg p-5 border border-slate-700">
          <h5 className="text-sm font-mono text-slate-400 mb-3">Example (8-bit)</h5>
          <div className="space-y-2 font-mono text-sm">
            <div className="flex items-center gap-3">
              <span className="text-slate-400 w-32">+5 →</span>
              <code className="text-green-400">00000101</code>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-slate-400 w-32">1's complement →</span>
              <code className="text-yellow-400">11111010</code>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-slate-400 w-32">2's complement →</span>
              <code className="text-red-400">11111011</code>
            </div>
          </div>
        </div>

        {/* Advantages */}
        <div className="bg-green-500/10 rounded-lg p-5 border border-green-500/30 mb-4">
          <h6 className="text-green-400 font-mono text-sm mb-3 flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4" />
            Advantages
          </h6>
          <ul className="space-y-2 text-slate-300 text-sm">
            <li className="flex gap-2">
              <span className="text-green-400">✓</span>
              <span>Only one zero</span>
            </li>
            <li className="flex gap-2">
              <span className="text-green-400">✓</span>
              <span>Guarantees correct addition and subtraction</span>
            </li>
            <li className="flex gap-2">
              <span className="text-green-400">✓</span>
              <span>Simplifies hardware design</span>
            </li>
            <li className="flex gap-2">
              <span className="text-green-400">✓</span>
              <span>Used in modern CPUs</span>
            </li>
          </ul>
        </div>

        {/* Range */}
        <div className="bg-slate-950 rounded-lg p-4 border border-slate-700">
          <h6 className="text-cyan-400 font-mono text-sm mb-2">Range (n-bit)</h6>
          <code className="text-green-400">−2ⁿ⁻¹ to +2ⁿ⁻¹−1</code>
        </div>
      </div>

      {/* Floating-Point Numbers */}
      <div className="bg-slate-900/50 rounded-xl p-6 sm:p-8 border border-slate-800 mb-8">
        <h4 className="text-xl font-mono text-cyan-400 mb-4">Floating-Point Numbers</h4>
        <p className="text-slate-300 mb-6">Floating-point numbers represent real numbers (numbers with decimals).</p>

        {/* Components */}
        <div className="mb-6">
          <h5 className="text-lg font-mono text-green-400 mb-3">Components</h5>
          <div className="space-y-3">
            <div className="flex gap-3 items-start">
              <span className="text-cyan-400 font-mono">•</span>
              <div>
                <strong className="text-slate-200">Sign bit</strong>
                <span className="text-slate-400"> – positive or negative</span>
              </div>
            </div>
            <div className="flex gap-3 items-start">
              <span className="text-cyan-400 font-mono">•</span>
              <div>
                <strong className="text-slate-200">Exponent</strong>
                <span className="text-slate-400"> – determines the scale</span>
              </div>
            </div>
            <div className="flex gap-3 items-start">
              <span className="text-cyan-400 font-mono">•</span>
              <div>
                <strong className="text-slate-200">Mantissa (Significand)</strong>
                <span className="text-slate-400"> – precision of the number</span>
              </div>
            </div>
          </div>
        </div>

        {/* Example */}
        <div className="mb-6 bg-slate-950 rounded-lg p-5 border border-slate-700">
          <h5 className="text-sm font-mono text-slate-400 mb-3">Example</h5>
          <code className="text-green-400 font-mono">−12.75 = −1.10011 × 2³</code>
        </div>

        {/* Standards */}
        <div className="mb-6 bg-blue-500/5 rounded-lg p-4 border border-blue-500/20">
          <h6 className="text-blue-400 font-mono text-sm mb-2">Standards</h6>
          <p className="text-slate-300 text-sm">IEEE 754 is the most commonly used floating-point standard</p>
        </div>

        {/* Advantages & Limitations */}
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-green-500/5 rounded-lg p-4 border border-green-500/20">
            <h6 className="text-green-400 font-mono text-sm mb-3 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4" />
              Advantages
            </h6>
            <ul className="space-y-2 text-slate-300 text-sm">
              <li className="flex gap-2">
                <span className="text-green-400">•</span>
                <span>Can represent very large and very small numbers</span>
              </li>
              <li className="flex gap-2">
                <span className="text-green-400">•</span>
                <span>Used for scientific and engineering calculations</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-red-500/5 rounded-lg p-4 border border-red-500/20">
            <h6 className="text-red-400 font-mono text-sm mb-3 flex items-center gap-2">
              <XCircle className="w-4 h-4" />
              Limitations
            </h6>
            <ul className="space-y-2 text-slate-300 text-sm">
              <li className="flex gap-2">
                <span className="text-red-400">•</span>
                <span>Rounding errors</span>
              </li>
              <li className="flex gap-2">
                <span className="text-red-400">•</span>
                <span>Precision loss</span>
              </li>
              <li className="flex gap-2">
                <span className="text-red-400">•</span>
                <span>Slower than integer operations</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Applications */}
      <div className="bg-slate-900/50 rounded-xl p-6 sm:p-8 border border-slate-800 mb-8">
        <h4 className="text-xl font-mono text-cyan-400 mb-4">Applications of Number Systems</h4>
        <p className="text-slate-300 mb-4">Number systems are used in various areas of computing:</p>
        
        <div className="grid sm:grid-cols-2 gap-3">
          {[
            { label: 'Binary', desc: 'internal computer operations', color: 'green' },
            { label: 'Decimal', desc: 'human interaction', color: 'blue' },
            { label: 'Octal & Hexadecimal', desc: 'memory addressing and debugging', color: 'yellow' },
            { label: 'Signed numbers', desc: 'financial calculations, counters', color: 'purple' },
            { label: 'Floating-point numbers', desc: 'scientific computing, graphics, AI', color: 'cyan' },
            { label: 'Networking', desc: 'IP addressing and data encoding', color: 'pink' }
          ].map((item) => (
            <div key={item.label} className={`bg-${item.color}-500/5 rounded-lg p-4 border border-${item.color}-500/20`}>
              <h6 className={`text-${item.color}-400 font-mono text-sm mb-1`}>{item.label}</h6>
              <p className="text-slate-300 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Advantages, Limitations, and Common Errors */}
      <div className="bg-slate-900/50 rounded-xl p-6 sm:p-8 border border-slate-800 mb-8">
        <h4 className="text-xl font-mono text-cyan-400 mb-6">Advantages, Limitations, and Common Errors</h4>

        <div className="grid md:grid-cols-3 gap-6">
          {/* Advantages */}
          <div>
            <h5 className="text-lg font-mono text-green-400 mb-3 flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5" />
              Advantages
            </h5>
            <ul className="space-y-2 text-slate-300 text-sm">
              <li className="flex gap-2">
                <span className="text-green-400">•</span>
                <span>Efficient data processing</span>
              </li>
              <li className="flex gap-2">
                <span className="text-green-400">•</span>
                <span>Enables mathematical and logical operations</span>
              </li>
              <li className="flex gap-2">
                <span className="text-green-400">•</span>
                <span>Supports complex computations</span>
              </li>
            </ul>
          </div>

          {/* Limitations */}
          <div>
            <h5 className="text-lg font-mono text-yellow-400 mb-3 flex items-center gap-2">
              <AlertCircle className="w-5 h-5" />
              Limitations
            </h5>
            <ul className="space-y-2 text-slate-300 text-sm">
              <li className="flex gap-2">
                <span className="text-yellow-400">•</span>
                <span>Limited range based on bit size</span>
              </li>
              <li className="flex gap-2">
                <span className="text-yellow-400">•</span>
                <span>Precision errors in floating-point numbers</span>
              </li>
              <li className="flex gap-2">
                <span className="text-yellow-400">•</span>
                <span>Overflow and underflow issues</span>
              </li>
            </ul>
          </div>

          {/* Common Errors */}
          <div>
            <h5 className="text-lg font-mono text-red-400 mb-3 flex items-center gap-2">
              <XCircle className="w-5 h-5" />
              Common Errors
            </h5>
            <ul className="space-y-2 text-slate-300 text-sm">
              <li className="flex gap-2">
                <span className="text-red-400">•</span>
                <span>Overflow in signed arithmetic</span>
              </li>
              <li className="flex gap-2">
                <span className="text-red-400">•</span>
                <span>Incorrect sign bit interpretation</span>
              </li>
              <li className="flex gap-2">
                <span className="text-red-400">•</span>
                <span>Floating-point rounding errors</span>
              </li>
              <li className="flex gap-2">
                <span className="text-red-400">•</span>
                <span>Misunderstanding number ranges</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Conclusion */}
      <div className="bg-gradient-to-r from-purple-500/10 to-cyan-500/10 rounded-xl p-6 sm:p-8 border border-purple-500/20">
        <h4 className="text-xl font-mono text-purple-400 mb-4">Conclusion</h4>
        <div className="space-y-3 text-slate-300">
          <p>Number systems are the foundation of all computer operations. Understanding signed number representations and floating-point numbers is essential for programming, system design, and data processing.</p>
          <p>Among signed representations, <strong className="text-green-400">2's complement</strong> is the most efficient and widely used.</p>
          <p>Floating-point numbers enable the representation of real-world values, making modern computing possible despite their precision limitations.</p>
        </div>
      </div>
    </section>
  );
}
