import { useSelector } from "react-redux";
import useShowTrailer from "../hooks/useShowTrailer";
const VideoBackground = ({ showId }) => {
  //Must use optional chaining
  const trailerKey = useSelector((store) => store.shows?.trailerVideo?.key);

  useShowTrailer(showId);
  return (
    <div className="">
      {/* Copied from Youtube embed */}
      <iframe
        className="w-screen aspect-video"
        src={
          "https://www.youtube-nocookie.com/embed/" +
          trailerKey +
          "?autoplay=1&mute=1&controls=0&loop=1&playlist=" +
          trailerKey
        }
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
