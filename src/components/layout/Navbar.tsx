import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Our Services', href: '/services' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Our Projects', href: '/projects' },
    { name: 'Careers', href: '/careers' },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-sm shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/">
              <Image 
                src="/logo.png" // Placeholder: Ensure you add logo.png to your /public folder
                alt="Pyramids Energy Logo" 
                width={150} 
                height={50} 
                className="h-12 w-auto object-contain"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8 items-center">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href}
                className="text-gray-800 hover:text-brand-red font-medium text-sm transition-colors"
              >
                {link.name}
              </Link>
            ))}
            <Link 
              href="/contact"
              className="bg-brand-red hover:bg-red-800 text-white px-6 py-2 rounded-md font-semibold text-sm transition-all shadow-md"
            >
              Contact us
            </Link>
          </div>

          {/* Mobile Menu Button (Implementation left for later) */}
          <div className="md:hidden flex items-center">
            <button className="text-gray-800 hover:text-brand-red">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}