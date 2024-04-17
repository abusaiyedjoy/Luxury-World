
import swal from "sweetalert";

const ContactUs = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    swal("Your query has been Submitted!", "we'll contact you soon", "success");
    e.target.reset();
  };
  return (
    <div>
      <div>
        <section className="text-gray-600 body-font relative">
          <div data-aos="fade-up"
     data-aos-duration="2000" className="container px-5 py-24 mx-auto">
            <div className="flex flex-col text-center w-full mb-12">
              <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-white ">
                Update Your Profile
              </h1>
            </div>
            <form onSubmit={handleSubmit} className="lg:w-1/2 md:w-2/3 mx-auto">
              <div className="flex flex-wrap -m-2">
                <div data-aos="fade-right" data-aos-duration="2000" data-aos-delay="1000" className="p-2 w-1/2">
                  <div className="relative">
                    <label className="leading-7 text-sm  text-white">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>
                </div>
                <div data-aos="fade-left" data-aos-duration="2000" data-aos-delay="1000" className="p-2 w-1/2">
                  <div className="relative">
                    <label className="leading-7 text-sm text-white">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>
                </div>
                <div data-aos="fade-up" data-aos-duration="2000" data-aos-delay="1000" className="p-2 w-full">
                  <div className="relative">
                    <label className="leading-7 text-sm text-white">
                      {" "}
                      Photo URL
                    </label>
                    <input
                      id="message"
                      name="image"
                      className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                    ></input>
                  </div>
                </div>
                <div    data-aos="zoom-in" data-aos-duration="2000" data-aos-delay="2000" className="p-2 w-full">
                  <button className="btn btn-success flex mx-auto">
                    Update
                  </button>
                </div>
              </div>
            </form>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ContactUs;
