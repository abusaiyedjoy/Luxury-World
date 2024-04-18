import { GiAutoRepair } from "react-icons/gi";

const Service = () => {
  document.title = "Luxury World - Service";
  return (
    <div>
      <div
        data-aos="zoom-in"
        data-aos-duration="1000"
        className="bg-cover h-[90vh] bg-center relative"
        style={{
          backgroundImage:
            "url( https://i.ibb.co/0VzCqq0/after-sales-service-hb-1.webp)",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="hero-overlay bg-opacity-40"></div>
        <div
          data-aos="fade-right"
          data-aos-duration="1000"
          data-aos-delay="800"
          className="absolute top-1/3"
        >
          <div className="pl-6 sm:pl-10 flex flex-col justify-start items-start text-white">
            <h1 className="mb-4 text-2xl sm:text-4xl font-bold">LAMBORGHINI</h1>
            <p className="mb-4 text-5xl sm:text-7xl uppercase max-w-md font-bold ">
              SERVICES
            </p>
            <div>
              <GiAutoRepair className="text-4xl sm:text-7xl"></GiAutoRepair>
            </div>
          </div>
        </div>
      </div>
      <div data-aos="zoom-in"
          data-aos-duration="1000"
          data-aos-delay="100" className=" w-[300px] sm:w-[450px] md:w-[600px] lg:w-[900px] xl:w-[1000px] mx-auto my-4 mt-6 rounded-xl h-[169px] sm:h-[253px] md:h-[400px] lg:h-[500px]">
        <iframe
          width="100%"
          height="100%"
          className="rounded-xl"
          src="https://www.youtube.com/embed/HP7YaFmg4yI?si=BPQwDGds1WSJ0NEn"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  );
};

export default Service;
