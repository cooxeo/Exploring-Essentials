import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Pagination } from 'swiper/modules';
import { RxArrowTopRight } from 'react-icons/rx';
import { ServiceData } from '../constants';
import bg from '../assets/bg.jpg';

const Sefety = () => {
  return (
    <div>
      <div className="w-full h-[600px]  relative object-cover top-0  p-0">
        <img
          className="w-full h-[600px] object-cover p-0 absolute bottom-0 inset-x-0 clip-bottom"
          src={bg}
        />
        <div className="absolute w-full h-full top-0 left-0 bg-gray-900/30"></div>
        <div className="  h-full top-0 absolute w-full  flex flex-col justify-center text-center text-white p-4">
          <div>
            <p className="font-normal text-lg">Go where you feel most alive.</p>
            <h1 className="sm:text-5xl text-4xl font-semibold text-white">
              Health <span className="text-orange-500">and</span> safety travel
              tips.
              <span className="text-orange-500 sm:text-6xl text-5xl"></span>
            </h1>
          </div>
        </div>
      </div>
      <div className="max-w-[1240px] mx-auto mt-10 px-10">
        <h3 className="text-3xl sm:text-4xl font-semibold py-6 ">
          Travel Advice
        </h3>
        <p className=" text-lg pt-6 text-slate-900  font-normal py-2 ">
          The traveler is always planning that next trip. Across tourist
          attractions, hotels and restaurants are open and ready to be enjoyed.
          Of course, the best way to make the most of any trip is to stay up to
          speed on the latest health and travel advice, and to take practical
          precautions. So, whether you’re planning a luxury getaway or a
          cross-country road trip, here are some tips to make your adventure
          worry- and stress-free.
        </p>
        <img
          className="w-full h-[600px] object-cover pt-24 pb-10 "
          src="https://images.pexels.com/photos/3885497/pexels-photo-3885497.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        />
      </div>
      <div className="max-w-[1240px] mx-auto mt-10 px-10">
        <h3 className="text-3xl sm:text-4xl font-semibold ">Stay Informed</h3>
        <p className=" text-lg pt-6 text-slate-900  font-normal py-2 ">
          Stay updated on current events and any health or safety advisories for
          your destination. Sign up for travel alerts from your government's
          travel advisory website.{' '}
          <span className="text-orange-500">& Stay Connected</span> Share your
          itinerary with someone you trust and check in regularly. Keep your
          phone charged and carry a portable charger in case you need to contact
          someone in an emergency.
        </p>
      </div>

      <div className="max-w-[1240px] mx-auto mt-10 px-10 mb-24">
        <h1 className="text-3xl sm:text-4xl font-semibold max-w-[1240px] mx-auto pt-24 ">
          {' '}
          Things You Must Carry With You.
        </h1>
        <p className=" text-lg pt-6 text-slate-900  font-normal py-2 ">
          When embarking on a long journey, it's crucial to pack essential items
          for comfort, safety, and preparedness. Begin by ensuring you have all
          necessary travel documents, including passports, visas, tickets, and
          insurance information. Bring along sufficient cash, credit/debit
          cards, and chargers for your electronic devices. Pack comfortable
          clothing suitable for various climates, along with toiletries and
          medications. Don't forget a first aid kit with essentials like
          bandages, pain relievers, and motion sickness medication. For added
          comfort during transit, bring a travel pillow and blanket, along with
          snacks and entertainment. Remember to include a reusable water bottle,
          travel adapter, and power bank for convenience. It's also wise to
          carry sunscreen, sunglasses, and personal identification. Lastly, have
          emergency contact information readily available, and consider items
          like travel locks and a reusable shopping bag for added convenience.
          With these essentials, you'll be well-prepared for your long journey
          ahead.
        </p>
      </div>
    </div>
  );
};

export default Sefety;
