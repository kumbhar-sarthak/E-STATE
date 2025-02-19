import { Video } from "./components/video";
import { Search } from "./components/search";
import { News } from "./components/news";

const Banner = () => {

  return (
    <div className="container h-150 mx-auto p-8 flex justify-start gap-8 main">

      <div className="w-full h-full ">
        <Search />
        <News />
      </div>
      

      <Video />
    </div>
  );
};

export default Banner;
