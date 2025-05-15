import { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Hero() {
  useEffect(() => {
    AOS.init({ duration: 800, easing: "ease-out", once: true, offset: 100 });
  }, []);

  return (
    <div className="w-full">
      <div className="mx-auto w-full max-w-[1800px] px-4 sm:px-6 lg:px-6">
        <section className="relative min-h-[100vh] flex items-center justify-center overflow-hidden">
          <div className="w-full py-12 sm:py-16 md:my-16 text-center relative z-10">
            <div className="mb-12 sm:mb-16 md:mb-20">
              <h1 className="text-4xl sm:text-5xl md:text-5xl max-w-[570px] mx-auto font-medium mb-4 sm:mb-6 text-black">
                High-quality tech gadgets & accessories
              </h1>
              <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
                Shop our curated selection of premium products, designed to
                elevate your everyday experiences.
              </p>
              <div className="mt-6 sm:mt-8 flex justify-center gap-4">
                <Link
                  to="/store"
                  className="px-6 sm:px-8 py-3 bg-black text-white rounded-full font-medium border border-black hover:bg-white hover:text-black hover:transition-all hover:duration-300"
                >
                  Browse products
                </Link>
                <Link
                  to="/about"
                  className="px-6 sm:px-8 py-3 bg-white text-black rounded-full font-medium border border-gray-300 hover:bg-black hover:text-white hover:border-black hover:transition-all hover:duration-300"
                >
                  About Us
                </Link>
              </div>
            </div>
            <div className="absolute inset-0 pointer-events-none">
              <div
                className="absolute top-[-10%] sm:top-[-15%] md:top-[-20%] lg:top-[-25%] left-[-10%] sm:left-[-5%] md:left-[2%] w-24 xs:w-28 sm:w-32 md:w-40 lg:w-52 xl:w-72 rounded-4xl hidden sm:block"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <img
                  src="https://framerusercontent.com/images/ipQAFdODJXQkLdgjSyyg3Ar2Z8.png"
                  alt="Premium Product"
                  className="w-full h-auto object-contain"
                />
              </div>
              <div
                className="absolute bottom-[-10%] sm:bottom-[-15%] md:bottom-[-20%] lg:bottom-[-25%] left-[-5%] sm:left-[5%] md:left-[15%] w-24 xs:w-28 sm:w-32 md:w-40 lg:w-52 xl:w-72 rounded-4xl hidden sm:block"
                data-aos="fade-up"
                data-aos-delay="250"
              >
                <img
                  src="https://framerusercontent.com/images/QRx6YErQ1J2yxuwITvdE2sIkRww.jpeg"
                  alt="Premium Watch"
                  className="w-full h-auto object-contain"
                />
              </div>
              <div
                className="absolute top-[-20%] sm:top-[-30%] md:top-[-40%] lg:top-[-55%] right-[-10%] sm:right-[-5%] md:right-[5%] w-24 xs:w-28 sm:w-32 md:w-40 lg:w-48 xl:w-60 rounded-4xl hidden sm:block"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <img
                  src="https://framerusercontent.com/images/RgLlMBcXG9Ntcp6y1kLNXUocU5A.png"
                  alt="Premium Product"
                  className="w-full h-auto object-contain"
                />
              </div>
              <div
                className="absolute bottom-[-5%] sm:bottom-[-10%] md:bottom-[-15%] right-[-5%] sm:right-[5%] md:right-[10%] w-24 xs:w-28 sm:w-32 md:w-40 lg:w-48 xl:w-60 rounded-4xl hidden sm:block"
                data-aos="fade-up"
                data-aos-delay="350"
              >
                <img
                  src="https://framerusercontent.com/images/JbPab8SRvUgeBzBdM2PbZkamC0Q.png"
                  alt="Premium Watch"
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>
            <div className="absolute inset-0 bg-gradient-to-b from-gray-100 to-transparent opacity-30 pointer-events-none" />
          </div>
        </section>
      </div>
    </div>
  );
}
