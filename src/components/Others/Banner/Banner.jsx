import bannerImg from "../../../assets/images/banner/banner.png";
const Banner = () => {
  return (
    <div className="container mx-auto max-w-[1400px] min-h-screen flex items-center">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        <div className="flex items-center">
          <div className="">
            <h2 className="text-5xl font-bold">
              It&apos;s never too late to start learning something new
            </h2>
            <p className="mt-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
              accusantium ipsum vitae eaque, nemo animi obcaecati iure excepturi
              voluptates consequuntur?
            </p>
            <button className="btn mt-10 rounded-full px-10">
              Book Your Free Trail Class
            </button>
          </div>
        </div>
        <div className="">
          <img src={bannerImg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
