import { Video } from "./components/video";
import { Search } from "./components/search";

const Banner = () => {

  return (
    <div className="container h-150 mx-auto p-8 flex justify-start gap-8 main">
      <Search />

      <Video />
    </div>
  );
};

export default Banner;
