/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { ChevronRight } from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50 font-sans text-gray-900">
      {/* Header */}
      <header className="relative z-10 w-full bg-white shadow-sm">
        <div className="mx-auto flex max-w-7xl items-center justify-between p-4">
          <div className="text-3xl font-bold text-emerald-700">V-Core</div>
          <nav className="space-x-8">
            <a href="#mission" className="text-lg font-medium text-gray-700 transition-colors hover:text-emerald-700">Mission</a>
            <a href="#pillars" className="text-lg font-medium text-gray-700 transition-colors hover:text-emerald-700">Pillars</a>
            <a href="#accountability" className="text-lg font-medium text-gray-700 transition-colors hover:text-emerald-700">Accountability</a>
            <a href="#sustainability" className="text-lg font-medium text-gray-700 transition-colors hover:text-emerald-700">Sustainability</a>
            <a href="#contact" className="rounded-full bg-emerald-600 px-6 py-2 text-lg font-medium text-white shadow-md transition-all hover:bg-emerald-700 hover:shadow-lg">Contact</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative flex h-[70vh] items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 to-emerald-900 text-white"
      >
        <div className="absolute inset-0 z-0 opacity-20">
          <img
            src="https://picsum.photos/seed/vibrant/1920/1080?blur=4"
            alt="Abstract background with data visualization"
            className="h-full w-full object-cover brightness-75"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="relative z-10 max-w-5xl text-center">
          <h1 className="text-7xl font-extrabold leading-tight tracking-tighter drop-shadow-lg">
            The Verity Core: <span className="text-emerald-300">Unveiling Truth, Empowering Citizens</span>
          </h1>
          <p className="mt-8 text-2xl font-light text-gray-100 drop-shadow-md">
            Dismantling systemic opacity by providing verified data, legal backing, and a platform to challenge institutional overreach.
          </p>
          <div className="mt-12">
            <a
              href="#pillars"
              className="inline-flex items-center rounded-full bg-emerald-500 px-10 py-4 text-xl font-semibold text-white shadow-xl transition-all duration-300 hover:scale-105 hover:bg-emerald-600 hover:shadow-2xl"
            >
              Explore Our Pillars <ChevronRight className="ml-3 h-6 w-6" />
            </a>
          </div>
        </div>
      </motion.section>

      {/* Mission & Vision */}
      <section id="mission" className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <h2 className="text-5xl font-extrabold text-gray-900">Our Mandate</h2>
          <div className="mt-16 grid grid-cols-1 gap-16 md:grid-cols-2">
            <div className="rounded-xl bg-emerald-50 p-10 shadow-lg">
              <h3 className="text-3xl font-bold text-emerald-700">Mission</h3>
              <p className="mt-6 text-xl text-gray-800 leading-relaxed">
                To dismantle systemic opacity by providing citizens with verified data, legal backing, and a platform to challenge institutional overreach.
              </p>
            </div>
            <div className="rounded-xl bg-emerald-50 p-10 shadow-lg">
              <h3 className="text-3xl font-bold text-emerald-700">Vision</h3>
              <p className="mt-6 text-xl text-gray-800 leading-relaxed">
                A society where "Power" is a shared responsibility, and "Truth" is the primary currency of public discourse.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Four Pillars Section */}
      <section id="pillars" className="bg-gray-100 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-center text-5xl font-extrabold text-gray-900">Our Four Pillars</h2>
          <p className="mt-8 text-center text-xl text-gray-700 leading-relaxed">
            V-Core operates like a high-end intelligence agency for the public good, structured around these core departments:
          </p>

          <div className="mt-20 grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
            {/* Pillar I: Forensic Data Lab */}
            <div className="rounded-2xl bg-white p-10 shadow-xl transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
              <h3 className="text-2xl font-bold text-emerald-700">I. The Forensic Data Lab</h3>
              <p className="mt-5 text-gray-700 leading-relaxed">Before speaking, V-Core proves. This department digitizes the "truth."</p>
              <ul className="mt-6 space-y-3 text-gray-600 text-lg">
                <li><strong className="text-gray-800">Transparency Engine:</strong> Digital supply chain for public funds.</li>
                <li><strong className="text-gray-800">Whistleblower Vault:</strong> High-security, encrypted portal.</li>
                <li><strong className="text-gray-800">Satellite & OSINT:</strong> Tracking illegal activities in real-time.</li>
              </ul>
            </div>

            {/* Pillar II: The Legal Citadel */}
            <div className="rounded-2xl bg-white p-10 shadow-xl transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
              <h3 className="text-2xl font-bold text-emerald-700">II. The Legal Citadel</h3>
              <p className="mt-5 text-gray-700 leading-relaxed">Speaking truth is dangerous; this department provides the armor.</p>
              <ul className="mt-6 space-y-3 text-gray-600 text-lg">
                <li><strong className="text-gray-800">Strategic Litigation:</strong> Writs of Mandamus, Judicial Review.</li>
                <li><strong className="text-gray-800">The "Verity Bar":</strong> Pro-bono human rights lawyers.</li>
                <li><strong className="text-gray-800">Legislative Drafting:</strong> Writing "Verity Version" laws.</li>
              </ul>
            </div>

            {/* Pillar III: The Narrative Studio */}
            <div className="rounded-2xl bg-white p-10 shadow-xl transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
              <h3 className="text-2xl font-bold text-emerald-700">III. The Narrative Studio</h3>
              <p className="mt-5 text-gray-700 leading-relaxed">Truth is useless if it’s boring. This department makes the truth viral.</p>
              <ul className="mt-6 space-y-3 text-gray-600 text-lg">
                <li><strong className="text-gray-800">Fact-Check Theater:</strong> 60-second explainers.</li>
                <li><strong className="text-gray-800">Interactive Maps:</strong> Showing "Ghost Projects."</li>
                <li><strong className="text-gray-800">Radical Podcasting:</strong> Live "Truth Sessions."</li>
              </ul>
            </div>

            {/* Pillar IV: The Civic Pulse */}
            <div className="rounded-2xl bg-white p-10 shadow-xl transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
              <h3 className="text-2xl font-bold text-emerald-700">IV. The Civic Pulse</h3>
              <p className="mt-5 text-gray-700 leading-relaxed">Ensuring downward accountability to the people, not just donors.</p>
              <ul className="mt-6 space-y-3 text-gray-600 text-lg">
                <li><strong className="text-gray-800">Mobile Assembly:</strong> Ground-truth reports from rural areas.</li>
                <li><strong className="text-gray-800">Truth Tokens:</strong> Blockchain-based voting system.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Accountability Shield Section */}
      <section id="accountability" className="bg-gray-900 py-24 text-white">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-center text-5xl font-extrabold text-emerald-400">The Accountability Shield</h2>
          <p className="mt-8 text-center text-xl text-gray-300 leading-relaxed">
            To speak truth to power, V-Core must be "fire-proof" and operate with uncompromised integrity.
          </p>
          <div className="mt-20 grid grid-cols-1 gap-12 md:grid-cols-3">
            <div className="rounded-2xl bg-gray-800 p-10 shadow-xl transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
              <h3 className="text-2xl font-bold text-emerald-400">Decentralized Funding</h3>
              <p className="mt-5 text-gray-300 leading-relaxed">
                No single donor can provide more than 5% of the budget, preventing undue influence and ensuring independence.
              </p>
            </div>
            <div className="rounded-2xl bg-gray-800 p-10 shadow-xl transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
              <h3 className="text-2xl font-bold text-emerald-400">Jurisdictional Agility</h3>
              <p className="mt-5 text-gray-300 leading-relaxed">
                Registered in three different countries, ensuring operational continuity and resilience if assets are frozen.
              </p>
            </div>
            <div className="rounded-2xl bg-gray-800 p-10 shadow-xl transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
              <h3 className="text-2xl font-bold text-emerald-400">The "Dead Man's Switch"</h3>
              <p className="mt-5 text-gray-300 leading-relaxed">
                A pre-set digital sequence releases non-sensitive evidence to the global press if leadership is illegally detained.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sustainability & Growth */}
      <section id="sustainability" className="bg-gray-100 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-center text-5xl font-extrabold text-gray-900">Sustainability & Growth</h2>
          <p className="mt-8 text-center text-xl text-gray-700 leading-relaxed">
            V-Core doesn't just beg for grants; it creates value and builds long-term impact.
          </p>
          <div className="mt-20 grid grid-cols-1 gap-12 md:grid-cols-2">
            <div className="rounded-2xl bg-white p-10 shadow-xl transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
              <h3 className="text-2xl font-bold text-emerald-700">Verification Services</h3>
              <p className="mt-5 text-gray-700 leading-relaxed">
                For-profit companies can pay V-Core to audit their own supply chains for ethical compliance, sharing revenue with our advocacy arm.
              </p>
            </div>
            <div className="rounded-2xl bg-white p-10 shadow-xl transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
              <h3 className="text-2xl font-bold text-emerald-700">The Verity Academy</h3>
              <p className="mt-5 text-gray-700 leading-relaxed">
                Training journalists and local activists in forensic data and legal rights through paid courses and scholarships.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-gray-900 py-16 text-white">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <p className="text-lg font-medium">&copy; 2026 The Verity Core (V-Core). All rights reserved.</p>
          <p className="mt-4 text-base text-gray-400 leading-relaxed">
            "The Truth is not a suggestion; it is a foundation. When power ignores the foundation, the structure must be rebuilt."
          </p>
        </div>
      </footer>
    </div>
  );
}

