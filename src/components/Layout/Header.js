import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <header>
      <div className=' bg-rose-900 w-full pb-1 font-mono fixed z-50'>
        <div className=' text-white flex items-center justify-around p-2'>
          <p className='text-3xl'>Food Frenzy </p>
          <span className=' p-2 bg-black hover:bg-zinc-800 rounded-2xl '>
            <button>
              <FontAwesomeIcon icon={faCartShopping} /> Your Cart
            </button>
            <span className='bg-rose-700 rounded-xl py-1 px-2 ml-2'>0</span>
          </span>
        </div>
      </div>
      <div class=' h-96 -z-10 overflow-hidden'>
        <img
          src='https://i.imgur.com/vlpfsIn.jpg'
          className=' w-[200%] h-full object-cover -translate-y-12 scale-105 -rotate-2'
          alt='food'
        />
      </div>

      <div className='flex justify-center  -translate-y-1/2 '>
        <div
          className=' bg-zinc-800 text-white rounded-3xl shadow-black shadow-sm 
             w-2/5 -top-3/4 p-5'
        >
          <h1 className='text-center text-2xl font-bold text-zinc-200 mb-4'>
            Discover your next food obsession.
          </h1>
          <p className=' text-justify leading-7 text-zinc-400'>
            Join the Food Frenzy and discover a world of delicious food. Our
            platform offers a diverse selection of restaurants and menus, so you
            can explore new flavors and cuisines. <br /> With our easy-to-use
            platform, you can customize your order and have it delivered
            straight to your door. Don't miss out on the fun - start your Food
            Frenzy today!
          </p>
        </div>
      </div>
    </header>
  );
};

export default Header;
