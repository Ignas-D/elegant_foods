import { SocialIcon } from "react-social-icons";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const boxVariant = {
  visible: { opacity: 1, scale: 1, transition: { duration: 0.8 } },
  hidden: { opacity: 0, scale: 0 },
};

const Home = () => {
  const control = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      control.start("visible");
    }
  }, [control, inView]);

  return (
    <div className="w-full h-full font-firstFont font-light">
      <div className=" bg-custom-image bg-auto bg-center bg-no-repeat w-screen max-h-screen">
        <motion.div
          ref={ref}
          variants={boxVariant}
          initial="hidden"
          animate={control}
          whileInView="visible"
          className="flex items-center justify-center flex-col"
        >
          <h1 className="text-7xl mt-8 text-bold ">Elegant Food Catering</h1>
          <p className="text-3xl">For all your catering needs!</p>
          <div className="object-contain h-2/6 w-2/6 mt-20">
            <img
              src="/src/assets/2D705227-C6D0-4C49-B48B-B94E8D4DDC7F.JPG"
              alt="catering"
              className="rounded-3xl mb-12 shadow-lg"
            />
          </div>
        </motion.div>
      </div>
      <motion.div
        ref={ref}
        variants={boxVariant}
        initial="hidden"
        animate={control}
        whileInView="visible"
        className="flex flex-row bg-offwhite mb-4 justify-center items-center"
      >
        <div className=" h-2/6 w-2/6 mt-20 mb-20">
          <img
            src="./src/assets/175da6aa-3a41-4769-9a87-c4f2e8e70c9f.jpeg"
            alt="strawberries"
            className="rounded-2xl object-contain hover:opacity-90"
          />
        </div>
        <h2 className="text-2xl w-72 items-end ml-20">
          {" "}
          Here at Elegant Food, we create fancy, bite-sized snacks that will WOW
          at your parties, business meetings, or weddings.
        </h2>
      </motion.div>

      <motion.div
        ref={ref}
        variants={boxVariant}
        initial="hidden"
        animate={control}
        whileInView="visible"
        className="flex flex-row bg-primary"
      >
        <div className="flex flex-row">
          <div className="flex flex-row mb-20">
            <img
              src="./src/assets/Делюкс.jpeg"
              alt="deluxe"
              className="object-contain h-auto w-full mt-20 mr-10 ml-24"
            />
            <img
              src="./src/assets/Платтер закусок.jpeg"
              alt="food box"
              className="object-contain h-auto w-full mt-20 mr-10"
            />
            <img
              src="./src/assets/Гурме.jpeg"
              alt="another food box"
              className="object-contain h-auto w-full mt-20"
            />
          </div>
        </div>
      </motion.div>

      <div className="flex justify-center items-center">
        {/*Here will be another spread with maybe another statement? Background should be like a picture with food*/}
        <div className="flex flex-col">
          <h3 className="flex justify-center text-4xl text-center">
            We are pleased to cater any of your events!
          </h3>
        </div>
      </div>

      <motion.div
        ref={ref}
        variants={boxVariant}
        initial="hidden"
        animate={control}
        whileInView="visible"
        className="flex flex-row bg-offwhite mt-8"
      >
        {/*This will be the contact us portion, just with a brief email and phone number */}
        <div className="flex flex-col ml-80 mt-10 mr-40">
          <h3 className="text-6xl mb-10">Contact Us</h3>
          <p className="text-2xl">Email: elegantfoodcater@gmail.com</p>
          <p className="text-2xl mb-8">Phone: (608) - 393 - 3101</p>
        </div>
        <div className="flex flex-row justify-center ml-10 mt-24">
          <SocialIcon url="https://www.facebook.com/profile.php?id=61554715892668" />
          <SocialIcon
            className="mb-12 ml-7"
            url="https://www.instagram.com/elegant_food_catering/"
          />
        </div>
      </motion.div>
      <div className="justify-center items-center">
        {/*Footer*/}
        <div className="flex flex-row justify-center rounded-full mt-8">
          <p className="text-2xl mb-8">© 2024 Elegant Food Catering</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
