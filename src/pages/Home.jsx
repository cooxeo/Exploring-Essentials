
import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Baground from '../assets/Baground.mp4';
import imgage from "../assets/image.png";

import './Home.css';
import { dataDigitalBestSeller } from './data';

import {FaRegFaceGrinWink,FaWandMagicSparkles,FaFaceGrin,FaLeaf} from 'react-icons/fa6'

import logo from '../assets/logo.png'

import { Swiper, SwiperSlide } from "swiper/react";
import { FaPersonWalkingLuggage } from "react-icons/fa6";

import Andaman from '../assets/INDIAN TOURS/Andaman.jpg'
import Kerala from '../assets/INDIAN TOURS/Kerala.jpg'
import Karnataka from '../assets/INDIAN TOURS/Karnataka.jpg'
import Kashmir from '../assets/INDIAN TOURS/Kashmir.jpg'
import Rajasthan from '../assets/INDIAN TOURS/Rajasthan.jpg'
import Uttarakhand from '../assets/INDIAN TOURS/Uttarakhand.jpg'

import AP_araku_HillStation from '../assets/Places Images/AP_araku_HillStation.jpg'
import AP_papikondaluforest from '../assets/Places Images/AP_papikondaluforest.jpg'
import KAR_Coorg from '../assets/Places Images/KAR_Coorg.jpg'
import KASH_Gulmar from '../assets/Places Images/KASH_Gulmar.jpg'



import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";

import { FreeMode, Pagination } from "swiper/modules";

import { RxArrowTopRight } from "react-icons/rx";
import { ServiceData } from "../constants";
import { NavLink } from 'react-router-dom';




function Home() {

    function SampleNextArrow(props) {
        const { className, style, onClick } = props;
        return (
          <div
            className={className}
            style={{ ...style, display: "block", background: "red" }}
            onClick={onClick}
          />
        );
      }
      
      function SamplePrevArrow(props) {
        const { className, style, onClick } = props;
        return (
          <div
            className={className}
            style={{ ...style, display: "block", background: "green" }}
            onClick={onClick}
          />
        );
      }


    const [defaultImage, setDefaultImage] = useState({});
    const slider = React.useRef(null);
    const settings = {
      dots: true,
      infinite: false,
      arrows: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />
    };
  
    const handleErrorImage = (data) => {
      setDefaultImage((prev) => ({
        ...prev,
        [data.target.alt]: data.target.alt,
        linkDefault: imgGirl,
      }));
    };

    // useEffect(()=>{
    //   Swal.fire("Alert")
    // },[])

    const scrollToTop = () => {
      window.scrollTo(0, 0)
  }


  return (

    <>
    <div className='bg-[#fff]'>
      <div className="w-full h-[550px]  relative object-cover top-0  p-0">
      <video 
  className="w-full h-[550px] object-cover p-0 absolute bottom-0 inset-x-0 clip-bottom"
  src={Baground}
  autoPlay
  loop
  muted
/>
  <div className="absolute w-full h-full top-0 left-0 bg-gray-900/30"></div>
    <div className='  h-full top-0 absolute w-full  flex flex-col justify-center text-center text-white p-4'>
        <div><p className='font-normal text-lg'>Explore, Discover, Travel </p><h1 className='sm:text-5xl text-4xl font-semibold text-white'>We make your holidays <span className='text-orange-500 sm:text-6xl text-5xl'>Memorable!</span></h1>
        </div>
    </div>
  </div>


    <div className='bg-black'> 
    <div className=' max-w-[1240px] mx-auto text-center flex flex-wrap lg:flex-nowrap items-center  pt-10'>

    <h2 className='text-xl flex sm:text-xl font-semibold lg:text-4xl items-center text-center justify-center gap-2 px-24 text-white '>< FaRegFaceGrinWink size={30}/>Adventure <span className='text-orange-500'>awaits.</span></h2>
      <h1 className='text-xl  flex sm:text-4xl sm:pl-24 font-semibold lg:text-4xl items-center justify-center gap-2 px-36 text-white p-6 lg:pl-4  '>Basic needs for every trip.</h1></div>
        <div className='flex flex-wrap max-w-[1240px] mx-auto items-center lg:flex-nowrap '> 
        <img className='w-[500px] mx-auto px-4 hidden lg:block' src={logo} alt='/' />
        <Swiper
        
        breakpoints={{
          340: {
            slidesPerView: 2,
            spaceBetween: 15,
          },
          700: {
            slidesPerView: 3,
            spaceBetween: 15,
          },
        }}
        freeMode={true}
        pagination={false}
        
        modules={[FreeMode, Pagination]}
        className="max-w-[80%] max-h-[80%] lg:max-w-[80%] mx-auto "
        
      >
        
        {ServiceData.map((item) => (
          <SwiperSlide key={item.title}>
            <div className="flex flex-col gap-4 text-xl  group relative shadow-lg text-white rounded-sm px-4 py-8 h-[290px] w-[96%]  mb-8 lg:mt-10 sm:w-[100%] lg:h-[380px] lg:w-[260px] xl:h-[250px] xl:w-[200px] overflow-hidden cursor-pointer md:gap-24" >
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${item.backgroundImage})` }}
              />
              <div className="absolute inset-0 bg-black opacity-60 group-hover:opacity-40" />
              <div className="relative flex flex-col gap-3">
                <h1 className="text-xl lg:text-2xl">{item.title} </h1>
                <p className="lg:text-sm font-normal text-xs">{item.content} </p>
              </div>
              <RxArrowTopRight className="absolute bottom-5 left-5 w-[35px] h-[35px] text-white group-hover:text-orange-500 group-hover:rotate-45 duration-100" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <img className='w-[500px] mx-auto px-4 lg:hidden' src={logo} alt='/' />
        </div>   
    </div>
    

    <div className='pt-12 mx-auto w-[80%] items-center sm:text-start text-center'>
    <h1 className='text-2xl font-normal text-black'>
    POPULAR <span className='font-semibold'>INDIA TOURS</span>
    </h1>
    </div>
    
     <div className="App ">
     <Slider ref={slider} {...settings}>
    {dataDigitalBestSeller.map((item, index) => (
      <NavLink key={index} to={`place${item.id}`} className="card-link">
        <div onClick={scrollToTop} className="card">
          <div className="card-top">
            <img
              src={
                defaultImage[item.title] === item.title
                  ? defaultImage.linkDefault
                  : item.linkImg
              }
              alt={item.title}
              onError={handleErrorImage}
            />
            <h1>{item.title}</h1>
          </div>
          <div className="card-bottom">
            <h3>{item.price}</h3>
            <span className="category">{item.category}</span>
          </div>
        </div>
      </NavLink>
    ))}
  </Slider>
      
    </div>
    <div className=' py-8 mx-auto w-[80%] items-center sm:text-end text-center '>
    <div>
        <button className='border-solid border-2 border-orange-500 text-orange-500 uppercase px-2  rounded-sm hover:bg-orange-600 focus:outline-none hover:text-white' onClick={() => slider?.current?.slickPrev()}>Prev</button>
        <button className='border-solid border-2 border-orange-500 text-orange-500 uppercase px-2  rounded-sm hover:bg-orange-600 focus:outline-none hover:text-white'
          style={{ marginLeft: 20 }}
          onClick={() => slider?.current?.slickNext()}
        >
          Next
        </button>
      </div>

    {/* cards */}

    <div className='pt-8 mx-auto  items-center sm:text-start text-center'>
      <h1 className='text-2xl font-normal text-black'>
        POPULAR <span className='font-semibold'>SHORT BREAK TOURS</span>
      </h1>
    </div> 

  <div class="flex pt-12 pb-12 items-center justify-center">
  <div class="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4 ">
  <section class="mx-auto max-w-[1240px] hover:bg-black cursor-pointer border-[1px] border-slate-300 hover:text-white ">
  <div class="w-72 h-fit group">
    <div class="relative overflow-hidden">
      <img className="h-72 w-[110%] object-cover" src={Kerala} alt="" />
      <div class="absolute h-full w-full bg-black/40 flex items-center justify-center -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
      <FaPersonWalkingLuggage size={50} />
      </div>
    </div>
    <NavLink to="place1"><button onClick={scrollToTop} class="mt-3 text-xl text-start px-6 pb-6 pt-2 font-medium ">LAGOONS OF KERALA →</button>
  </NavLink>
  </div>
</section>

<section class="mx-auto max-w-[1240px] hover:bg-black cursor-pointer border-[1px] border-slate-300 hover:text-white ">
  <div class="w-72 h-fit group">
    <div class="relative overflow-hidden">
      <img className="h-72 w-[110%] object-cover" src={Andaman} alt="" />
      <div class="absolute h-full w-full bg-black/40 flex items-center justify-center -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
      <FaPersonWalkingLuggage size={50} />
      </div>
    </div>
    <NavLink to="place2"> <button onClick={scrollToTop} class="mt-3 text-xl text-start px-6 pb-6 pt-2 font-medium ">AMAZING ANDAMAN →</button> </NavLink>
  </div>
</section>

<section class="mx-auto max-w-[1240px] hover:bg-black cursor-pointer border-[1px] border-slate-300 hover:text-white ">
  <div class="w-72 h-fit group">
    <div class="relative overflow-hidden">
      <img className="h-72 w-[110%] object-cover" src={AP_araku_HillStation} alt="" />
      <div class="absolute h-full w-full bg-black/40 flex items-center justify-center -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
      <FaPersonWalkingLuggage size={50} />
      </div>
    </div>
    <NavLink to="place3"><button onClick={scrollToTop} class="mt-3 text-xl text-start px-4  pb-6 pt-2 font-medium ">
AP ARAKU HILLSTATION →</button></NavLink>
  </div>
</section>

<section class="mx-auto max-w-[1240px] hover:bg-black cursor-pointer border-[1px] border-slate-300 hover:text-white ">
  <div class="w-72 h-fit group">
    <div class="relative overflow-hidden">
      <img className="h-72 w-[110%] object-cover" src={AP_papikondaluforest} alt="" />
      <div class="absolute h-full w-full bg-black/40 flex items-center justify-center -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
      <FaPersonWalkingLuggage size={50} />
      </div>
    </div>
    <NavLink to="place4"><button onClick={scrollToTop} class="mt-3 text-xl text-start px-2 pb-6 pt-2 font-medium uppercase">AP PAPIKONDALU FOREST →</button></NavLink>
  </div>
</section>

<section class="mx-auto max-w-[1240px] hover:bg-black cursor-pointer border-[1px] border-slate-300 hover:text-white ">
  <div class="w-72 h-fit group">
    <div class="relative overflow-hidden">
      <img className="h-72 w-[110%] object-cover" src={KAR_Coorg} alt="" />
      <div class="absolute h-full w-full bg-black/40 flex items-center justify-center -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
      <FaPersonWalkingLuggage size={50} />
      </div>
    </div>
    <NavLink to="place5"><button onClick={scrollToTop} class="mt-3 text-xl text-start px-16 pb-6 pt-2 font-medium uppercase ">Karnataka →</button></NavLink>
  </div>
</section>

<section class="mx-auto max-w-[1240px] hover:bg-black cursor-pointer border-[1px] border-slate-300 hover:text-white ">
  <div class="w-72 h-fit group">
    <div class="relative overflow-hidden">
      <img className="h-72 w-[110%] object-cover" src={KASH_Gulmar} alt="" />
      <div class="absolute h-full w-full bg-black/40 flex items-center justify-center -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
      <FaPersonWalkingLuggage size={50} />
      </div>
    </div>
    <NavLink to="place6"><button onClick={scrollToTop} class="mt-3 text-xl text-start px-10 pb-6 pt-2 font-medium uppercase ">KASHMIR GULMAR →</button></NavLink>
  </div>
</section>

<section class="mx-auto max-w-[1240px] hover:bg-black cursor-pointer border-[1px] border-slate-300 hover:text-white ">
  <div class="w-72 h-fit group">
    <div class="relative overflow-hidden">
      <img className="h-72 w-[110%] object-cover" src={Rajasthan} alt="" />
      <div class="absolute h-full w-full bg-black/40 flex items-center justify-center -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
      <FaPersonWalkingLuggage size={50} />
      </div>
    </div>
    <NavLink to="place7"><button onClick={scrollToTop} class="mt-3 text-xl text-start px-16 pb-6 pt-2 font-medium uppercase ">Rajasthan →</button></NavLink>
  </div>
</section>

<section class="mx-auto max-w-[1240px] hover:bg-black cursor-pointer border-[1px] border-slate-300 hover:text-white ">
  <div class="w-72 h-fit group">
    <div class="relative overflow-hidden">
      <img className="h-72 w-[110%] object-cover" src={Kashmir} alt="" />
      <div class="absolute h-full w-full bg-black/40 flex items-center justify-center -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
      <FaPersonWalkingLuggage size={50} />
      </div>
    </div>
    <NavLink to="place8"><button onClick={scrollToTop} class="mt-3 text-xl text-start px-16 pb-6 pt-2 font-medium uppercase">Kashmir →</button></NavLink>
  </div>
</section>

  </div>
  
</div>

</div>


<div className='bg-[#181818] mx-auto'>
    <div className=" text-white max-w-[1240px]  py-10  lg:px-10 px-6 h-auto flex flex-col-reverse md:flex-row items-center gap-5 md:mx-32 mx-5 ">
      <div className=" py-4 w-full md:w-2/4">
        <img className="w-[500px]" src={imgage} alt="img" />
      </div>

      <div className="w-full md:w-2/4 text-center space-y-2">
        <h1 className="sm:text-5xl text-3xl font-semibold text-start">We're just getting started</h1>
        <p className=" text-lightText py-4 text-start text-[#848282]">
        What sets us apart is our unwavering commitment to customer satisfaction and our relentless pursuit of excellence. From seamless booking processes to attentive customer support, we go above and beyond to ensure that your travel dreams become a reality.
        </p>
        <p className='text-lightText py-4 text-start text-[#848282]'>Whether you're planning a relaxing beach retreat, an adrenaline-fueled adventure, or a cultural immersion in a far-flung destination, let us be your trusted companion on your journey of discovery.</p>
        
      </div>
    </div>
    </div>


<div className='bg-[#1b1a1a] h-80 w-full flex flex-col justify-center text-center text-white p-4'>
<div><h1 className='text-2xl lg:text-5xl sm:text-3xl font-semibold sm:font-bold text-white'>Plan your trip <span className='text-orange-500 text-3xl sm:text-4xl lg:text-6xl'>- Go with feeling!</span></h1>
        <p className='font-normal text-slate-400 text-lg py-6 px-6 sm:px-0 sm:w-[60%] text-center items-center mx-auto'>Make your trip filled with a variety of things and activities to do, and places to see and visit - so whatever you're feeling you can always find something that fits your moment</p>
        </div>
</div>
</div>
    </>
  );
}

export default Home;


