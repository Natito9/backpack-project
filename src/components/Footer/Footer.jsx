import Image from "next/image";

export default function Footer({ onShowUnderConstruction }) {
  return (
    <footer
      className="w-full bg-cover bg-center text-gray-800 px-6 py-12 border-t border-gray-200"
      style={{
        backgroundImage: "url('/assets/images/BACKGROUND_WEBSITE_POLY.png')",
      }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Tagline Column */}
          <div className="flex flex-col space-y-2">
            <a href="/#hero" className="flex items-center">
              <Image
                src="/assets/images/hero-logo.png"
                alt="Backpack Studios logo"
                width={140}
                height={50}
                className="h-auto"
              />
            </a>
            <p className="text-sm mt-2 text-gray-600">
              Supporting children's emotional growth through play and connection.
            </p>
          </div>

          {/* Quick Links Column */}
          <div className="flex flex-col space-y-2">
            <h3 className="text-gray-700 font-medium mb-2">Quick Links</h3>
            <a href="#mission" className="text-gray-600 text-sm hover:bg-[#cceaea] rounded-full px-2 py-1">About</a>
            <a href="#features" className="text-gray-600 text-sm hover:bg-[#cceaea] rounded-full px-2 py-1">Features</a>
            <a href="#emmo" className="text-gray-600 text-sm hover:bg-[#cceaea] rounded-full px-2 py-1">Meet Emmo</a>
          </div>

          {/* Resources Column */}
          <div className="flex flex-col space-y-2">
            <h3 className="text-gray-700 font-medium mb-2">Resources</h3>
            <a href="#" onClick={e => { e.preventDefault(); onShowUnderConstruction(); }} className="text-gray-600 text-sm hover:bg-[#cceaea] rounded-full px-2 py-1">FAQ</a>
            <a href="#" onClick={e => { e.preventDefault(); onShowUnderConstruction(); }} className="text-gray-600 text-sm hover:bg-[#cceaea] rounded-full px-2 py-1">Press Kit</a>
            <a href="#" onClick={e => { e.preventDefault(); onShowUnderConstruction(); }} className="text-gray-600 text-sm hover:bg-[#cceaea] rounded-full px-2 py-1">Brand Assets</a>
          </div>

          {/* Legal Column */}
          <div className="flex flex-col space-y-2">
            <h3 className="text-gray-700 font-medium mb-2">Legal</h3>
            <a href="#" onClick={e => { e.preventDefault(); onShowUnderConstruction(); }} className="text-gray-600 text-sm hover:bg-[#cceaea] rounded-full px-2 py-1">Privacy Policy</a>
            <a href="#" onClick={e => { e.preventDefault(); onShowUnderConstruction(); }} className="text-gray-600 text-sm hover:bg-[#cceaea] rounded-full px-2 py-1">Terms of Service</a>
            <a href="#" onClick={e => { e.preventDefault(); onShowUnderConstruction(); }} className="text-gray-600 text-sm hover:bg-[#cceaea] rounded-full px-2 py-1">Cookie Policy</a>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 text-center">
          <p className="text-sm text-gray-600">© 2025 Backpack. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
