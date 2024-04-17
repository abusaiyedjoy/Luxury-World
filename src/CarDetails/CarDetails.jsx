import { useParams, useLoaderData } from "react-router-dom";


const CarDetails = () => {
    const selectedCar = useLoaderData()
    const { Id } = useParams()
    const clickedData = selectedCar?.find(selectedOne => selectedOne.id == Id);
    console.log(clickedData)
    const clickedFavoriteData = selectedCar?.find(favoriteOne => favoriteOne.id == Id);
    const { id, name, description, image, seats, title, status, price } =
    clickedData || {};
    return (
        <div>
            <div
            className="bg-cover h-[80vh] bg-center relative"
            style={{
              backgroundImage:
                `url( ${image})`,
              backgroundRepeat: "no-repeat",
            }}
          >
            <div className="hero-overlay bg-opacity-40"></div>
            <div className="absolute top-1/3">
              <div className="pl-6 sm:pl-10 flex flex-col justify-start items-start text-white">
                <h1 className="mb-4 text-2xl sm:text-4xl font-bold">LAMBORGHINI</h1>
                <p className="mb-4 text-5xl sm:text-7xl uppercase max-w-md font-bold ">
                  SERVICES
                </p>
              </div>
            </div>
          </div>
        </div>
    );
};

export default CarDetails;