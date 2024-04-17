const Catagory = () => {
  return (
    <div className="bg-white w-full">
      <div data-aos="zoom-in" data-aos-duration="1000"
        className="bg-white py-8 h-[500px] bg-cover"
        style={{
          backgroundImage:
            "url( https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/facelift_2019/homepage/model_choose/2023/revuelto_home.jpg)",
          backgroundRepeat: "no-repeat",
          
          
        }}
      >
        <div data-aos="fade-right" data-aos-delay="800" data-aos-duration="1000" className="pl-12 flex flex-col justify-center items-start h-full text-black">
          <h1 className="mb-5 text-2xl sm:text-4xl font-bold">CONFIGURATOR</h1>
          <p className="mb-5 text-4xl sm:text-7xl uppercase max-w-md font-bold ">
            CREATE YOUR REVUELTO
          </p>
          <button className="btn btn-outline text-black hover:bg-gray-200">
            Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default Catagory;
