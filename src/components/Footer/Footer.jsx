import Image from "next/image";

export default function Footer({ onShowUnderConstruction }) {
  const underConstructionHandler = (e) => {
    e.preventDefault();
    onShowUnderConstruction();
  };

  const linkClass =
    "text-gray-600 text-sm hover:bg-[#cceaea] rounded-full px-2 py-1 transition";

  return (
    <footer className="w-full bg-[url('/assets/images/BACKGROUND_WEBSITE_POLY.png')] bg-cover bg-center text-gray-800 px-6 py-12 border-t border-gray-200">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Tagline */}
          <div>
            <a href="/#hero" className="inline-flex items-center">
              <Image
                src="/assets/images/hero-logo.png"
                alt="Backpack Studios logo"
                width={140}
                height={50}
              />
            </a>
            <p className="text-sm mt-2 text-gray-600">
              Supporting children's emotional growth through play and connection.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-gray-700 font-medium mb-2">Quick Links</h3>
            <ul className="space-y-1">
              <li><a href="#mission" className={linkClass}>About</a></li>
              <li><a href="#features" className={linkClass}>Features</a></li>
              <li><a href="#emmo" className={linkClass}>Meet Emmo</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-gray-700 font-medium mb-2">Resources</h3>
            <ul className="space-y-1">
              <li><a href="#" onClick={underConstructionHandler} className={linkClass}>FAQ</a></li>
              <li><a href="#" onClick={underConstructionHandler} className={linkClass}>Press Kit</a></li>
              <li><a href="#" onClick={underConstructionHandler} className={linkClass}>Brand Assets</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-gray-700 font-medium mb-2">Legal</h3>
            <ul className="space-y-1">
              <li><a href="#" onClick={underConstructionHandler} className={linkClass}>Privacy Policy</a></li>
              <li><a href="#" onClick={underConstructionHandler} className={linkClass}>Terms of Service</a></li>
              <li><a href="#" onClick={underConstructionHandler} className={linkClass}>Cookie Policy</a></li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-12 text-center">
          <p className="text-sm text-gray-600">© 2025 Backpack. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
