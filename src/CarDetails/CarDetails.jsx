import { useParams, useLoaderData } from "react-router-dom";

const CarDetails = () => {
  const selectedCar = useLoaderData();
  const { Id } = useParams();
  const clickedData = selectedCar?.find((selectedOne) => selectedOne.id == Id);
  console.log(clickedData);
  const { name, description, image, title, status, price } = clickedData || {};
  return (
    <div>
      <div  data-aos="zoom-in" data-aos-duration="1000"
        className="bg-cover h-[80vh] bg-center"
        style={{
          backgroundImage: `url( ${image})`,
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="hero-overlay bg-opacity-40"></div>
      </div>
      <div className="bg-white">
      <h1 data-aos="fade-up"
     data-aos-duration="2000" className="text-5xl font-bold text-center py-8 text-black">
        Car Details
      </h1>
      <div className="flex flex-col lg:flex-row justify-around items-center bg-white">
        <div data-aos="fade-right" data-aos-duration="2000" className="w-[300px] sm:w-[500px] md:w-[600px] lg:w-[700px]">
          <img src={image} className="w-full bg-transparent" alt="" />
        </div>
        <div>
          <div data-aos="fade-left" data-aos-duration="2000" className=" flex flex-col justify-start items-start text-xl font-semibold text-gray-700 pb-5">
            <p>
              <span className="text-2xl font-bold text-black">Name:</span>{" "}
              {name}
            </p>
            <p>
              <span className="text-2xl font-bold text-black">Title:</span>{" "}
              {title}
            </p>
            <p className="max-w-[500px]">
              <span className="text-2xl font-bold text-black">
                Description:
              </span>{" "}
              {description}
            </p>
            <p>
              <span className="text-2xl font-bold text-black">Status:</span>{" "}
              {status}
            </p>
            <p>
              <span className="text-2xl font-bold text-black">Price:</span>{" "}
              {price}$
            </p>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default CarDetails;
