import Image from "next/image";

export default function Footer({ onShowUnderConstruction }) {
  const underConstructionHandler = (e) => {
    e.preventDefault();
    onShowUnderConstruction();
  };

  const linkClass =
    "text-gray-600 hover:bg-[#cceaea] rounded-full px-0 py-1 transition";

  const textStyle = {
    fontSize: "var(--navbar-font-size)",
    lineHeight: "var(--navbar-line-height)",
  };

  return (
    <footer className="w-full bg-[url('/assets/images/BACKGROUND_WEBSITE_POLY.png')] bg-cover bg-center text-gray-800 px-6 py-12 border-t border-gray-200">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-18">
          {/* Logo and Tagline */}
          <div>
            <a href="/#hero" className="inline-flex items-center">
              <Image
                src="/assets/images/hero-logo.png"
                alt="Backpack Studios logo"
                width={180}
                height={50}
                style={{ height: "auto" }}
              />
            </a>
            <p className="mt-2 text-gray-600" style={textStyle}>
              Supporting children's emotional growth through play and connection.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-gray-700 font-medium mb-2" style={textStyle}>
              Quick Links
            </h3>
            <ul className="space-y-1">
              <li>
                <a href="#mission" className={linkClass} style={textStyle}>
                  About
                </a>
              </li>
              <li>
                <a href="#features" className={linkClass} style={textStyle}>
                  Features
                </a>
              </li>
              <li>
                <a href="#emmo" className={linkClass} style={textStyle}>
                  Meet Emmo
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-gray-700 font-medium mb-2" style={textStyle}>
              Resources
            </h3>
            <ul className="space-y-1">
              <li>
                <a href="#" onClick={underConstructionHandler} className={linkClass} style={textStyle}>
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" onClick={underConstructionHandler} className={linkClass} style={textStyle}>
                  Press Kit
                </a>
              </li>
              <li>
                <a href="#" onClick={underConstructionHandler} className={linkClass} style={textStyle}>
                  Brand Assets
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-gray-700 font-medium mb-2" style={textStyle}>
              Legal
            </h3>
            <ul className="space-y-1">
              <li>
                <a href="#" onClick={underConstructionHandler} className={linkClass} style={textStyle}>
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" onClick={underConstructionHandler} className={linkClass} style={textStyle}>
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" onClick={underConstructionHandler} className={linkClass} style={textStyle}>
                  Cookie Policy
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-12 text-center">
          <p className="text-gray-600" style={textStyle}>
            © 2025 Backpack. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
