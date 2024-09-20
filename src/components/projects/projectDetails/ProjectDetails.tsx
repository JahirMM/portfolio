import { useRef, useEffect } from "react";
import Header from "../../Header";

const ProjectDetails = () => {
  const sliderRef = useRef<HTMLInputElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);

  const slide = () => {
    if (sliderRef.current && imgRef.current) {
      const slideValue = sliderRef.current.value;
      imgRef.current.style.clipPath = `polygon(0 0, ${slideValue}% 0, ${slideValue}% 100%, 0 100%)`;
    }
  };

  useEffect(() => {
    if (sliderRef.current) {
      sliderRef.current.addEventListener("input", slide);
    }
    return () => {
      if (sliderRef.current) {
        sliderRef.current.removeEventListener("input", slide);
      }
    };
  }, []);

  return (
    <>
      <main className=" p-10 scroll-m-20 w-full mx-auto container md:max-w-6xl">
        <h1>WriteNote</h1>
        <div>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore at
          placeat quia tenetur, adipisci, fuga autem, mollitia in harum deserunt
          cupiditate commodi! Neque itaque aut similique nesciunt repellat
          minima rerum.
        </div>
        <div className="imageSliderContainer h-[33rem] w-[47rem]">
          <img src="/projects/memoryGame.webp" alt="" />
          <img src="/projects/writeNote.webp" alt="" id="my-img" ref={imgRef} />
          <input
            type="range"
            min="0"
            max="100"
            defaultValue="50"
            id="slider"
            ref={sliderRef}
          />
        </div>
        <a href="/#skills">PERRO</a>
      </main>
    </>
  );
};

export default ProjectDetails;
