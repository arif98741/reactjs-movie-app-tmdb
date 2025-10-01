import React from 'react';

const Footer = () => {
  return (
    <footer className="py-10 mx-6 mt-10 text-white bg-neutral-900 md:px-16">
      <div className="grid items-start grid-cols-1 gap-10 mx-auto max-w-7xl md:grid-cols-3">
        {/* Logo + About */}
        <div>
          <h2 className="mb-2 text-2xl font-bold">YourCompany</h2>
          <p className="text-sm text-neutral-400">
            Building better web experiences with modern tech. 
            Powered by React & Tailwind CSS.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h3 className="mb-3 text-lg font-semibold">Quick Links</h3>
          <ul className="space-y-2 text-sm text-neutral-300">
            <li><a href="/about" className="transition hover:text-white">About Us</a></li>
            <li><a href="/services" className="transition hover:text-white">Services</a></li>
            <li><a href="/blog" className="transition hover:text-white">Blog</a></li>
            <li><a href="/contact" className="transition hover:text-white">Contact</a></li>
          </ul>
        </div>

        {/* Social + Newsletter */}
        <div>
          <h3 className="mb-3 text-lg font-semibold">Stay Connected</h3>
          <div className="flex gap-4 mb-4">
            {/* Placeholder icons — replace with real icons or components */}
            <a href="#" className="transition hover:text-blue-400">🌐</a>
            <a href="#" className="transition hover:text-blue-500">🐦</a>
            <a href="#" className="transition hover:text-pink-500">📷</a>
          </div>
          <form className="flex flex-col gap-2">
            <input 
              type="email" 
              placeholder="Your email" 
              className="px-3 py-2 text-white rounded bg-neutral-800 placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button 
              type="submit" 
              className="px-4 py-2 text-white transition bg-blue-600 rounded hover:bg-blue-700">
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="pt-6 mt-10 text-sm text-center border-t border-neutral-800 text-neutral-500">
        © {new Date().getFullYear()} YourCompany. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
