import { GiAutoRepair } from "react-icons/gi";

const Service = () => {
    return (
        <div>
            <div
            className="bg-cover h-[80vh] bg-center relative"
            style={{
              backgroundImage:
                "url( https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/face_react/after_sales/service/after_sales_service_hb_1.jpg)",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div className="hero-overlay bg-opacity-40"></div>
            <div className="absolute top-1/3">
              <div className="pl-16 flex flex-col justify-start items-start text-white">
                <h1 className="mb-5 text-4xl font-bold">LAMBORGHINI</h1>
                <p className="mb-5 text-7xl uppercase max-w-md font-bold ">
                  SERVICES
                </p>
                <div><GiAutoRepair className="text-7xl"></GiAutoRepair></div>
              </div>
            </div>
          </div>
        </div>
    );
};

export default Service;