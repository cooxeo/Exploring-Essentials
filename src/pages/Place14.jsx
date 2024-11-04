import { Link, NavLink } from 'react-router-dom';
import React, { useState, useRef, useEffect } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { BsGlobe2,BsCheck2Circle } from "react-icons/bs";
import { MdLocationPin } from "react-icons/md";
import { GrStar } from "react-icons/gr";
import { TiWeatherPartlySunny } from "react-icons/ti";
import { TiWeatherShower } from "react-icons/ti";
import { FaPersonWalkingLuggage } from "react-icons/fa6";



const Place14 = () => {
    const [activeTabIndex, setActiveTabIndex] = useState(0);
    const [date, setDate] = useState();
    const[amount, setAmount] = useState(1)
    const handleDonation=(value)=>{
      if(value <1){
        setAmount(1);
      }else if (value >50){
        setAmount(1000);
      }else{
        setAmount(value)
      }
  
    }
    console.log('Date',date)
    const slides = [
      {
        url: 'https://smitdeepholidays.in/wp-content/uploads/2018/10/khajjiar-1.jpg',
      },
      {
        url: 'https://www.virasatholidays.com/wp-content/uploads/2021/09/21.jpg',
      },
      {
        url: 'https://www.aksharonline.com/images/-47850_8284.jpg',
      },
  
      {
        url: 'https://www.japjitravel.com/blog/wp-content/uploads/2015/07/Shimla-Manali-Dharamshala-Dalhousie1.jpg',
      },
    ];
  
    const [currentIndex, setCurrentIndex] = useState(0);
  
    const prevSlide = () => {
      const isFirstSlide = currentIndex === 0;
      const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
      setCurrentIndex(newIndex);
    };
  
    const nextSlide = () => {
      const isLastSlide = currentIndex === slides.length - 1;
      const newIndex = isLastSlide ? 0 : currentIndex + 1;
      setCurrentIndex(newIndex);
    };
  
    const goToSlide = (slideIndex) => {
      setCurrentIndex(slideIndex);
    };

    const [tabSelected, setTabSelected] = useState({
        currentTab: 2,
        noTabs: 3,
      })
    
      const wrapperRef = useRef(null)
    
      const handleKeyDown = e => {
        if (e.keyCode === 39) {
          if (wrapperRef.current && wrapperRef.current.contains(e.target)) {
            if (
              tabSelected.currentTab >= 2 &&
              tabSelected.currentTab < tabSelected.noTabs
            ) {
              setTabSelected({
                ...tabSelected,
                currentTab: tabSelected.currentTab + 2,
              })
            } else {
              setTabSelected({
                ...tabSelected,
                currentTab: 2,
              })
            }
          }
        }
    
        if (e.keyCode === 37) {
          if (wrapperRef.current && wrapperRef.current.contains(e.target)) {
            if (
              tabSelected.currentTab > 1 &&
              tabSelected.currentTab <= tabSelected.noTabs
            ) {
              setTabSelected({
                ...tabSelected,
                currentTab: tabSelected.currentTab - 1,
              })
            } else {
              setTabSelected({
                ...tabSelected,
                currentTab: tabSelected.noTabs,
              })
            }
          }
        }
      }
    
      useEffect(() => {
        window.addEventListener("keydown", handleKeyDown)
        return () => {
          window.removeEventListener("keydown", handleKeyDown)
        }
      })



      const [location, setLocation] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=8e70371d391f492b975191439242504&q=${location}&aqi=no`);
      if (!response.ok) {
        throw new Error('Weather data not found for the given location');
      } 
      const data = await response.json();
      setWeatherData(data);
    } catch (error) {
      console.error('Error fetching weather data:', error);
    } finally {
      setLoading(false);
    }
  };




    return (
      <div className='bg-white lg:pt-[88px] pt-[80px]'>
        
      <div>
        <div className='bg-black h-20 w-full top-0 uppercase text-3xl text-white '> 
        <h1 className='max-w-[1240px] px-6 mx-auto text-start items-center pt-8 font-semibold'>SCENIC HIMACHAL</h1>
        </div>
        <div className='bg-gray-400 h-1 w-full'><h1 className='bg-orange-500 ml-36 w-[19%] h-1 max-w-[1240px]  text-start '></h1></div>
        <div className='w-[90%] h-[100%] px-4 max-w-[1240px] items-center mx-auto '>

      <div className='flex flex-wrap sm:flex-nowrap'>
      <div className='max-w-[900px] h-[470px] w-full pt-16 mx-auto px-4 relative group '>
        <div
          style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
          className='w-full h-full  bg-center bg-cover duration-500'
        ></div>
        {/* Left Arrow */}
        <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-10 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
          <BsChevronCompactLeft onClick={prevSlide} size={30} />
        </div>
        {/* Right Arrow */}
        <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-10 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
          <BsChevronCompactRight onClick={nextSlide} size={30} />
        </div>

        <div className='flex top-4 justify-center py-2'>
          {slides.map((slide, slideIndex) => (
            <div
              key={slideIndex}
              onClick={() => goToSlide(slideIndex)}
              className='text-2xl cursor-pointer'
            >
            </div>
          ))}
        </div>
        
      </div>
      
      <div className="w-[330px] h-[406px] rounded shadow-2xl py-4  mt-16  text-4xl text-center md:mr-10 mx-auto px-4 text-wrap">
      <p className='bg-black h-1 w-full px-0'></p>
        <h1 className='text-black font-light pt-8'>SCENIC<span className='text-black font-semibold'> HIMACHAL</span></h1>
        <div className='bg-gray-600 h-[3px] rounded-full w-24 items-center mx-auto mt-4 text-center'></div>
        <div className='text-center items-center mx-auto font-semibold text-lg gap-2 flex justify-center pt-10 '><MdLocationPin size={30} />Places Covered : </div>
        <p className='text-center pt-4 items-center font-light mx-auto flex text-lg justify-center'>Shimla, Manali, Dharamshala, Dalhousie</p>
        <p className='text-center pt-4 items-center mx-auto font-semibold flex text-lg justify-center'>Ratings : </p>
        <div className='flex items-center pt-2 px-12'>
                        <p className='font-bold text-sm text-black'>5.0</p>
                            <ul className=' text-orange-500 items-center mx-auto font-semibold flex text-lg justify-center'>
                                <li><GrStar/></li>
                                <li><GrStar/></li>
                                <li><GrStar/></li>
                                <li><GrStar/></li>
                                <li><GrStar/></li>
                            </ul>
                        </div>
      </div>
      </div>
      <div className='flex items-center gap-2 py-8  max-w-[1240px] px-4'>
        <div><BsGlobe2 size={20} /></div> <p className='sm:flex flex-wrap gap-1'><span className='font-bold'>Available languages: </span>    English, Hindi And Local Language of that palce.</p>
      </div>
    </div>
  

    <div className='max-w-[1240px]  items-start justify-start mx-auto  flex flex-wrap md:flex-nowrap'>
    <section className="w-[900px] mx-auto px-8 justify-start pb-24 " aria-multiselectable="false">
        <ul
          className="flex items-center border-b  border-slate-200"
          role="tablist"
          ref={wrapperRef}
        >
          
          <li className="" role="presentation">
            <button
              className={`-mb-px inline-flex h-12 w-full items-center justify-center gap-2 whitespace-nowrap rounded-t border-b-2 px-6 text-sm font-medium tracking-wide transition duration-300 hover:bg-orange-50 hover:stroke-orange-600 focus:bg-orange-50 focus-visible:outline-none disabled:cursor-not-allowed ${
                tabSelected.currentTab === 2
                  ? "border-orange-500 stroke-orange-500 text-orange-500 hover:border-orange-600  hover:text-orange-600 focus:border-orange-700 focus:stroke-orange-700 focus:text-orange-700 disabled:border-slate-500"
                  : "justify-self-center border-transparent stroke-slate-700 text-slate-700 hover:border-orange-500 hover:text-orange-500 focus:border-orange-600 focus:stroke-orange-600 focus:text-orange-600 disabled:text-slate-500"
              }`}
              id="tab-label-2a"
              role="tab"
              aria-setsize="3"
              aria-posinset="2"
              tabindex={`${tabSelected.currentTab === 2 ? "0" : "-1"}`}
              aria-controls="tab-panel-2a"
              aria-selected={`${
                tabSelected.currentTab === 2 ? "true" : "false"
              }`}
              onClick={() => setTabSelected({ ...tabSelected, currentTab: 2 })}
            >
              <span>REQUIRMENTS</span>
            </button>
          </li>
          <li className="" role="presentation">
            <button
              className={`-mb-px inline-flex h-12 w-full items-center justify-center gap-2 whitespace-nowrap rounded-t border-b-2 px-6 text-sm font-medium tracking-wide transition duration-300 hover:bg-orange-50 hover:stroke-orange-600 focus:bg-orange-50 focus-visible:outline-none disabled:cursor-not-allowed ${
                tabSelected.currentTab === 3
                  ? "border-orange-500 stroke-orange-500 text-orange-500 hover:border-orange-600  hover:text-orange-600 focus:border-orange-700 focus:stroke-orange-700 focus:text-orange-700 disabled:border-slate-500"
                  : "justify-self-center border-transparent stroke-slate-700 text-slate-700 hover:border-orange-500 hover:text-orange-500 focus:border-orange-600 focus:stroke-orange-600 focus:text-orange-600 disabled:text-slate-500"
              }`}
              id="tab-label-3a"
              role="tab"
              aria-setsize="3"
              aria-posinset="2"
              tabindex={`${tabSelected.currentTab === 2 ? "0" : "-1"}`}
              aria-controls="tab-panel-2a"
              aria-selected={`${
                tabSelected.currentTab === 2 ? "true" : "false"
              }`}
              onClick={() => setTabSelected({ ...tabSelected, currentTab: 3 })}
            >
              <span>MAP</span>
            </button>
          </li>
        </ul>
        <div className="">
          

          <div
            className={`px-6 py-4 border-2 ${
              tabSelected.currentTab === 2 ? "" : "hidden"
            }`}
            id="tab-panel-3a"
            aria-hidden={`${tabSelected.currentTab === 2 ? "true" : "false"}`}
            role="tabpanel"
            aria-labelledby="tab-label-3a"
            tabindex="-1"
          >
            <div className='sm:flex gap-6 justify-between flex-wrap'>
          <div className='py-4'>
          {weatherData !== null ? (
  <div>
    {weatherData.current.temp_c <= 20 ? (
      <div><p className='text-lg text-orange-700 pt-6 flex items-center gap-4 font-semibold'> <FaPersonWalkingLuggage size={20} /> Essintials required for travelling.</p>

<div className='flex items-center gap-4 font-semibold text-lg py-2'>
          <div><BsCheck2Circle size={20} className='text-green-500'/></div>Warm jacket, Insulated boots, Hat and gloves.

          </div>
          <div className='flex items-center gap-4 font-semibold text-lg py-2'>
          <div><BsCheck2Circle size={20} className='text-green-500'/></div>Maps or GPS device with offline capabilities, Portable charger or power bank for electronic devices.

          </div>
          <div className='flex items-center gap-4 font-semibold text-lg py-2'>
          <div><BsCheck2Circle size={20} className='text-green-500'/></div>Snow pants or waterproof trousers, Base layers (thermal underwear).

          </div>
          <div className='flex items-center gap-4 font-semibold text-lg py-2'>
          <div><BsCheck2Circle size={20} className='text-green-500'/></div>Hand warmers, Portable shovel (for snow), Ice scraper for your car.

          </div>
          <div className='flex items-center gap-4 font-semibold text-lg py-2'>
          <div><BsCheck2Circle size={20} className='text-green-500'/></div>Blanket or sleeping bag, Flashlight with extra batteries.

          </div>
          <div className='flex items-center gap-4 font-semibold text-lg py-2'>
          <div><BsCheck2Circle size={20} className='text-green-500'/></div>Snow chains or traction devices for your vehicle.

          </div>
          <div className='flex items-center gap-4 font-semibold text-lg py-2'>
          <div><BsCheck2Circle size={20} className='text-green-500'/></div>Sunglasses (for glare from snow).

          </div>
          <div className='flex items-center gap-4 font-semibold text-lg py-2'>
          <div><BsCheck2Circle size={20} className='text-green-500'/></div>Waterproof matches or lighter.

          </div>
          <div className='flex items-center gap-4 font-semibold text-lg py-2'>
          <div><BsCheck2Circle size={20} className='text-green-500'/></div>Multi-tool or Swiss army knife.

          </div>
          <div className='flex items-center gap-4 font-semibold text-lg py-2'>
          <div><BsCheck2Circle size={20} className='text-green-500'/></div>Kerosene, barbeque, Athletic gear, Emergency food and water.

          </div>

      </div>
    ) : (
      <div>
        {weatherData.current.temp_c >= 21 && weatherData.current.temp_c <= 28 ? (
          <div><p className='text-lg text-orange-700 pt-6 flex items-center gap-4 font-semibold'> <FaPersonWalkingLuggage size={20} /> Essintials required for travelling.</p>

<div className='flex items-center gap-4 font-semibold text-lg py-2'>
          <div><BsCheck2Circle size={20} className='text-green-500'/></div>Lightweight rain jacket, Umbrella

          </div>
          <div className='flex items-center gap-4 font-semibold text-lg py-2'>
          <div><BsCheck2Circle size={20} className='text-green-500'/></div>Layered clothing (T-shirts, long-sleeve shirts, sweaters).

          </div>
          <div className='flex items-center gap-4 font-semibold text-lg py-2'>
          <div><BsCheck2Circle size={20} className='text-green-500'/></div>Multi-tool or Swiss army knife, Kerosene.

          </div>
          <div className='flex items-center gap-4 font-semibold text-lg py-2'>
          <div><BsCheck2Circle size={20} className='text-green-500'/></div>Comfortable walking shoes.

          </div>
          <div className='flex items-center gap-4 font-semibold text-lg py-2'>
          <div><BsCheck2Circle size={20} className='text-green-500'/></div>Camera or smartphone for capturing memories.

          </div>
          <div className='flex items-center gap-4 font-semibold text-lg py-2'>
          <div><BsCheck2Circle size={20} className='text-green-500'/></div>Travel adapter and converter, Snacks for energy boosts.

          </div>
          <div className='flex items-center gap-4 font-semibold text-lg py-2'>
          <div><BsCheck2Circle size={20} className='text-green-500'/></div>Hat, Sunscreen, Sunglasses, Water bottle, Portable charger.

          </div>
          <div className='flex items-center gap-4 font-semibold text-lg py-2'>
          <div><BsCheck2Circle size={20} className='text-green-500'/></div>Travel-sized first aid kit.

          </div>
          <div className='flex items-center gap-4 font-semibold text-lg py-2'>
          <div><BsCheck2Circle size={20} className='text-green-500'/></div>Light scarf or shawl for chilly evenings, Small backpack or daypack.

          </div>
          <div className='flex items-center gap-4 font-semibold text-lg py-2'>
          <div><BsCheck2Circle size={20} className='text-green-500'/></div>Portable travel blanket for picnics or outdoor relaxation.

          </div>

          </div>
        ) : (
          <div>
            {weatherData.current.temp_c >= 29 ? (
              <div><p className='text-lg text-orange-700 pt-6 flex items-center gap-4 font-semibold'><FaPersonWalkingLuggage size={20} />Essintials required for travelling.</p>

<div className='flex items-center gap-4 font-semibold text-lg py-2'>
            <div><BsCheck2Circle size={20} className='text-green-500'/></div>Reusable water bottle with built-in filter.
            

          </div>
          <div className='flex items-center gap-4 font-semibold text-lg py-2'>
          <div><BsCheck2Circle size={20} className='text-green-500'/></div>Quick-dry towel or microfiber towel for beach or pool days.

          </div>
          <div className='flex items-center gap-4 font-semibold text-lg py-2'>
          <div><BsCheck2Circle size={20} className='text-green-500'/></div>Comfortable Footwear.

          </div>
          <div className='flex items-center gap-4 font-semibold text-lg py-2'>
          <div><BsCheck2Circle size={20} className='text-green-500'/></div>Sun Protection : high SPF, sunglasses, and a wide-brimmed hat or cap.

          </div>
          <div className='flex items-center gap-4 font-semibold text-lg py-2'>
          <div><BsCheck2Circle size={20} className='text-green-500'/></div>Mosquito Repellent : Carry mosquito repellent creams or sprays to avoid insect bites.

          </div>
          <div className='flex items-center gap-4 font-semibold text-lg py-2'>
          <div><BsCheck2Circle size={20} className='text-green-500'/></div>Medications and First Aid Kit :  bandages, antiseptic wipes, pain relievers, and motion sickness pills (if you're prone to travel sickness).
          </div>
          
          <div className='flex items-center gap-4 font-semibold text-lg py-2'>
          <div><BsCheck2Circle size={20} className='text-green-500'/></div>Portable charger/power bank.

          </div>
          <div className='flex items-center gap-4 font-semibold text-lg py-2'>
          <div><BsCheck2Circle size={20} className='text-green-500'/></div>Quick-dry towel or microfiber towel for beach or pool days.

          </div>
          <div className='flex items-center gap-4 font-semibold text-lg py-2'>
          <div><BsCheck2Circle size={20} className='text-green-500'/></div>Items for staying hydrated (water bottle, electrolyte packets, etc.)

          </div>
          <div className='flex items-center gap-4 font-semibold text-lg py-2'>
          <div><BsCheck2Circle size={20} className='text-green-500'/></div>Entertainment items (books, e-reader, portable speaker)

          </div>
          <div className='flex items-center gap-4 font-semibold text-lg py-2'>
          <div><BsCheck2Circle size={20} className='text-green-500'/></div>Snacks and energy bars , Travel journal or notebook, Flip-flops or sandals.

          </div>

              </div>
            ) : (
              <p>Invalid Location</p>
            )}
          </div>
        )}
      </div>
    )}
  </div>
) : (
  <p>Enter your destination.</p>
)}

{weatherData !== null ? (
  <div>
    {weatherData.current.humidity >= 60 ? (
      <div>
      <p className='text-lg text-orange-700 pt-6 flex items-center gap-4 font-semibold' ><TiWeatherShower size={20} />Travel essentials for rainy, humid conditions :
      </p>
      <div className='py-2'>
          <div className='flex items-center gap-4 font-semibold text-lg py-2'>
            <div><BsCheck2Circle size={20} className='text-green-500'/></div>Umbrella or Raincoat: Essential for staying dry during rain showers. Choose a compact and durable umbrella or a waterproof raincoat.

            

          </div>
          <div className='flex items-center gap-4 font-semibold text-lg py-2'>
          <div><BsCheck2Circle size={20} className='text-green-500'/></div>Waterproof Backpack: Keep your belongings safe and dry with a waterproof backpack or dry bag. It's important to protect electronics, documents, and other sensitive items from moisture.


          </div>
          <div className='flex items-center gap-4 font-semibold text-lg py-2'>
          <div><BsCheck2Circle size={20} className='text-green-500'/></div>Quick-Dry Clothing: Stay comfortable in wet weather.

               </div>
          <div className='flex items-center gap-4 font-semibold text-lg py-2'>
          <div><BsCheck2Circle size={20} className='text-green-500'/></div>Waterproof Footwear: Keep feet dry and safe.


          </div>
          <div className='flex items-center gap-4 font-semibold text-lg py-2'>
          <div><BsCheck2Circle size={20} className='text-green-500'/></div>Emergency Whistle: Signal for help if needed.

          </div>
          <div className='flex items-center gap-4 font-semibold text-lg py-2'>
          <div><BsCheck2Circle size={20} className='text-green-500'/></div>Microfiber Towel: Microfiber towels are highly absorbent and dry rapidly.

          </div>
          
          <div className='flex items-center gap-4 font-semibold text-lg py-2'>
          <div><BsCheck2Circle size={20} className='text-green-500'/></div>First Aid Kit: It's always a good idea to carry a basic first aid kit, including items such as bandages, antiseptic wipes, and pain relievers, in case of minor injuries or emergencies.


          </div>
          <div className='flex items-center gap-4 font-semibold text-lg py-2'>
          <div><BsCheck2Circle size={20} className='text-green-500'/></div>Portable Power Bank: Ensure you have a portable power bank to keep your electronic devices charged, especially if you're using them for navigation or communication during your travels.


          </div>
          <div className='flex items-center gap-4 font-semibold text-lg py-2'>
          <div><BsCheck2Circle size={20} className='text-green-500'/></div>Waterproof camping gear (tent, sleeping bag, etc.)

          </div>
          <div className='flex items-center gap-4 font-semibold text-lg py-2'>
          <div><BsCheck2Circle size={20} className='text-green-500'/></div>Headlamp or waterproof flashlight with extra batteries.


          </div>
          <div className='flex items-center gap-4 font-semibold text-lg py-2'>
          <div><BsCheck2Circle size={20} className='text-green-500'/></div>Maps or GPS device with offline capabilities
          </div>

        </div>


      </div>
    ) : (
      <div>
        <p></p>
      </div>
    )}
  </div>
) : null}
          
          </div>
          </div>
          </div>

          <div
            className={`px-6 py-4 border-2 ${
              tabSelected.currentTab === 3 ? "" : "hidden"
            }`}
            id="tab-panel-3a"
            aria-hidden={`${tabSelected.currentTab === 3 ? "true" : "false"}`}
            role="tabpanel"
            aria-labelledby="tab-label-3a"
            tabindex="-1"
          >
            <div className=''>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26997.52301215784!2d77.14815086729077!3d32.239502371049795!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39048708163fd03f%3A0x8129a80ebe5076cd!2sManali%2C%20Himachal%20Pradesh!5e0!3m2!1sen!2sin!4v1714398250567!5m2!1sen!2sin" width="100%" height="450"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
          </div>
        </div>
      </section>
      <div className="w-[330px] h-auto mb-8 rounded shadow-2xl py-4 text-xl text-center md:mr-10 mx-auto px-4 text-wrap bg-[#ffffff]">
      <p className='bg-black h-1 w-full px-0'></p>
      <div>
      <h1 className='font-semibold pt-6 uppercase mx-auto w-full text-center items-center flex gap-2'>Check Weather <TiWeatherPartlySunny size={30} /></h1>
      <form onSubmit={handleSubmit}>
        <label className='bg-slate-700 h-10 max-w-[1240px] mx-auto' >
          <input className=' w-full px-6 flex backdrop-blur-md bg-slate-200 shadow-xl p-1 rounded-md mt-6 my-2  pl-2 text-[#545353] outline-0' type="text" value={location} onChange={(e) => setLocation(e.target.value)} required placeholder='Enter The Location' />
        </label>
        <button className='bg-orange-700 w-full p-2 rounded-md text-white font-semibold text-lg hover:bg-orange-600 mt-4' type="submit" disabled={loading}>Get Weather</button>
      </form>
      {loading && <div class='flex space-x-2 justify-center items-center bg-white h-6 '>
          <span class='sr-only'>Loading...</span>
            <div class='h-2 w-2 bg-black rounded-full animate-bounce [animation-delay:-0.3s]'></div>
          <div class='h-2 w-2 bg-black rounded-full animate-bounce [animation-delay:-0.15s]'></div>
          <div class='h-2 w-2 bg-black rounded-full animate-bounce'></div>
        </div>}
      {weatherData && (
        <div className='bg-[#ffffff] shadow-sm rounded-md text-start px-4 mt-8'>
          <p className=' pt-4 text-3xl'> {weatherData.location.name}</p>
          <p className=' text-base pt-2'>{weatherData.current.condition.text}</p>
          <p className='text-5xl flex pt-0 gap-10 items-center'>{weatherData.current.temp_c}°C <img className=' w-24' src={`http:${weatherData.current.condition.icon}`} alt="Weather Icon" /></p>
          <div className='flex py-6 gap-4'>
          <p className='flex gap-2 text-lg font-semibold items-center'><img className=' w-12' src='https://cdn3.iconfinder.com/data/icons/weather-blue-1/64/foggy-1024.png' alt="Weather Icon" /> {weatherData.current.wind_kph} km/h, {weatherData.current.wind_dir}</p>
          <p className='flex text-3xl items-center'><img className=' w-12' src='https://img.icons8.com/?size=512&id=19395&format=png' alt="Weather Icon" /> {weatherData.current.humidity}%</p>
          </div>
        </div>
      )}
    </div>
      </div>
    </div>

    <div className='bg-[#010101] h-80 w-full flex flex-col justify-center text-center text-white p-4'>
<div><h1 className='text-2xl lg:text-5xl sm:text-3xl font-semibold sm:font-bold text-white'>Plan your trip <span className='text-orange-500 text-3xl sm:text-4xl lg:text-6xl'>- Go with feeling!</span></h1>
        <p className='font-normal text-slate-400 text-lg py-6 sm:w-[60%] text-center items-center mx-auto'>Make your trip filled with a variety of things and activities to do, and places to see and visit - so whatever you're feeling you can always find something that fits your moment</p>
        </div>
</div>
      
      </div>
      </div>

      
      
    )
        
}

export default Place14;
    