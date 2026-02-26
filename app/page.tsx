import Link from "next/link";
import { SignedIn, SignedOut } from "@clerk/nextjs";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* NAVIGATION */}
      <nav className="border-b-2 border-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold">Briefed</h1>
            </div>
            <div className="flex items-center gap-4">
              <SignedOut>
                <Link
                  href="/sign-in"
                  className="text-black hover:text-[#8B5CF6] transition-colors font-medium"
                >
                  Sign In
                </Link>
                <Link
                  href="/sign-up"
                  className="bg-[#8B5CF6] hover:bg-[#7C3AED] text-white rounded-xl px-6 py-2 font-medium transition-colors"
                >
                  Get Started
                </Link>
              </SignedOut>
              <SignedIn>
                <Link
                  href="/dashboard"
                  className="bg-[#8B5CF6] hover:bg-[#7C3AED] text-white rounded-xl px-6 py-2 font-medium transition-colors"
                >
                  Dashboard
                </Link>
              </SignedIn>
            </div>
          </div>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-6xl md:text-7xl font-bold mb-6">
            Stop losing briefs
            <br />
            in your DMs
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Turn chaotic client messages into structured, actionable project
            briefs. No more screenshots, voice notes, and scattered emails.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/sign-up"
              className="bg-[#8B5CF6] hover:bg-[#7C3AED] text-white rounded-xl px-8 py-4 text-lg font-medium transition-colors"
            >
              Create Your First Brief
            </Link>
            <Link
              href="#how-it-works"
              className="bg-white border-2 border-black text-black rounded-xl px-8 py-4 text-lg font-medium hover:bg-gray-50 transition-colors"
            >
              See How It Works
            </Link>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">
            Everything you need for better briefs
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white border-2 border-black rounded-xl p-8">
              <div className="text-4xl mb-4">📝</div>
              <h3 className="text-2xl font-bold mb-4">Guided Forms</h3>
              <p className="text-gray-600">
                Send clients a simple form with all the right questions. No more
                back-and-forth.
              </p>
            </div>

            <div className="bg-white border-2 border-black rounded-xl p-8">
              <div className="text-4xl mb-4">📄</div>
              <h3 className="text-2xl font-bold mb-4">PDF Export</h3>
              <p className="text-gray-600">
                Get a clean, professional PDF brief you can reference throughout
                the project.
              </p>
            </div>

            <div className="bg-white border-2 border-black rounded-xl p-8">
              <div className="text-4xl mb-4">🖼️</div>
              <h3 className="text-2xl font-bold mb-4">Moodboards</h3>
              <p className="text-gray-600">
                Clients upload inspiration images directly. All organized in one
                place.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="how-it-works" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">How it works</h2>

          <div className="space-y-12">
            <div className="flex gap-6 items-start">
              <div className="flex-shrink-0 w-12 h-12 bg-[#8B5CF6] text-white rounded-full flex items-center justify-center text-xl font-bold">
                1
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2">Create a brief</h3>
                <p className="text-gray-600 text-lg">
                  Click "New Brief" and get a shareable link instantly.
                </p>
              </div>
            </div>

            <div className="flex gap-6 items-start">
              <div className="flex-shrink-0 w-12 h-12 bg-[#8B5CF6] text-white rounded-full flex items-center justify-center text-xl font-bold">
                2
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2">Send to client</h3>
                <p className="text-gray-600 text-lg">
                  Share the link via email or message. No account needed for
                  them.
                </p>
              </div>
            </div>

            <div className="flex gap-6 items-start">
              <div className="flex-shrink-0 w-12 h-12 bg-[#8B5CF6] text-white rounded-full flex items-center justify-center text-xl font-bold">
                3
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2">Get organized brief</h3>
                <p className="text-gray-600 text-lg">
                  Receive a structured PDF with all project details, goals,
                  timeline, and moodboard.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PRICING PREVIEW */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4">
            Simple, honest pricing
          </h2>
          <p className="text-center text-gray-600 mb-16 text-lg">
            Start free. Upgrade when you need more.
          </p>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* FREE */}
            <div className="bg-white border-2 border-black rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-2">Free</h3>
              <div className="text-4xl font-bold mb-6">$0</div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-2">
                  <span className="text-[#8B5CF6] mt-1">✓</span>
                  <span>3 briefs per month</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#8B5CF6] mt-1">✓</span>
                  <span>PDF export</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#8B5CF6] mt-1">✓</span>
                  <span>5 images per brief</span>
                </li>
              </ul>
              <Link
                href="/sign-up"
                className="block text-center bg-white border-2 border-black text-black rounded-xl px-6 py-3 font-medium hover:bg-gray-50 transition-colors"
              >
                Get Started
              </Link>
            </div>

            {/* PRO */}
            <div className="bg-[#8B5CF6] text-white border-2 border-black rounded-xl p-8 relative">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-black text-white px-4 py-1 rounded-full text-sm font-medium">
                Popular
              </div>
              <h3 className="text-2xl font-bold mb-2">Pro</h3>
              <div className="text-4xl font-bold mb-6">
                $9<span className="text-lg">/mo</span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-2">
                  <span className="mt-1">✓</span>
                  <span>Unlimited briefs</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1">✓</span>
                  <span>Custom branding</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1">✓</span>
                  <span>20 images per brief</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1">✓</span>
                  <span>Priority support</span>
                </li>
              </ul>
              <button className="block w-full text-center bg-white text-[#8B5CF6] rounded-xl px-6 py-3 font-medium hover:bg-gray-100 transition-colors">
                Coming Soon
              </button>
            </div>

            {/* STUDIO */}
            <div className="bg-white border-2 border-black rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-2">Studio</h3>
              <div className="text-4xl font-bold mb-6">
                $29<span className="text-lg">/mo</span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-2">
                  <span className="text-[#8B5CF6] mt-1">✓</span>
                  <span>Everything in Pro</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#8B5CF6] mt-1">✓</span>
                  <span>Team collaboration</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#8B5CF6] mt-1">✓</span>
                  <span>White-label</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#8B5CF6] mt-1">✓</span>
                  <span>Custom domain</span>
                </li>
              </ul>
              <button className="block w-full text-center bg-white border-2 border-black text-black rounded-xl px-6 py-3 font-medium hover:bg-gray-50 transition-colors">
                Coming Soon
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center bg-[#8B5CF6] text-white border-2 border-black rounded-xl p-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to organize your briefs?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join creative freelancers who've stopped losing project details in
            DMs.
          </p>
          <Link
            href="/sign-up"
            className="inline-block bg-white text-[#8B5CF6] rounded-xl px-8 py-4 text-lg font-medium hover:bg-gray-100 transition-colors"
          >
            Start Free Today
          </Link>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t-2 border-black py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm text-gray-600">
            © 2026 Briefed. All rights reserved.
          </div>
          <div className="flex gap-6 text-sm">
            <a
              href="#"
              className="text-gray-600 hover:text-[#8B5CF6] transition-colors"
            >
              Privacy
            </a>
            <a
              href="#"
              className="text-gray-600 hover:text-[#8B5CF6] transition-colors"
            >
              Terms
            </a>
            <a
              href="#"
              className="text-gray-600 hover:text-[#8B5CF6] transition-colors"
            >
              Contact
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
