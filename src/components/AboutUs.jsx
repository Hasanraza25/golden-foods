import aboutImg from "../assets/aboutus.png"; // update with your actual image path

const AboutUs = () => {
  return (
    <section className="relative">

      {/* Main content with dark gradient background */}
      <div className="relative py-20 px-6 bg-gradient-to-br from-red-900 via-red-800 to-yellow-900">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative group">
            <div className="absolute -inset-2 bg-gradient-to-tr from-yellow-400 to-red-600 rounded-3xl blur-lg opacity-40 group-hover:opacity-60 transition"></div>
            <img
              src={aboutImg}
              alt="About Golden Pvt. Ltd."
              className="relative rounded-2xl shadow-2xl object-cover w-full h-[500px] transform group-hover:scale-105 transition duration-500"
            />
          </div>

          {/* Text */}
          <div className="space-y-6">
            <h2 className="text-5xl font-extrabold text-white tracking-tight">
              About <span className="text-yellow-400">Us</span>
            </h2>
            <p className="text-lg text-white/90 leading-relaxed">
              Golden Pvt. Ltd. is a leading manufacturer of high-quality food
              products, including{" "}
              <span className="text-yellow-400 font-semibold">Macaroni</span>,{" "}
              <span className="text-yellow-400 font-semibold">Pasta</span>,{" "}
              <span className="text-yellow-400 font-semibold">Spaghetti</span>,{" "}
              <span className="text-yellow-400 font-semibold">Tea</span>, and{" "}
              <span className="text-yellow-400 font-semibold">Vermicelli</span>,
              based in Islamabad, Pakistan. Established in 1999, we bring over{" "}
              <span className="text-yellow-400 font-semibold">
                70 years of experience
              </span>{" "}
              in the tea industry and a deep understanding of consumer needs.
            </p>
            <p className="text-lg text-white/90 leading-relaxed">
              With a{" "}
              <span className="font-semibold text-yellow-400">
                state-of-the-art Italian plant
              </span>{" "}
              and innovative technology, we produce over{" "}
              <span className="font-semibold text-yellow-400">50+ SKUs</span> in
              some of the most emerging food categories. Our extensive
              distribution network of{" "}
              <span className="font-semibold text-yellow-400">
                150+ distributors
              </span>{" "}
              ensures our products are widely available across Pakistan.
            </p>
            <p className="text-lg text-white/90 leading-relaxed">
              Committed to{" "}
              <span className="text-yellow-400 font-semibold">quality</span> and{" "}
              <span className="text-yellow-400 font-semibold">innovation</span>,
              Golden Pvt. Ltd. continues to deliver exceptional products that
              cater to diverse tastes, making us a trusted leader in the food
              manufacturing industry.
            </p>
          </div>
        </div>
      </div>


    </section>
  );
};

export default AboutUs;
