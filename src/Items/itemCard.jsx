
import { Link } from "react-router-dom";

const itemCard = ({ item }) => {
  console.log(item);
  const { id, name, description, image, seats, title, status, price } =
    item || {};
  return (
    <div>
      <div className=" rounded-md shadow-md  bg-transparent border border-dashed">
        <img
          src={image}
          alt=""
          className="object-cover object-center w-full rounded-t-md h-[270px]"
        />
        <div className="flex flex-col justify-between p-6 space-y-8">
          <div className="space-y-2">
            <h2 className=" text-2xl md:text-3xl font-bold tracking-wide text-gray-50">
              {name}
            </h2>
            <p className="text-gray-50">{description}</p>
          </div>
          <div className="flex justify-around items-center my-3 ">
            <div className="border text-white border-gray-50 p-3">
              <div className="w-full mx-auto flex justify-center items-center">
                <i className="fa-solid fa-couch"></i>{" "}
              </div>
              <p className="font-semibold">{seats} Seats</p>
            </div>
            <div className="border text-white border-gray-50 p-3">
              <div className="w-full mx-auto flex justify-center items-center">
                <i className="fa-solid fa-gas-pump mb-1"></i>
              </div>
              <p className="font-semibold">Diesel</p>
            </div>
            <div className="border text-white border-gray-50 p-3">
              <div className="w-full mx-auto flex justify-center items-center">
                <i className="fa-solid fa-screwdriver-wrench"></i>{" "}
              </div>
              <p className="font-semibold">Auto</p>
            </div>
          </div>
          <div className="flex justify-between items-center text-gray-50">
            <div className=" text-gray-50">
              <p className="text-xl font-semibold">Price: <span className="text-lg">{price}$</span></p>
            </div>
            <div className="rating">
              <input type="radio" name="rating-1" className="mask mask-star" />
              <input
                type="radio"
                name="rating-1"
                className="mask mask-star  bg-gray-50"
                checked
              />
              <input type="radio" name="rating-1" className="mask mask-star  bg-gray-50" />
              <input type="radio" name="rating-1" className="mask mask-star  bg-gray-50" />
              <input type="radio" name="rating-1" className="mask mask-star  bg-gray-50" />
            </div>
          </div>
          <Link to={`/CarDetails/:${id}`}
            type="button"
            className="btn flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md dark:text-gray-50"
          >
            Get purses
          </Link>
        </div>
      </div>
    </div>
  );
};

export default itemCard;
