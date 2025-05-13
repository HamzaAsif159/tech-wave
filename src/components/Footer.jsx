import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-black text-white px-8 w-full rounded-t-[50px] py-20">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
        <div className="flex gap-10 md:gap-24">
          <div className="flex flex-col">
            <h2 className="text-3xl font-bold mb-4">Tech Wave</h2>
            <p className="text-gray-400 text-sm">
              Selling premium products, designed to elevate your everyday
              experience
            </p>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-3">MENU</h3>
            <ul className="space-y-2">
              {[
                { name: "Home", path: "/" },
                { name: "Store", path: "/store" },
                { name: "About", path: "/about" },
                { name: "Articles", path: "/articles" },
              ].map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div>
          <h3 className="text-lg font-bold mb-3">UTILITY PAGES</h3>
          <ul className="space-y-2">
            {[
              { name: "Shipping", path: "/shipping" },
              { name: "Contact", path: "/contact" },
              { name: "404 Not Found", path: "/404" },
              { name: "Support", path: "/support" },
            ].map((item) => (
              <li key={item.name}>
                <Link
                  to={item.path}
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-bold mb-3">CONTACT US</h3>
          <ul className="space-y-2">
            <li className="text-gray-400">
              <p className="font-medium text-sm">Email</p>
              <p className="text-sm">contact@techwave.com</p>
            </li>
            <li className="text-gray-400 mt-3">
              <p className="font-medium text-sm">Phone</p>
              <p className="text-sm">(414) 687 - 5892</p>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
