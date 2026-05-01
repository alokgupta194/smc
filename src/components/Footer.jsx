export default function Footer() {
  return (
    <div className="bg-black text-white pt-16 pb-6 px-10">

      {/* TOP GRID */}
      <div className="max-w-[1200px] mx-auto grid grid-cols-2 md:grid-cols-5 gap-10">

        {/* Quick Links */}
        <div>
          <h3 className="text-[#c9a24b] mb-4 text-sm font-semibold">
            Quick Links
          </h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>Who We Are</li>
            <li>What We Treat</li>
            <li>Services</li>
            <li>Contact Us</li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h3 className="text-[#c9a24b] mb-4 text-sm font-semibold">
            Resources
          </h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>FAQs</li>
            <li>Blog</li>
            <li>Fees and Insurance</li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h3 className="text-[#c9a24b] mb-4 text-sm font-semibold">
            Legal
          </h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>Terms</li>
            <li>Privacy</li>
            <li>Return Policy</li>
            <li>Cookie Settings</li>
          </ul>
        </div>

        {/* Business Hours */}
        <div>
          <h3 className="text-[#c9a24b] mb-4 text-sm font-semibold">
            Business Hours
          </h3>
          <p className="text-sm text-gray-300">
            Monday – Thursday
          </p>
          <p className="text-sm text-gray-300 mb-4">
            09:00 am – 4:00 pm
          </p>

          <h4 className="text-[#c9a24b] text-sm mb-1">
            For Careers
          </h4>
          <p className="text-sm text-gray-300">
            Interested in joining the ADA Team?
          </p>
          <p className="text-sm text-gray-300">
            Career@adapsychiatry.com
          </p>
        </div>

        {/* Right Section */}
        <div>
          <h2 className="text-white font-semibold mb-4 tracking-widest">
            ADA PSYCHIATRY
          </h2>

          <h4 className="text-[#c9a24b] text-sm mb-2">
            Locate us
          </h4>

          <p className="text-sm text-gray-300 mb-4">
            1820 E Ray Road, STE 107, Chandler, Arizona 85225 <br />
            Phone: 480-526-9292
          </p>

          <h4 className="text-[#c9a24b] text-sm mb-2">
            Follow us
          </h4>

          {/* Icons */}
          <div className="flex gap-3 text-white text-lg">
            <span>📷</span>
            <span>📘</span>
            <span>🐦</span>
            <span>🎵</span>
            <span>💼</span>
          </div>
        </div>

      </div>

      {/* Divider */}
      <div className="border-t border-gray-800 mt-12 pt-4 text-center text-xs text-gray-400">
        © Ada Psychiatry. All rights reserved.
      </div>

    </div>
  );
}