import logo from '../../assets/images/logo.svg';

export default function Footer() {
  return (
    <footer className="bg-emerald-950 text-white pt-16 pb-10 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-10">
        <div>
            <img src={logo} alt="Mind & Wholeness Logo" className="h-28 w-28" />
          <h2 className="text-xl font-semibold mb-4">Mind & Wholeness</h2>
          <p className="text-sm text-gray-300">
            Empowering individuals through spiritual insight, restored identity,
            and a journey of transformation for mind, body, and spirit.
          </p>
        </div>

        <div>
          <h3 className="text-sm uppercase font-bold text-gray-200 mb-4">Explore</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><a href="#about" className="hover:underline">About</a></li>
            <li><a href="#mission" className="hover:underline">Mission</a></li>
            <li><a href="#programs" className="hover:underline">Programs</a></li>
            <li><a href="#team" className="hover:underline">Team</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm uppercase font-bold text-gray-200 mb-4">Resources</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><a href="#articles" className="hover:underline">Articles</a></li>
            <li><a href="#events" className="hover:underline">Events</a></li>
            <li><a href="#support" className="hover:underline">Support</a></li>
            <li><a href="#contact" className="hover:underline">Contact</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm uppercase font-bold text-gray-200 mb-4">Stay Connected</h3>
          <form className="flex flex-col gap-3">
            <input
              type="email"
              placeholder="Your email"
              className="px-4 py-2 rounded bg-white text-gray-800 placeholder-gray-500 text-sm"
            />
            <button
              type="submit"
              className="bg-emerald-600 hover:bg-emerald-500 text-white px-4 py-2 text-sm font-semibold rounded"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      <div className="mt-12 text-center text-xs text-gray-400">
        &copy; {new Date().getFullYear()} Mind & Wholeness. All rights reserved.
      </div>
    </footer>
  );
}
