const Footer = () => {
  return (
    <footer className="bg-black text-white py-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-4">
        {/* Logo and Description */}
        <div>
          <h2 className="text-xl font-bold">VanityCard</h2>
          <p className="text-sm mt-4">
            VanityCard is a financial technology company and not a bank. The
            VanityCard Visa® Business Credit Card is issued through Cross River
            Bank, Member FDIC and pursuant to a license by Visa USA...
          </p>
        </div>

        {/* About Section */}
        <div>
          <h3 className="font-bold mb-4">About</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:underline">
                Press
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Careers
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Why VanityCard
              </a>
            </li>
          </ul>
        </div>

        {/* Tools Section */}
        <div>
          <h3 className="font-bold mb-4">Tools</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:underline">
                Creator Insights
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Podcast
              </a>
            </li>
          </ul>
        </div>

        {/* Social Section */}
        <div>
          <h3 className="font-bold mb-4">Social</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:underline">
                Youtube
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Instagram
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                TikTok
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Newsletter
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Legal Section */}
      <div className="max-w-7xl mx-auto mt-8 grid grid-cols-1 md:grid-cols-2 text-sm border-t border-gray-700 pt-4 px-4">
        <p className="text-center md:text-left">
          © 2024 VanityCard. All rights reserved.
        </p>
        <div className="flex flex-wrap justify-center md:justify-end space-x-6 mt-4 md:mt-0">
          <a href="#" className="hover:underline">
            Support
          </a>
          <a href="#" className="hover:underline">
            Help Desk
          </a>
          <a href="#" className="hover:underline">
            Terms
          </a>
          <a href="#" className="hover:underline">
            Privacy
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
