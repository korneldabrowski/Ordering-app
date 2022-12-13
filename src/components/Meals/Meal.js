import React from "react";

const Meal = (props) => {
  return (
    <li className=' text-white w-full flex justify-between border-b-2 border-rose-900 border-solid pb-1'>
      <div className='flex flex-col'>
        <span className='font-bold'>{props.name}</span>
        <span className=' font-thin'>{props.description}</span>
        <span className='text-rose-500 font-bold'>${props.price}</span>
      </div>
      <div className='flex flex-col items-center pt-4'>
        <input type='number' placeholder='0' className=' bg-transparent w-12' />
        <button className='bg-rose-900 hover:bg-rose-800 rounded-md w-full mt-1'>
          Add
        </button>
      </div>
    </li>
  );
};

export default Meal;
