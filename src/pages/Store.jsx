import { useParams, useLocation } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import TabButton from "../components/TabButton";
import ProductCard from "../components/ProductCard";

export default function Store() {
  const { category } = useParams();
  const location = useLocation();
  const currentTab = category || (location.pathname === "/store" ? "all" : "");
  const tabsRef = useRef(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);

  useEffect(() => {
    import("aos").then((AOS) => {
      AOS.init({
        duration: 600,
        easing: "ease-out",
        once: true,
        offset: 100,
      });
    });
  }, []);

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
    {
      id: 5,
      name: "Leather Wallet",
      price: 89.99,
      images: ["https://images.unsplash.com/photo-1585386959984-a4155224a1ad"],
      category: "accessory",
    },
    {
      id: 6,
      name: "Wireless Charger",
      price: 59.99,
      images: ["https://images.unsplash.com/photo-1583394838336-acd977736f90"],
      category: "accessory",
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (tabsRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = tabsRef.current;
        setShowLeftArrow(scrollLeft > 0);
        setShowRightArrow(scrollLeft < scrollWidth - clientWidth);
      }
    };

    const tabsElement = tabsRef.current;
    if (tabsElement) {
      tabsElement.addEventListener("scroll", handleScroll);
      handleScroll();
    }

    return () => {
      if (tabsElement) {
        tabsElement.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  const scrollTabs = (direction) => {
    if (tabsRef.current) {
      const scrollAmount = 200;
      tabsRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const filteredProducts =
    currentTab === "all" || !currentTab
      ? products
      : products.filter((product) => product.category === currentTab);

  const allTabs = [
    { title: "All", link: "/store", category: "all" },
    { title: "Gear", link: "/store/gear", category: "gear" },
    { title: "Technology", link: "/store/technology", category: "technology" },
    { title: "Accessory", link: "/store/accessory", category: "accessory" },
  ];

  return (
    <div className="max-w-[1400px] mx-auto py-12 px-4 sm:px-6">
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
        integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw=="
        crossOrigin="anonymous"
        referrerPolicy="no-referrer"
      />

      <h1
        className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium mt-8 md:mt-12 lg:mt-16"
        data-aos="fade-up"
      >
        Store
      </h1>
      <div className="relative mt-4 md:mt-6">
        <div className="md:hidden flex justify-between items-center absolute inset-y-0 w-full pointer-events-none">
          {showLeftArrow && (
            <button
              onClick={() => scrollTabs("left")}
              className="pointer-events-auto p-2 bg-white rounded-full shadow-md ml-2 z-10"
            >
              <i className="fas fa-chevron-left text-gray-700"></i>
            </button>
          )}
          {showRightArrow && (
            <button
              onClick={() => scrollTabs("right")}
              className="pointer-events-auto p-2 bg-white rounded-full shadow-md mr-2 z-10"
            >
              <i className="fas fa-chevron-right text-gray-700"></i>
            </button>
          )}
        </div>

        <div
          ref={tabsRef}
          className="flex space-x-2 overflow-x-auto scroll-smooth pb-4 hide-scrollbar"
          data-aos="fade-up"
        >
          {allTabs.map((tab) => (
            <TabButton
              key={tab.category}
              title={tab.title}
              link={tab.link}
              blackBgBtn={currentTab === tab.category}
              className="flex-shrink-0"
            />
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 mt-8 md:mt-0">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product, index) => (
            <div
              key={product.id}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <ProductCard
                id={product.id}
                name={product.name}
                price={product.price}
                images={product.images}
                category={product.category}
              />
            </div>
          ))
        ) : (
          <div
            className="col-span-full text-center py-12 text-gray-500"
            data-aos="fade-up"
          >
            No products found in this category
          </div>
        )}
      </div>

      <style jsx>{`
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
}
