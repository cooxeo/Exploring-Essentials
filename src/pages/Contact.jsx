import React from 'react'
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2'
import mm from '../assets/mm.jpeg'

export default function Contact() {
    
    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_9sfc0cm', 'template_6dyew9f', form.current, {
        publicKey: '9lJCt-0Dr0g0a8U2K',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  function Alert (){
    Swal.fire({
        title: "Thank You!",
        text: "Your message has been sent.",
        icon: "success"
      });
  }
  

  return (
<>
    <div className='bg-white'>
    <div className='w-full pt-[88px]'>
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3784.4295561423537!2d73.82958777528361!3d18.464191970893836!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc29586399c76e7%3A0xeb8e5e266282de6!2sRaigad%20Boys%20Hostel%2C%20IIIT%20Pune!5e0!3m2!1sen!2sin!4v1714229569453!5m2!1sen!2sin" width="100%" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>

    </div>
    

<div className="overflow-hidden py-4 sm:py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8  sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">

      <div className=" text-center h-auto pb-24 w-full  mx-auto ">
    <p className='text-black pb-10  font-extrabold text-5xl py-6'>Love to hear from you.</p>
    <form className='text-start w-full sm:w-[600px]bw-[300px] rounded-sm shadow-2xl h-auto items-center flex flex-col mx-auto  text-black font-medium bg-white p-4 ' ref={form} onSubmit={sendEmail}>
      <label className='sm:w-[450px] w-[300px]'>Your Name</label>
      <input className='sm:w-[450px] w-[300px] py-1 my-2 rounded-sm text-black px-2 border-2 border-gray-500' type="text" name="from_name"/>
      <label className='sm:w-[450px] w-[300px]'>Your Email</label>
      <input className='sm:w-[450px] w-[300px] py-1 my-2 rounded-sm text-black px-2 border-2 border-gray-500' type="email" name="email_id" />
      <label className='sm:w-[450px] w-[300px]'>Your Message</label>
      <textarea className='sm:w-[450px] w-[300px] h-[150px] py-1 my-2 rounded-sm text-black px-2 border-2 border-gray-500' name="message" />
      <input onClick={Alert} className='bg-orange-800 my-4 text-xl text-white p-4 hover:bg-orange-700 sm:w-[450px] w-[300px] rounded-sm' type="submit" value="Send" />
      
    </form>
    </div>
              
              {/* <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                {feature.map((feature) => (
                  <div key={feature.name} className="relative px-4">
                    <dt className="inline font-bold sm:text-2xl text-xl text-pink-700">
                      {feature.name}
                    </dt>{' '}
                    <dd className="inline font-semibold">{feature.description}</dd>
                  </div>
                ))}
              </dl> */}
              {/* <div className='mx-auto max-w-7xl lg:px-4 sm:flex flex-wrap mt-8 text-center sm:justify-between py-4'>
            <button className='border-2 border-pink-700 h-14 rounded-full px-4 text-pink-700 font-bold hover:bg-pink-800 hover:text-white'>Booking and travelling</button>
            <button className='border-2 border-pink-700 h-14 rounded-full px-4 mt-4 sm:mt-0 text-pink-700 font-bold hover:bg-pink-800 hover:text-white'>Hosting experinces</button>
            </div> */}
            </div>
          </div>
          <img
            src={mm}
            alt="Product screenshot"
            className="w-[36rem] mb-16 max-w-none rounded-xl shadow-lg ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0 "
            width={2432}
            height={1442}
          />
        </div>
      </div>
    </div>
</>

  );
}
