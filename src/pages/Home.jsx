import { Link } from "react-router-dom";
import Hero from "../components/Hero";
import ProductCard from "../components/ProductCard";

function CategoryGrid() {
  const categories = [
    {
      title: "Technology",
      description:
        "Explore the Latest Innovations and Unleash the Power of Technology",
      image:
        "https://framerusercontent.com/images/Mndlo4urrrg2VnQrnJThGFVJTmk.jpg",
      bgColor: "bg-[#F8F8F8]",
    },
    {
      title: "Gear",
      description:
        "Explore the Latest Innovation and Unleash the Power of Technology",
      image:
        "https://framerusercontent.com/images/8U8G7eRT2weeIsKXZl841L3ep2M.png",
      bgColor: "bg-[#F8F8F8]",
    },
    {
      title: "Gear",
      description:
        "Explore the Latest Innovation and Unleash the Power of Technology",
      image:
        "https://framerusercontent.com/images/QCHkiG1X3yfh60IHRGr5bkVbE.png",
      bgColor: "bg-[#F8F8F8]",
    },
    {
      title: "Accessory",
      description:
        "Find the Perfect Finishing Touch with Stylish and Functional Accessories",
      image:
        "https://framerusercontent.com/images/9NG4BNfJ8OXIb6NokvZ9KOqS8JA.png",
      bgColor: "bg-[#F8F8F8]",
    },
  ];

  return (
    <div className="container mx-auto px-4 sm:px-6 py-8 md:py-12 lg:py-16">
      {/* First Row Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 mb-4 md:mb-6">
        <div className="sm:col-span-1 h-[300px] md:h-[400px] relative rounded-xl overflow-hidden bg-[#F8F8F8]">
          <div className="absolute inset-0 p-4 md:p-6 lg:p-8 flex flex-col justify-between z-10">
            <div>
              <h3 className="text-xl md:text-2xl lg:text-3xl font-medium mb-2">
                Technology
              </h3>
              <p className="text-sm md:text-base lg:text-lg max-w-md">
                Explore the Latest Innovations and Unleash the Power of
                Technology
              </p>
            </div>
            <Link
              to="/technology"
              className="inline-block mt-2 md:mt-4 text-black font-medium hover:underline text-sm md:text-base"
            >
              Explore category →
            </Link>
          </div>
          <img
            src={categories[0].image}
            alt="Technology"
            className="absolute top-[-50px] md:top-[-100px] lg:top-[-150px] right-0 h-[120%] md:h-[140%] lg:h-[150%] object-center"
          />
        </div>

        <div className="h-[300px] md:h-[400px] relative rounded-xl overflow-hidden bg-[#F8F8F8]">
          <div className="absolute inset-0 p-4 md:p-6 flex flex-col justify-between z-10">
            <div>
              <h3 className="text-lg md:text-xl font-medium mb-2">Gear</h3>
              <p className="text-sm md:text-base max-w-xs">
                Explore the Latest Innovation and Unleash the Power of
                Technology
              </p>
            </div>
            <Link
              to="/gear"
              className="inline-block mt-2 text-black font-medium hover:underline text-sm md:text-base"
            >
              Explore category →
            </Link>
          </div>
          <img
            src={categories[1].image}
            alt="Gear"
            className="absolute top-[-30px] md:top-[-50px] right-[-30px] md:right-[-50px] h-[80%] md:h-[70%] object-center"
          />
        </div>
      </div>

      {/* Second Row Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
        <div className="h-[300px] md:h-[400px] relative rounded-xl overflow-hidden bg-[#F8F8F8]">
          <div className="absolute inset-0 p-4 md:p-6 flex flex-col justify-between z-10">
            <div>
              <h3 className="text-lg md:text-xl font-medium mb-2">Gear</h3>
              <p className="text-sm md:text-base max-w-xs">
                Explore the Latest Innovation and Unleash the Power of
                Technology
              </p>
            </div>
            <Link
              to="/gear"
              className="inline-block mt-2 text-black font-medium hover:underline text-sm md:text-base"
            >
              Explore category →
            </Link>
          </div>
          <img
            src={categories[2].image}
            alt="Gear"
            className="absolute top-[-15px] md:top-[-25px] right-[-10px] h-[60%] md:h-[50%] object-center"
          />
        </div>

        <div className="h-[300px] md:h-[400px] relative rounded-xl overflow-hidden bg-[#F8F8F8]">
          <div className="absolute inset-0 p-4 md:p-6 lg:p-8 flex flex-col justify-between z-10">
            <div>
              <h3 className="text-xl md:text-2xl lg:text-3xl font-medium mb-2">
                Accessory
              </h3>
              <p className="text-sm md:text-base lg:text-lg max-w-md">
                Find the Perfect Finishing Touch with Stylish and Functional
                Accessories
              </p>
            </div>
            <Link
              to="/accessory"
              className="inline-block mt-2 md:mt-4 text-black font-medium hover:underline text-sm md:text-base"
            >
              Explore category →
            </Link>
          </div>
          <img
            src={categories[3].image}
            alt="Accessory"
            className="absolute top-[-50px] md:top-[-80px] lg:top-[-110px] right-0 h-[110%] md:h-[100%] lg:h-[90%] object-center"
          />
        </div>
      </div>
    </div>
  );
}

function SpacialExperience() {
  return (
    <div className="w-full py-12 md:py-16 lg:py-20 px-4 sm:px-6">
      <div className="max-w-[1400px] mx-auto flex flex-col lg:flex-row items-center bg-black text-white rounded-3xl overflow-hidden">
        <div className="w-full lg:w-1/2 p-6 md:p-8 lg:p-12">
          <div className="space-y-4 md:space-y-6">
            <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-medium">
              The new Spacial Experience
            </h2>
            <p className="text-base md:text-lg text-gray-300 max-w-lg">
              Ignite Your Imagination and Redefine Reality through the
              Cutting-Edge Spacial Experience
            </p>
            <Link
              to="/store"
              className="inline-flex items-center gap-2 px-6 py-3 md:px-8 md:py-3 rounded-3xl text-black bg-white font-medium transition-colors duration-300 text-sm md:text-base"
            >
              Browse products
              <span className="text-lg md:text-xl">→</span>
            </Link>
          </div>
        </div>
        <div className="w-full lg:w-1/2 h-[300px] md:h-[400px] lg:h-[500px]">
          <img
            src="https://framerusercontent.com/images/uTVss1gSOJGMtMsRtpaVexosj8Y.jpeg"
            alt="Spacial Experience"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}

function Bestsellers() {
  const products = [
    {
      id: 1,
      name: "Minimal Watch",
      price: 349.99,
      images: ["https://images.unsplash.com/photo-1523275335684-37898b6baf30"],
      category: "gear",
    },
    {
      id: 2,
      name: "Premium Headphones",
      price: 249.99,
      images: ["https://images.unsplash.com/photo-1505740420928-5e560c06d30e"],
      category: "gear",
    },
    {
      id: 3,
      name: "Ultra HD Display",
      price: 799.99,
      images: ["https://images.unsplash.com/photo-1546054454-aa26e2b734c7"],
      category: "technology",
    },
    {
      id: 4,
      name: "Smartphone Pro",
      price: 999.99,
      images: ["https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb"],
      category: "technology",
    },
  ];

  return (
    <div className="w-full py-12 md:py-16 px-4 sm:px-6">
      <div className="max-w-[1400px] mx-auto">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 md:mb-8 gap-4">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium">
            Bestsellers
          </h2>
          <Link
            to="/store"
            className="text-black font-medium hover:underline flex items-center gap-2 text-sm md:text-base"
          >
            Browse all products
            <span className="text-lg md:text-xl">→</span>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="transform transition-transform duration-300 hover:-translate-y-2"
            >
              <ProductCard
                id={product.id}
                name={product.name}
                price={product.price}
                images={product.images}
                category={product.category}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function DesignCommitment() {
  return (
    <div
      className="max-w-[1400px] mx-auto my-6 md:my-12 lg:my-24 px-4 sm:px-6"
      data-aos="fade-up"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4  bg-white rounded-3xl overflow-hidden">
        <div className="relative overflow-hidden bg-[#F7F7F7] h-[300px] md:h-[400px] lg:h-[500px]">
          <img
            src="https://framerusercontent.com/images/rgsyVm6zlWRExHrwX1mKgwNAmE.png"
            alt="Premium Design"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex flex-col justify-center bg-[#F2F2F2] p-6 md:p-8 lg:p-10 -ml-3">
          <h2 className="text-xl md:text-2xl lg:text-3xl xl:text-[35px] mb-3 md:mb-4 leading-tight">
            Premium Design and Quality
          </h2>
          <p className="text-sm md:text-base text-gray-600 mb-4 md:mb-6">
            Born out of a shared love of good design & quality products, we
            create considered solutions fit for the modern lifestyle. Always
            driven by passion, we work to empower others to live the same way.
          </p>
          <Link to="/about">
            <button className="w-full sm:w-[180px] md:w-[200px] py-2 md:py-3 bg-black text-white rounded-full font-medium hover:bg-gray-800 transition text-sm md:text-base">
              Read our story
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

function FeaturedProducts() {
  const products = [
    {
      id: 1,
      name: "Sleek Smartwatch",
      brand: "SEAN",
      price: 199.99,
      description:
        "Elevate your style with our sophisticated Sleek Smartwatch, a perfect blend of elegance and functionality",
      image:
        "https://framerusercontent.com/images/ipQAFdODJXQkLdgjSyyg3Ar2Z8.png",
      category: "technology",
    },
    {
      id: 2,
      name: "Crystal Earbuds",
      brand: "SEAN",
      price: 129.99,
      image:
        "https://framerusercontent.com/images/QRx6YErQ1J2yxuwITvdE2sIkRww.jpeg",
      category: "technology",
    },
    {
      id: 3,
      name: "Sling Bag",
      brand: "GEAR",
      price: 149.99,
      image:
        "https://framerusercontent.com/images/RgLlMBcXG9Ntcp6y1kLNXUocU5A.png",
      category: "gear",
    },
    {
      id: 4,
      name: "eWatch SF 4",
      brand: "GEAR",
      price: 49.99,
      image:
        "https://framerusercontent.com/images/JbPab8SRvUgeBzBdM2PbZkamC0Q.png",
      category: "gear",
    },
  ];

  return (
    <div className="w-full bg-white py-12 px-4 sm:px-6" data-aos="fade-up">
      <div className="max-w-[1400px] mx-auto">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 md:mb-8 gap-4">
          <h2 className="text-2xl md:text-3xl font-medium">
            Featured Products
          </h2>
          <Link
            to="/products"
            className="text-black font-medium hover:underline text-sm md:text-base"
          >
            Browse all products
          </Link>
        </div>

        <div className="flex flex-col md:flex-row gap-4 md:gap-6">
          {/* Large Product Card */}
          <div className="w-full md:w-1/2 bg-gray-50 p-4 md:p-6 rounded-lg">
            <div className="flex flex-col md:flex-row gap-4 md:gap-6">
              <div className="w-full md:w-1/2">
                <div className="mb-3 md:mb-4">
                  <span className="text-xs uppercase text-gray-500 block">
                    TECHNOLOGY
                  </span>
                  <span className="text-xs uppercase text-gray-500 block">
                    SEAN
                  </span>
                </div>
                <img
                  src={products[0].image}
                  alt={products[0].name}
                  className="w-full h-auto max-h-[160px] md:max-h-[200px] object-contain"
                />
              </div>
              <div className="w-full md:w-1/2">
                <h3 className="text-lg md:text-xl font-medium mb-2 md:mb-3">
                  {products[0].name}
                </h3>
                <p className="text-sm md:text-base text-gray-600 mb-3 md:mb-4">
                  {products[0].description}
                </p>
                <div className="text-base md:text-lg font-bold">
                  ${products[0].price.toFixed(2)} USD
                </div>
              </div>
            </div>
          </div>

          {/* Small Product Grid */}
          <div className="w-full md:w-1/2 grid grid-cols-2 gap-3 md:gap-4">
            {products.slice(1).map((product) => (
              <div
                key={product.id}
                className="bg-gray-50 p-3 md:p-4 rounded-lg"
              >
                <div className="mb-2 md:mb-3">
                  <span className="text-xs uppercase text-gray-500 block">
                    {product.category}
                  </span>
                  <span className="text-xs uppercase text-gray-500 block">
                    {product.brand}
                  </span>
                </div>
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-auto max-h-[100px] md:max-h-[120px] object-contain mb-2 md:mb-3"
                />
                <h3 className="text-sm md:text-base font-medium mb-1">
                  {product.name}
                </h3>
                <div className="text-sm md:text-base font-bold">
                  ${product.price.toFixed(2)} USD
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function Shipping() {
  return (
    <div className="bg-white py-8 md:py-12 px-4 sm:px-6">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6">
          <div className="flex items-center gap-3 md:gap-4">
            <div className="bg-gray-100 rounded-full p-3 md:p-4">
              <i className="fas fa-truck text-lg md:text-xl text-gray-800"></i>
            </div>
            <div>
              <h3 className="text-sm md:text-base lg:text-lg">Free Shipping</h3>
              <p className="text-xs md:text-sm">$24+ orders ship free</p>
            </div>
          </div>
          <div className="flex items-center gap-3 md:gap-4">
            <div className="bg-gray-100 rounded-full p-3 md:p-4">
              <i className="fas fa-lock text-lg md:text-xl text-gray-800"></i>
            </div>
            <div>
              <h3 className="text-sm md:text-base lg:text-lg">
                Secure Payments
              </h3>
              <p className="text-xs md:text-sm">With 5+ Payment options</p>
            </div>
          </div>
          <div className="flex items-center gap-3 md:gap-4">
            <div className="bg-gray-100 rounded-full p-3 md:p-4">
              <i className="fas fa-undo-alt text-lg md:text-xl text-gray-800"></i>
            </div>
            <div>
              <h3 className="text-sm md:text-base lg:text-lg">
                30 Days Free Return
              </h3>
              <p className="text-xs md:text-sm">No questions asked</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Newsletter() {
  return (
    <div className="max-w-[1400px] mx-auto px-4 sm:px-6 py-12 md:py-16">
      <div className="bg-[#F7F7F7] rounded-xl p-6 md:p-8 lg:p-12 border border-gray-200 flex flex-col lg:flex-row gap-6 md:gap-8">
        <img
          src="https://framerusercontent.com/images/2frXBLhel5XqUp9GEzD2H6UrBNs.png"
          className="w-full lg:w-2/5 max-h-[300px] object-contain lg:object-cover rounded-lg"
          alt="Newsletter"
        />
        <div className="w-full lg:w-3/5 flex flex-col justify-center">
          <div className="mb-4 md:mb-6">
            <h3 className="text-xl md:text-2xl lg:text-3xl text-gray-900 mb-2 md:mb-3">
              Subscribe to our email newsletter and get 15% off
            </h3>
            <p className="text-sm md:text-base text-gray-600">
              Be the first to know about the latest in tech trends, exclusive
              offers, and exciting product launches by subscribing to our
              newsletter.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 px-4 py-2 md:py-3 rounded-3xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm md:text-base"
            />
            <button className="bg-black text-white px-6 py-2 md:py-3 rounded-3xl text-sm md:text-base">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <div className="overflow-hidden">
      <Hero />
      <CategoryGrid />
      <SpacialExperience />
      <Bestsellers />
      <DesignCommitment />
      <FeaturedProducts />
      <Shipping />
      <Newsletter />
    </div>
  );
}
