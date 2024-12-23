import img1 from "../../assets/IMG_2273.jpg";
import img2 from "../../assets/IMG_2274.jpg";
import img3 from "../../assets/IMG_2275.jpg";
import img4 from "../../assets/IMG_2276.jpg";
import img5 from "../../assets/IMG_2277.jpg";
import img6 from "../../assets/IMG_2278.jpg";
import img7 from "../../assets/IMG_2279.jpg";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { useEffect, useState } from "react";

const Menu = () => {
  const slides = [
    {
      img: img1,
    },
    {
      img: img2,
    },
    {
      img: img3,
    },
    {
      img: img4,
    },
    {
      img: img5,
    },
    {
      img: img6,
    },
    {
      img: img7,
    },
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent(current === slides.length - 1 ? 0 : current + 1);
    }, 3000);

    return () => clearInterval(timer);
  }, [current]);

  return (
    <div className="w-full h-full pt-10">
      <div className="flex justify-center items-center h-20 bg-ecru">
        <h1 className="text-4xl font-bold">Menu</h1>
      </div>
      <div>
        <div className="max-w-[800px] h-[600px] w-full m-auto py-16 px-4 relative group">
          {slides.map((slide, index) => (
            <div
              key={index}
              style={{
                backgroundImage: `url(${slide.img})`,
                backgroundSize: "cover",
              }}
              className={`w-full h-full rounded-2xl bg-cover absolute top-0 left-0 transition-opacity duration-1000 ${
                index === current ? "opacity-100" : "opacity-0"
              }`}
            >
              {/* left arrow */}
              <div className="hidden group-hover:block absolute top-1/2 left-0 transform -translate-y-1/2 text-4xl text-black cursor-pointer">
                <BsChevronCompactLeft
                  size={60}
                  onClick={() =>
                    setCurrent(current === 0 ? slides.length - 1 : current - 1)
                  }
                />
              </div>
              {/* right arrow */}
              <div className="hidden group-hover:block absolute top-1/2 right-0 transform -translate-y-1/2 text-4xl text-black cursor-pointer">
                <BsChevronCompactRight
                  size={60}
                  onClick={() =>
                    setCurrent(current === slides.length - 1 ? 0 : current + 1)
                  }
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Menu;
