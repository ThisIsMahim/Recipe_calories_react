import { useState } from "react";

const CookCard = ({ wannaCookArr }) => {
    const [currentCook,setCurrentCook]=useState([]);
    const addToCook=(food)=>{
        setCurrentCook((prevArr)=>[...prevArr,food])
        setTotalTime((prev)=>prev+food.cook_time)
        setTotalCalories((prev)=>prev+food.calorie)
    }
    const [totalTime,setTotalTime]=useState(0);
    const [totalCalories,setTotalCalories]=useState(0);
    
  return (
    <div className="flex flex-col gap-6 border border-[#2828283e] rounded-xl h-max">

      <div className="flex flex-col items-center gap-4 pt-[32px] px-[82px]">
        <h1 className="font-semibold font-lexend text-[24px]">
          Want to cook: {wannaCookArr.length}
        </h1>
        <hr className="w-full" />
      </div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Time</th>
              <th>Calories</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {wannaCookArr.map((food, idx) => (
              <tr key={idx}>
                <th>{idx + 1}</th>
                <td>{food.recipe_name}</td>
                <td>{food.cook_time} minutes</td>
                <td>{food.calorie} calories</td>
                <td>
                  <button className="btn text-[#150B2B] bg-[#0BE58A] border-none rounded-full h-min" onClick={()=>addToCook(food)}>
                    Prepare
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      <div className="flex flex-col items-center gap-4 pt-[32px] px-[72px]">
        <h1 className="font-semibold font-lexend text-[24px]">
          Currently cooking: {currentCook.length}
        </h1>
        <hr className="w-full" />
      </div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Time</th>
              <th>Calories</th>
              
            </tr>
          </thead>
          <tbody>
            {currentCook.map((food, idx) => (
              <tr key={idx}>
                <th>{idx + 1}</th>
                <td>{food.recipe_name}</td>
                <td>{food.cook_time} minutes</td>
                <td>{food.calorie} calories</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex gap-5 w-full justify-end font-lexend font-medium text-[#282828d6] px-4 mb-10">
        <h4>Total Time= {totalTime}</h4>
        <h4>Total Calories= {totalCalories}</h4>
      </div>
    </div>
  );
};

export default CookCard;
