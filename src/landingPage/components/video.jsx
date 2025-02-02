

export const Video = () => {
  return(
    <>
      <video
        className="sm:w-2/3 h-auto aspect-video rounded-xl object-cover main-video"
        autoPlay
        loop
        muted
      >
        <source src="./public/display.mp4" type="video/mp4" />
      </video>
    </>
  )
}

