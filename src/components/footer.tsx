export default function DemoFooter() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 px-6 md:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* About */}
        <div>
          <h3 className="text-white text-xl font-semibold mb-4">About Me</h3>
          <p className="text-sm">
            Passionate developer building clean & modern web experiences.
            Always learning and creating.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-white text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#projects" className="hover:text-white transition">Projects</a></li>
            <li><a href="#about" className="hover:text-white transition">About</a></li>
            <li><a href="#contact" className="hover:text-white transition">Contact</a></li>
            <li><a href="#blog" className="hover:text-white transition">Blog</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-white text-xl font-semibold mb-4">Contact</h3>
          <p className="text-sm">
            Email: <a href="mailto:email@example.com" className="hover:text-white transition">email@example.com</a><br/>
            Phone: <a href="tel:+1234567890" className="hover:text-white transition">+1 234 567 890</a>
          </p>
        </div>

        {/* Social */}
        <div>
          <h3 className="text-white text-xl font-semibold mb-4">Follow Me</h3>
          <div className="flex space-x-4">
            <a href="https://github.com/yourprofile" target="_blank" rel="noreferrer" aria-label="GitHub" className="hover:text-white transition">
              {/* Replace below with GitHub icon SVG or component */}
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.207 11.387.6.11.793-.26.793-.577 0-.286-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.333-1.754-1.333-1.754-1.09-.745.083-.73.083-.73 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.807 1.305 3.492.997.11-.776.42-1.305.763-1.605-2.66-.3-5.467-1.332-5.467-5.93 0-1.31.47-2.38 1.236-3.22-.125-.302-.536-1.52.118-3.176 0 0 1.01-.322 3.3 1.23a11.49 11.49 0 0 1 3-.405c1.02.005 2.045.138 3 .405 2.28-1.552 3.288-1.23 3.288-1.23.656 1.656.245 2.874.12 3.176.77.84 1.237 1.91 1.237 3.22 0 4.61-2.807 5.624-5.48 5.92.43.37.82 1.096.82 2.21 0 1.598-.015 2.88-.015 3.277 0 .315.195.69.8.572C20.565 21.796 24 17.296 24 12c0-6.63-5.373-12-12-12z" /></svg>
            </a>
            <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="hover:text-white transition">
              {/* LinkedIn SVG */}
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M4.98 3.5a2.49 2.49 0 1 1 0 4.98 2.49 2.49 0 0 1 0-4.98zm.02 4.92H2v12.58h3V8.42zM8 8.42v12.58h3v-7.06c0-2.71 3.22-2.92 3.22 0v7.06h3v-8.76c0-6.19-6.72-5.97-8.22-2.92z"/></svg>
            </a>
            {/* Add more social icons as needed */}
          </div>
        </div>
      </div>

      <div className="mt-12 border-t border-gray-700 pt-6 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} Your Name. All rights reserved.
      </div>
    </footer>
  );
}
