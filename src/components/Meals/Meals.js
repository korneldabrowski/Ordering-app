import React from "react";

import Meal from "./Meal";

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Sushi",
    description: "Finest fish and veggies",
    price: 22.99,
  },
  {
    id: "m2",
    name: "Schnitzel",
    description: "A german specialty!",
    price: 16.5,
  },
  {
    id: "m3",
    name: "Barbecue Burger",
    description: "American, raw, meaty",
    price: 12.99,
  },
  {
    id: "m4",
    name: "Green Bowl",
    description: "Healthy...and green...",
    price: 18.99,
  },
];
const Meals = () => {
  return (
    <section
      className='bg-zinc-800 w-1/2 translate-x-1/2 rounded-xl'
      //   className='bg-white rounded-lg flex justify-center
      // w-1/2 translate-x-1/2 h-60'
    >
      <ul className='px-8 py-4'>
        {DUMMY_MEALS.map((x) => (
          <Meal
            key={x.id}
            name={x.name}
            description={x.description}
            price={x.price}
          />
        ))}
      </ul>
    </section>
  );
};

export default Meals;
