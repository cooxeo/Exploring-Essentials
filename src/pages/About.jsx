import React from "react";
import imgage from "../assets/image.png";


const About = () => {
  return (
    <div className=" md:min-h-screen flex flex-col-reverse md:flex-row items-center gap-5 md:mx-32 mx-5 ">
      <div className=" w-full md:w-2/4">
        <img className="w-[500px]" src={imgage} alt="img" />
      </div>

      <div className="w-full md:w-2/4 text-center space-y-2">
        <h1 className="text-6xl font-semibold">Who Are We?</h1>
        <p className=" text-lightText">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate
          molestiae consequuntur iste placeat recusandae qui nesciunt possimus.
        </p>

        {/* <Link to="contact" spy={true} smooth={true} duration={500}>
          <Button title="Contact Us" />
        </Link> */}
      </div>
    </div>
  );
};

export default About;