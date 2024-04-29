'use client'
import React from 'react' 
import { ReactTyped } from "react-typed";
import ab from '../assets/ab.jpg'
import { NavLink } from 'react-router-dom';

const About = () => {

  const scrollToTop = () => {
    window.scrollTo(0, 0)
  }


  return (
    <>
    <div >
      <div >
        <img className=' absolute w-full object-cover pt-6 h-[600px] md:h-2/3 ' src={ab} />
      </div>
      <div className=' max-w-[1240px] mx-auto relative pt-24 flex inset-0 justify-center items-center z-10 text-5xl font-bold '>
            <div className=' text-black pt-24  text-2xl sm:text-6xl sm:pt-14
             md:text-4xl lg:text-4xl lg:pt-16 xl:text-4xl text-start my-auto w-full 
               leading-10 items-center max-w-[1240px] mx-auto pl-4 sm:px-10 mt-10 
              '>
              <h2 className="line-height-md  md:line-height-md lg:line-height-lg xl:line-height-xl">Our mission is to help people</h2>
              <h2 className="line-height-md md:line-height-md lg:line-height-lg xl:line-height-xl">see tour in new ways</h2>
              <h2 className="line-height-md md:line-height-md lg:line-height-lg xl:line-height-xl">discover insights, unlock</h2>
              <h2 className="line-height-md md:line-height-md lg:line-height-lg xl:line-height-xl">
                endless <ReactTyped className='text-orange-600'
                strings={["Possibilities..","Opportunities","Alternatives.."]}
                 typeSpeed={100}
                 loop={true}
                 backSpeed={50} />
    <br />
              </h2>
            </div>
          
  

      </div>

    </div>
    
    <div className='max-w-[1240px] mx-auto mt-44 sm:mt-10 md:mt-44 '>
    <div >
      <h2 className=' sm:pl-10 p-5 font-semibold text-2xl pl-10
      underline transition duration-300 pt-32 md:mt-24 md:pt-44'>About us</h2>
      <p className=' m-10 
        font-light text-lg  text-justify'>Allow me to introduce the dynamic quartet behind our innovative team. First up is Kishan, our adept front-end developer, whose keen eye for detail and mastery of coding languages ensures seamless user experiences. Next, we have Vishal, our versatile full-stack developer, whose expertise spans across both front and back-end development, enriching our projects with robust functionality. Joining them is Ganesh, our visionary UI/UX designer, whose creative flair and intuitive understanding of user needs transform concepts into captivating interfaces. Lastly, Saikiran, another skilled front-end developer, whose dedication to crafting responsive and visually appealing designs elevates our digital platforms to new heights. Together, their diverse skill sets converge to drive innovation and excellence in every endeavor we undertake.</p>
    </div>



  
  <div className=' mx-10 h-80 bg-black text-slate-200 flex justify-center align-middle items-center '>
    <div className='flex items-center px-6'><h2 className=' text-lg pr-14'>
      Find out about our exiciting Tours.
    </h2>
    <NavLink onClick={scrollToTop} to='/home'><button className=' bg-orange-600 hover:bg-orange-500 w-32 text-yellow-50 p-4 rounded size-min'> Click here</button></NavLink></div>
  </div>

  <div className=' py-10 px-4 max-w-[1240px] mx-auto'>
    <p className=' font-semibold text-2xl p-5'>Tourists invest in guides and exploration expenses but often overlook essential items,
       which can be time-consuming and problematic.</p>
       <p className=' font-light text-base p-5 text-justify'>At Exploring Essentials we know that no two travelers are identical. That's why our itineraries are merely a sample of the tours available,
         an indication of the scope of services we provide.
         With the wealth of our experience, we offer you a range of options that will fulfill your dreams and your needs, to help you make the perfect choice.</p>

        <p className=' font-light text-base p-5 text-justify'>
        Exploring Essentials Agency strongly believes and follows the concept of fulfilling DREAMS i.e. "A DREAM VACATION”.
         It refers to the philosophy of continuous improvement of working practices to provide prompt and quality services with complete customer satisfaction.
         Being aware of travelers' ever-evolving needs, we always ensure to cater unique destination concepts, which have been acknowledged as innovations in the Indian Tourism Industry.
         We do have a Classified Tours like My Kitty Club for Ladies, Honeymoon tours, Pilgrimage tours, Senior Citizens and Students' Special tours as well.
         So, if you are planning a trip - just let us know the details of your travel period, budget and desired destinations & we'll plan and organize for you the Most Memorable Holiday!
        </p>
        <div className="  underline-thick transition duration-300"></div>
  </div>


    
    </div>

    </>
  )
}
 
export default About