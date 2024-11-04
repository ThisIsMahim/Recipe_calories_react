import CookCard from "./CookCard";
import FoodCard from "./FoodCard";
import { useState, useEffect } from "react";
const Main = ({mainRef}) => {
    // fetching data from json
  const [foods, setFoods] = useState([]);
  useEffect(() => {
    fetch("foods.json")
      .then((res) => res.json())
      .then((foods) => setFoods(foods));
  }, []);
//   wannaCook
const [wannaCook,setWannaCook]=useState([]);
const addToWannaCook=(food)=>{
    const newWannaCook=[...wannaCook,food]
    setWannaCook(newWannaCook)
}
  return (
    <div ref={mainRef} className="mt-16 lg:mt-24 w-full flex-col flex items-center justify-center">
      <div className="flex flex-col gap-6 font-lexend w-[80%] text-center mb-12">
        <h1 className="font-semibold text-[#150B2B] text-4xl">Our Recipes</h1>
        <p className="text-[#150b2bc0]">
          Lorem ipsum dolor sit amet consectetur. Proin et feugiat senectus
          vulputate netus pharetra rhoncus. Eget urna volutpat curabitur
          elementum mauris aenean neque.
        </p>
      </div>
      <div className="flex flex-col md:flex-row gap-6">
        <div className="grid md:grid-cols-2 gap-6">
          {foods.map((food) => (
            <FoodCard key={food.recipe_id} food={food} addToWannaCook={addToWannaCook} />
          ))}
        </div>
        <CookCard wannaCookArr={wannaCook}/>
      </div>
    </div>
  );
};

export default Main;
