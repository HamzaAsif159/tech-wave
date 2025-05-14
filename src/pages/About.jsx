import { useEffect } from "react";
import "aos/dist/aos.css";

export default function About() {
  useEffect(() => {
    import("aos").then((AOS) => {
      AOS.init({
        duration: 800,
        easing: "ease-out",
        once: true,
        offset: 100,
      });
    });
  }, []);

  const imageUrls = [
    "https://framerusercontent.com/images/W2faWMpljd3CO8m5hlweLh4YxzM.png",
    "https://framerusercontent.com/images/C394Z8TcjNXMs2JkQX6NkwQciXU.jpg",
    "https://framerusercontent.com/images/LH0Nt1fY9xVjXufSCk4n0fK0Jj4.jpg",
    "https://framerusercontent.com/images/wbydMCOBfZvOGfjlrnzy3ZdbAA.jpg",
    "https://framerusercontent.com/images/jteoBk4u89DkvP5AXGg2diV0.jpg",
    "https://framerusercontent.com/images/gLu6GyOO5f3OonzQAyNagVDyX0.jpg",
    "https://framerusercontent.com/images/GBxQwwXXggPbz9gDZPx5qpFu98.png",
    "https://framerusercontent.com/images/3qxZb5NaIEkaLFkXeb8NL7nxVI.jpg",
    "https://framerusercontent.com/images/uLIObchlbEEFv9OM5b6AYTkKM.png",
    "https://framerusercontent.com/images/GbomN1jUTh471Q0eKbkk2wJxQ.png",
  ];

  const phoneImageUrl =
    "https://framerusercontent.com/images/IfDy6W8JlOPxtH7rfsq9KM9bwU.png";

  return (
    <div className="max-w-[1400px] mx-auto px-2 sm:px-4 py-6 sm:py-10 md:py-16 relative overflow-hidden">
      <div className="text-center mt-12 mb-6 sm:mb-8 md:mb-24">
        <h1
          id="about-heading"
          className="text-3xl md:text-5xl font-medium mb-2 md:mb-4"
          data-aos="fade-down"
        >
          About our products
        </h1>
        <p
          className="text-sm md:text-base text-[#5B5B5B] max-w-[930px] mx-auto leading-relaxed"
          data-aos="fade-down"
          data-aos-delay="100"
        >
          We’re a passionate team dedicated to delivering exceptional products
          and experiences to our valued customers. With a commitment to quality
          and innovation, we handpick each item in our collection to ensure it
          meets our stringent standards.
        </p>
      </div>
      <div className="relative">
        <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-5 gap-1 sm:gap-2 md:gap-4">
          <div
            className="absolute bottom-0 left-0 right-0 h-[419px] bg-gradient-to-t from-white to-transparent opacity-100 z-[-1]"
            style={{ width: "100%", position: "absolute" }}
          />
          {imageUrls.map((url, index) => (
            <div
              key={index}
              className={`relative h-[200px] sm:h-[250px] md:h-[300px] overflow-hidden rounded-[40px] sm:rounded-[60px]
                ${
                  [1, 3, 6, 8].includes(index)
                    ? "md:-translate-y-10"
                    : "md:translate-y-10"
                }
                ${index >= 2 ? "hidden sm:block" : ""}
                ${index >= 5 ? "hidden md:block" : ""}
                w-full max-w-full`}
              data-aos="fade-down"
              data-aos-anchor="#about-heading"
              data-aos-delay={index * 50}
            >
              <img
                src={url}
                alt={`Product ${index + 1}`}
                className="w-full h-full object-contain"
              />
            </div>
          ))}
        </div>
      </div>
      <div className="mt-6 sm:mt-8 md:mt-16">
        <div
          className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-5 gap-1 sm:gap-2 md:gap-6 text-center mb-4 sm:mb-6 md:mb-12"
          data-aos="fade-up"
        >
          <div className="p-2 sm:p-4 bg-white rounded-3xl">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">2010</h2>
            <p className="text-xs sm:text-sm md:text-base text-gray-600">
              Year founded
            </p>
          </div>
          <div className="p-2 sm:p-4 bg-white rounded-3xl">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">+50</h2>
            <p className="text-xs sm:text-sm md:text-base text-gray-600">
              Collections
            </p>
          </div>
          <div className="p-2 sm:p-4 bg-white rounded-3xl">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">70K</h2>
            <p className="text-xs sm:text-sm md:text-base text-gray-600">
              Happy Customers
            </p>
          </div>
          <div className="p-2 sm:p-4 bg-white rounded-3xl">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">+250</h2>
            <p className="text-xs sm:text-sm md:text-base text-gray-600">
              Products
            </p>
          </div>
          <div className="p-2 sm:p-4 bg-white rounded-3xl">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">+25</h2>
            <p className="text-xs sm:text-sm md:text-base text-gray-600">
              Team members
            </p>
          </div>
        </div>
        <div
          className="grid grid-cols-1 md:grid-cols-[55%_45%] gap-2 sm:gap-4 md:gap-0 p-2 sm:p-4 md:p-8 bg-white rounded-3xl"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <div className="flex flex-col justify-center bg-[#F2F2F2] py-4 sm:py-6 md:py-8 px-2 sm:px-4 md:px-6 rounded-t-3xl md:rounded-l-3xl md:rounded-tr-none">
            <h2 className="text-xl sm:text-2xl md:text-[45px] mb-2 sm:mb-4 leading-tight sm:leading-13">
              We are committed to designing high quality, human-centered
              products
            </h2>
            <p className="text-xs sm:text-sm md:text-base text-gray-600 mb-4 sm:mb-6">
              From the initial concept to the final product, we prioritize
              meticulous attention to detail and rigorous testing to ensure the
              utmost satisfaction of our customers.
            </p>
            <button className="w-[180px] sm:w-[200px] py-2 sm:py-3 bg-black text-white rounded-full font-medium hover:bg-gray-800 transition">
              Browse Products
            </button>
          </div>
          <div className="relative overflow-hidden rounded-b-3xl md:rounded-r-3xl md:rounded-bl-none">
            <img
              src={phoneImageUrl}
              alt="Product in hand"
              className="w-full h-[300px] sm:h-[400px] md:h-[500px] object-cover"
            />
          </div>
        </div>
      </div>
      <div className="mt-6 sm:mt-8 md:mt-16 text-center">
        <h2 className="text-2xl sm:text-3xl md:text-5xl font-medium mb-2 sm:mb-4">
          Our Values
        </h2>
        <p className="text-xs sm:text-sm md:text-base text-gray-600 max-w-[1000px] mx-auto mb-4 sm:mb-8">
          We value innovation and continuously seek to push boundaries,
          delivering products that inspire and delight. Join us in embracing
          these values and become part of our mission to make a positive
          difference in the world.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 gap-1 sm:gap-2 md:gap-4">
          <ValueCard
            icon={<i className="fa fa-cut"></i>}
            title="Design"
            description="We believe in the power of thoughtful design, creating products that blend aesthetically and functionally."
          />
          <ValueCard
            icon={<i className="fa fa-award"></i>}
            title="Quality"
            description="Quality is at the forefront of everything we do. From materials selection to manufacturing processes."
          />
          <ValueCard
            icon={<i className="fa fa-lightbulb"></i>}
            title="Innovation"
            description="We foster a culture of innovation, constantly pushing the boundaries of what's possible and embracing new technologies."
          />
          <ValueCard
            icon={<i className="fa fa-leaf"></i>}
            title="Sustainability"
            description="We are committed to sustainability and minimizing our environmental footprints and promoting eco-friendly practices."
          />
          <ValueCard
            icon={<i className="fa fa-users"></i>}
            title="Team Work"
            description="By fostering an environment of trust and open communication, we leverage the diverse skills and perspectives of our team."
          />
          <ValueCard
            icon={<i className="fa fa-heart"></i>}
            title="Passion"
            description="We are deeply passionate about what we do, and that passion fuels our commitment to delivering exceptional products."
          />
        </div>
      </div>
      <div className="mt-6 sm:mt-12 md:mt-24">
        <div
          className="grid grid-cols-1 md:grid-cols-[60%_40%] gap-2 sm:gap-4 md:gap-4 p-2 sm:p-4 md:p-0 bg-white rounded-3xl"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <div className="relative overflow-hidden rounded-[40px] bg-[#F7F7F7]">
            <img
              src="https://framerusercontent.com/images/XzuRx9CML2aDrUn4NeTUFltPRY.jpg"
              alt="Design commitment"
              className="w-full h-[300px] sm:h-[400px] md:h-[700px] object-cover"
            />
          </div>
          <div className="flex flex-col justify-center bg-[#F2F2F2] py-4 sm:py-6 md:py-8 px-2 sm:px-4 md:px-6 rounded-[40px]">
            <h2 className="text-xl sm:text-2xl md:text-[35px] pr-2 sm:pr-4 md:pr-10 mb-2 sm:mb-4 leading-tight sm:leading-13 tracking-tight">
              Care and love for creating high quality design
            </h2>
            <p className="text-xs sm:text-sm md:text-base text-gray-600 mb-4 sm:mb-6">
              We believe that exceptional design goes beyond aesthetics; it
              encompasses functionality, user experience, and attention to
              detail. With meticulous care and commitment to quality, our
              talented designers and engineers bring forth products that are
              both visually stunning and intuitive to use.
            </p>
            <button className="w-[180px] sm:w-[200px] py-2 sm:py-3 bg-black text-white rounded-full font-medium hover:bg-gray-800 transition">
              Browse Products
            </button>
          </div>
        </div>
      </div>
      <div
        className="mt-6 sm:mt-12 md:mt-20 p-2 sm:p-4 md:p-6 min-h-[300px] bg-[#F8F8F8] rounded-3xl flex flex-col items-center justify-center text-center"
        data-aos="fade-up"
      >
        <h2 className="text-xl sm:text-2xl md:text-3xl font-medium mb-2 sm:mb-4">
          Our partners
        </h2>
        <div className="flex flex-wrap justify-center mx-auto gap-2 sm:gap-4 max-w-[600px]">
          <div className="flex items-center gap-2">
            <i className="fas fa-square fa-2x text-gray-400"></i>
            <span className="text-gray-400 text-xl sm:text-2xl font-bold">
              Logo
            </span>
          </div>
          <div className="flex items-center gap-2">
            <i className="fas fa-star fa-2x text-gray-400"></i>
            <span className="text-gray-400 text-xl sm:text-2xl">Logo</span>
          </div>
          <div className="flex items-center gap-2">
            <i className="fas fa-square fa-2x text-gray-400"></i>
            <span className="text-gray-400 text-xl sm:text-2xl font-bold">
              Logo
            </span>
          </div>
          <div className="flex items-center gap-2">
            <i className="fas fa-star fa-2x text-gray-400"></i>
            <span className="text-gray-400 text-xl sm:text-2xl">Logo</span>
          </div>
        </div>
      </div>
      <div className="mt-6 sm:mt-12 md:mt-16 text-center">
        <div
          className="p-2 sm:p-4 md:p-6 bg-white rounded-3xl"
          data-aos="fade-up"
        >
          <h2 className="text-xl sm:text-2xl md:text-3xl font-medium mb-2 sm:mb-4">
            Follow us on Instagram
          </h2>
          <p className="text-xs sm:text-sm md:text-base text-gray-600 mb-4 sm:mb-6">
            @nomad_official
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 gap-1 sm:gap-2 md:gap-4">
            <div className="overflow-hidden rounded-[40px] max-h-[200px] sm:max-h-[300px] group relative">
              <img
                src={imageUrls[0]}
                alt="Instagram post 1"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-opacity duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                <i className="fab fa-instagram text-white text-2xl sm:text-3xl"></i>
              </div>
            </div>
            <div className="overflow-hidden rounded-[40px] max-h-[200px] sm:max-h-[300px] col-span-1 sm:col-span-1 md:col-span-1 w-full group relative">
              <img
                src={imageUrls[1]}
                alt="Instagram post 2"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-opacity duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                <i className="fab fa-instagram text-white text-2xl sm:text-3xl"></i>
              </div>
            </div>
            <div className="overflow-hidden rounded-[40px] max-h-[200px] sm:max-h-[300px] group relative">
              <img
                src={imageUrls[2]}
                alt="Instagram post 3"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-opacity duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                <i className="fab fa-instagram text-white text-2xl sm:text-3xl"></i>
              </div>
            </div>
            <div className="overflow-hidden rounded-[40px] max-h-[200px] sm:max-h-[300px] group relative">
              <img
                src={imageUrls[3]}
                alt="Instagram post 4"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-opacity duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                <i className="fab fa-instagram text-white text-2xl sm:text-3xl"></i>
              </div>
            </div>
            <div className="overflow-hidden rounded-[40px] max-h-[200px] sm:max-h-[300px] col-span-1 sm:col-span-1 md:col-span-1 w-full group relative">
              <img
                src={imageUrls[4]}
                alt="Instagram post 5"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-opacity duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                <i className="fab fa-instagram text-white text-2xl sm:text-3xl"></i>
              </div>
            </div>
            <div className="overflow-hidden rounded-[40px] max-h-[200px] sm:max-h-[300px] group relative">
              <img
                src={imageUrls[5]}
                alt="Instagram post 6"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-opacity duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                <i className="fab fa-instagram text-white text-2xl sm:text-3xl"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const ValueCard = ({ icon, title, description }) => {
  return (
    <div
      className="px-2 sm:px-4 py-4 sm:py-8 bg-[#F8F8F8] rounded-3xl flex flex-col items-center text-center"
      data-aos="fade-up"
      data-aos-delay="100"
    >
      <div className="text-3xl sm:text-4xl mb-2 sm:mb-4">{icon}</div>
      <h3 className="text-xl sm:text-2xl mb-2 sm:mb-4">{title}</h3>
      <p className="text-xs sm:text-sm text-gray-600">{description}</p>
    </div>
  );
};
