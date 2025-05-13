import { useEffect } from "react";
import "aos/dist/aos.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

const Contact = () => {
  useEffect(() => {
    // Initialize AOS animation library
    import("aos").then((AOS) => {
      AOS.init({
        duration: 800,
        easing: "ease-in-out",
        once: true,
        offset: 120, // Start animation a bit earlier
      });
    });
  }, []);

  return (
    <div className="w-full bg-white">
      <div className="max-w-[1400px] mx-auto px-4 py-12 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_1fr] lg:grid-cols-[55%_45%] gap-8">
          {/* Contact Form Section */}
          <div className="space-y-4">
            <div
              className="mb-8 md:mb-14"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <h1 className="text-3xl md:text-4xl lg:text-6xl text-gray-900 mb-2 font-medium">
                Contact
              </h1>
              <p className="text-base md:text-normal text-gray-600">
                Send a message and our team will get back to you within 24 hours
              </p>
            </div>

            <div data-aos="fade-up" data-aos-delay="150">
              <input
                type="text"
                placeholder="Name"
                className="w-full px-4 py-3 bg-[#F5F5F5] border-none rounded-3xl text-gray-700 placeholder-gray-500 text-base outline-none"
              />
            </div>

            <div data-aos="fade-up" data-aos-delay="200">
              <input
                type="email"
                placeholder="Email"
                className="w-full px-4 py-3 bg-[#F5F5F5] border-none rounded-3xl text-gray-700 placeholder-gray-500 text-base outline-none"
              />
            </div>

            <div data-aos="fade-up" data-aos-delay="250">
              <textarea
                placeholder="Message"
                className="w-full px-4 py-3 bg-[#F5F5F5] border-none rounded-3xl text-gray-700 placeholder-gray-500 text-base outline-none h-32 resize-none"
              ></textarea>
            </div>

            <div data-aos="fade-up" data-aos-delay="300">
              <button
                type="submit"
                className="w-full bg-black text-white px-6 py-3 rounded-2xl text-base font-medium hover:bg-gray-800 transition-colors"
              >
                Send Message
              </button>
            </div>
          </div>

          {/* Details Section */}
          <div
            data-aos="fade-up"
            data-aos-delay="250"
            className="bg-[#F5F5F5] rounded-2xl space-y-8 md:space-y-12 py-6 md:py-8 px-6 md:px-9"
          >
            <div>
              <h2 className="text-sm font-medium text-gray-600 mb-2 border-b border-b-gray-400 pb-2">
                LOCATION
              </h2>
              <p className="text-lg md:text-xl">
                Greenfields, Citytown, <br />
                London, UK, 52050
              </p>
            </div>

            <div data-aos="fade-up" data-aos-delay="400">
              <h2 className="text-sm font-medium text-gray-600 mb-2 border-b border-b-gray-400 pb-2">
                WORKING HOURS
              </h2>
              <p className="text-lg md:text-xl text-gray-700">
                Monday to Friday <br />
                9:00 AM to 6:00 PM <br />
                <span className="text-gray-400 text-base">
                  Our Support Team is available 24hrs
                </span>
              </p>
            </div>

            <div data-aos="fade-up" data-aos-delay="450">
              <h2 className="text-sm font-medium text-gray-600 mb-2 border-b border-b-gray-400 pb-2">
                CONTACT US
              </h2>
              <p className="text-lg md:text-xl text-gray-700">
                <span className="underline">(414) 687-5892</span> <br />
                Contact@techwave.com
              </p>
            </div>

            <div
              className="flex space-x-4"
              data-aos="fade-up"
              data-aos-delay="500"
            >
              <a href="#" className="text-gray-500 hover:text-gray-700 text-xl">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-700 text-xl">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-700 text-xl">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
