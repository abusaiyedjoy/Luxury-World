import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/bundle";
import "swiper/css/pagination";

const Banner = () => {
  return (
    <div>
      <Swiper
        spaceBetween={30}
        // centeredSlides={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination]}
      >
        <SwiperSlide>
          <div
            className="bg-cover min-h-screen bg-center"
            style={{
              backgroundImage:
                "url( https://i.ibb.co/D4djs17/09-08-selezione-slide-03.webp)",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div className="hero-overlay bg-opacity-40"></div>
            <div data-aos="fade-right" data-aos-duration="1000" className="w-full h-screen text-neutral-content">
              <div className="pl-6 sm:pl-10 flex flex-col justify-center items-start h-full text-white">
                <h1 className="mb-5 text-2xl sm:text-4xl font-bold">FIRST EDITION</h1>
                <p className="mb-5 text-4xl sm:text-7xl uppercase max-w-md font-bold ">
                  Lamborghini Arena
                </p>
                <button className="btn btn-outline text-white hover:bg-gray-100 hover:text-black">
                  View Details
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="hero bg-cover min-h-screen bg-center"
            style={{
              backgroundImage:
                "url( https://i.ibb.co/0GSFbPk/gate-models-hero-02.webp)",
            }}
          >
            <div className="hero-overlay bg-opacity-20"></div>
            <div data-aos="fade-right" data-aos-duration="1000" className="w-full h-screen text-neutral-content">
            <div className="pl-6 sm:pl-10 flex flex-col justify-center items-start h-full text-white">
                <h1 className="mb-5 text-2xl sm:text-4xl font-bold">FIRST EDITION</h1>
                <p className="mb-5 text-4xl sm:text-7xl uppercase max-w-md font-bold ">
                  Lamborghini Arena
                </p>
                <button className="btn btn-outline text-white hover:bg-gray-100 hover:text-black">
                  View Details
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="hero min-h-screen bg-cover bg-center"
            style={{
              backgroundImage:
                "url( https://i.ibb.co/ry2ZX6K/beyond-land-hero-01.jpg)",
            }}
          >
            <div className="hero-overlay bg-opacity-20"></div>
            <div data-aos="fade-right" data-aos-duration="1000" className="w-full h-screen text-neutral-content">
            <div className="pl-6 sm:pl-10 flex flex-col justify-center items-start h-full text-white">
                <h1 className="mb-5 text-2xl sm:text-4xl font-bold">FIRST EDITION</h1>
                <p className="mb-5 text-4xl sm:text-7xl uppercase max-w-md font-bold ">
                  Lamborghini Arena
                </p>
                <button className="btn btn-outline text-white hover:bg-gray-100 hover:text-black">
                  View Details
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
