import { CiTimer } from "react-icons/ci";
import { MdOutlineLocalFireDepartment } from "react-icons/md";
const FoodCard = ({ food,addToWannaCook }) => {
  const { food_img, recipe_name, food_desc, ingredients, cook_time, calorie } =
    food;
  return (
    <div className="p-6 flex flex-col gap-6 border border-[#2828283e] rounded-xl">
      <img src={food_img} className="w-full h-48 rounded-2xl border object-cover " alt="food" />
      <h3 className="font-semibold text-[#282828] font-lexend">{recipe_name}</h3>
      <p className="font-fira-sans text-[#878787]">{food_desc}</p>
      <hr />
      <h3 className="font-lexend font-semibold text-[#282828]">
        Ingredients: {ingredients.length}
      </h3>
      <ul className="font-fira-sans text-[#878787]">
        {ingredients.map((ingredient, idx) => (
          <li key={idx}>{ingredient}</li>
        ))}
      </ul>
      <hr />
      <div className="font-fira-sans text-[#282828bd] flex gap-6">
        <div className="flex gap-2 items-center">
          <CiTimer />
          <p>{cook_time} minutes</p>
        </div>
        <div className="flex gap-2 items-center">
          <MdOutlineLocalFireDepartment />
          <p>{calorie} calories</p>
        </div>
      </div>
      <button className="btn text-[#150B2B] bg-[#0BE58A] border-none rounded-full" onClick={()=>addToWannaCook(food) }>
        Want to Cook
      </button>
    </div>
  );
};

export default FoodCard;
