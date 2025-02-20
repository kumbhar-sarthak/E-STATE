export const Video = () => {
  return (
    // Taken from https://www.youtube.com/watch?v=eRBNnfXXF4w
    <>
      <video
        className="sm:w-2/3 h-auto aspect-video rounded-xl object-cover main-video"
        autoPlay
        loop
        muted
      >
        <source src="/display.mp4" type="video/mp4" />
      </video>
    </>
  );
};
