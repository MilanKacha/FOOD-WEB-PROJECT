import "../../style/restorantmenu.css";
import FoodItem from "../../ui/FoodItem";
import Mini from "../../assests/fooditem/mini.avif";

const foodItemData = [
  {
    img: Mini,
    foodtitle: "Mini Masala Dosa Combo",
    foodstar: "4.9star (136-rating)",
    foodprice: "₹190",
    foodQuantity: "2 Mini Masala Dosa+1 Khara Bath+1 Vada+1 Gulab Jamun",
  },
  {
    img: Mini,
    foodtitle: "Mini Masala Dosa Combo",
    foodstar: "4.9star (136-rating)",
    foodprice: "₹190",
    foodQuantity: "2 Mini Masala Dosa+1 Khara Bath+1 Vada+1 Gulab Jamun",
  },
  {
    img: Mini,
    foodtitle: "Mini Masala Dosa Combo",
    foodstar: "4.9star (136-rating)",
    foodprice: "₹190",
    foodQuantity: "2 Mini Masala Dosa+1 Khara Bath+1 Vada+1 Gulab Jamun",
  },
  {
    img: Mini,
    foodtitle: "Mini Masala Dosa Combo",
    foodstar: "4.9star (136-rating)",
    foodprice: "₹190",
    foodQuantity: "2 Mini Masala Dosa+1 Khara Bath+1 Vada+1 Gulab Jamun",
  },
  {
    img: Mini,
    foodtitle: "Mini Masala Dosa Combo",
    foodstar: "4.9star (136-rating)",
    foodprice: "₹190",
    foodQuantity: "2 Mini Masala Dosa+1 Khara Bath+1 Vada+1 Gulab Jamun",
  },
  {
    img: Mini,
    foodtitle: "Mini Masala Dosa Combo",
    foodstar: "4.9star (136-rating)",
    foodprice: "₹190",
    foodQuantity: "2 Mini Masala Dosa+1 Khara Bath+1 Vada+1 Gulab Jamun",
  },
  {
    img: Mini,
    foodtitle: "Mini Masala Dosa Combo",
    foodstar: "4.9star (136-rating)",
    foodprice: "₹190",
    foodQuantity: "2 Mini Masala Dosa+1 Khara Bath+1 Vada+1 Gulab Jamun",
  },
  {
    img: Mini,
    foodtitle: "Mini Masala Dosa Combo",
    foodstar: "4.9star (136-rating)",
    foodprice: "₹190",
    foodQuantity: "2 Mini Masala Dosa+1 Khara Bath+1 Vada+1 Gulab Jamun",
  },
];

const RestorantMenu = () => {
  return (
    <div className="restorantmenu-wrapper">
      <div className="restorant-item">
        <span>Pavbhaji(34)</span>
        <span>Pavbhaji(34)</span>
        <span>Pavbhaji(34)</span>
        <span>Pavbhaji(34)</span>
        <span>Pavbhaji(34)</span>
        <span>Pavbhaji(34)</span>
        <span>Pavbhaji(34)</span>
        <span>Pavbhaji(34)</span>
        <span>Pavbhaji(34)</span>
      </div>
      <div className="restorant-menu">
        {foodItemData.map((item, index) => (
          <FoodItem key={index} item={item} />
        ))}
      </div>
    </div>
  );
};

export default RestorantMenu;
