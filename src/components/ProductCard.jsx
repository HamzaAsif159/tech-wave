import { Link } from "react-router-dom";

export default function ProductCard({
  id,
  name,
  price,
  images = [],
  category,
}) {
  return (
    <Link to={`/products/${id}`}>
      <div className="my-12 transition-transform duration-300 hover:scale-[1.02] cursor-pointer rounded-[40px]">
        <div className="relative w-full h-[300px] bg-gray-100 rounded-lg overflow-hidden">
          <div className="absolute top-4 left-4 bg-white px-3 py-1 rounded-full text-xs font-medium z-10">
            {category.toUpperCase()}
          </div>
          <div className="h-full p-6 flex justify-center items-center">
            <img src={images[0]} alt={name} className="h-full object-cover" />
          </div>
        </div>
        <div className="mt-4">
          <h3 className="text-xl font-medium">{name}</h3>
          <p className="text-gray-600 mt-2">
            Elevate your style with our sophisticated {name}, a perfect blend of
            elegance and functionality
          </p>
          <p className="text-lg font-medium mt-3">${price.toFixed(2)} USD</p>
        </div>
      </div>
    </Link>
  );
}
