import Navmob from "../components/Navmob";
import Navpc from "../components/Navpc";
import Footer from "../components/Footer";

const News = () => {
  return (
    <div className="border-2 border-[gold]">
      <Navmob />

      {/* Mobile navbar spacing */}
      <div className="flex lg:hidden h-20"></div>

      <Navpc page="news" />

      {/* News section */}
      <div className="flex items-center justify-center w-full h-screen lg:h-[90vh] bg-[#3e7742]">
        <div className="flex items-center justify-center w-4/5 sm:w-3/4 md:w-2/3 lg:w-4/5 xl:w-2/3 bg-[rgba(237,237,237,0.8)] h-3/5 sm:h-auto rounded-lg">
          <h1 className="lg:text-[80px] text-[40px] text-[#3e7742] text-center font-bold">
            STAY TUNED FOR NEWS
          </h1>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default News;
