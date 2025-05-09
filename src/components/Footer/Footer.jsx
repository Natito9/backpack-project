export default function Footer() {
  return (
   <footer 
  className="w-full bg-cover bg-center text-gray-800 px-6 py-12 border-t border-gray-200"
>
      <div className="max-w-6xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Tagline Column */}
          <div className="flex flex-col space-y-2">
            <div className="flex items-center">
              <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center mr-2">
                <span className="text-purple-600 text-lg font-bold">?</span>
              </div>
              <span className="text-purple-600 text-xl font-semibold">Backpack</span>
            </div>
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
            <a href="#" className="text-gray-600 text-sm hover:bg-[#cceaea] rounded-full px-2 py-1">FAQ</a>
            <a href="#" className="text-gray-600 text-sm hover:bg-[#cceaea] rounded-full px-2 py-1">Press Kit</a>
            <a href="#" className="text-gray-600 text-sm hover:bg-[#cceaea] rounded-full px-2 py-1">Brand Assets</a>
          </div>

          {/* Legal Column */}
          <div className="flex flex-col space-y-2">
            <h3 className="text-gray-700 font-medium mb-2">Legal</h3>
            <a href="#" className="text-gray-600 text-sm hover:bg-[#cceaea] rounded-full px-2 py-1" >Privacy Policy</a>
            <a href="#" className="text-gray-600 text-sm hover:bg-[#cceaea] rounded-full px-2 py-1">Terms of Service</a>
            <a href="#" className="text-gray-600 text-sm hover:bg-[#cceaea] rounded-full px-2 py-1">Cookie Policy</a>
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
