import { useEffect, useState } from "react";
import "./FoodCardList.scss";
import FoodCard from "../FoodCard/FoodCard";

interface IFoodCardListProps {
  activeFoodCategoryId: number;
}

interface IFoodCard {
  id: number;
  title: string;
  img: string;
  price: number;
  categoryId: number;
}

const foodCardList: IFoodCard[] = [
  {
    id: 1,
    title: "Tôm hải sản",
    img: "https://healingthebody.ca/wp-content/uploads/2017/06/7095615705_a2d02ddaed_o-1600x800.jpg",
    price: 200000,
    categoryId: 1,
  },
  {
    id: 2,
    title: "Mực xào sa tế",
    img: "https://healingthebody.ca/wp-content/uploads/2017/06/7095615705_a2d02ddaed_o-1600x800.jpg",
    price: 200000,
    categoryId: 1,
  },
  {
    id: 3,
    title: "Cua sốt ớt",
    img: "https://healingthebody.ca/wp-content/uploads/2017/06/7095615705_a2d02ddaed_o-1600x800.jpg",
    price: 200000,
    categoryId: 1,
  },
  {
    id: 4,
    title: "Gỏi cuốn",
    img: "https://healingthebody.ca/wp-content/uploads/2017/06/7095615705_a2d02ddaed_o-1600x800.jpg",
    price: 200000,
    categoryId: 2,
  },
  {
    id: 5,
    title: "Bún riêu cua",
    img: "https://healingthebody.ca/wp-content/uploads/2017/06/7095615705_a2d02ddaed_o-1600x800.jpg",
    price: 200000,
    categoryId: 2,
  },
  {
    id: 6,
    title: "Phở gà",
    img: "https://healingthebody.ca/wp-content/uploads/2017/06/7095615705_a2d02ddaed_o-1600x800.jpg",
    price: 200000,
    categoryId: 3,
  },
  {
    id: 7,
    title: "Bánh mì chảo",
    img: "https://healingthebody.ca/wp-content/uploads/2017/06/7095615705_a2d02ddaed_o-1600x800.jpg",
    price: 200000,
    categoryId: 3,
  },
  {
    id: 8,
    title: "Sushi cá ngừ",
    img: "https://healingthebody.ca/wp-content/uploads/2017/06/7095615705_a2d02ddaed_o-1600x800.jpg",
    price: 200000,
    categoryId: 4,
  },
  {
    id: 9,
    title: "Mì quảng",
    img: "https://healingthebody.ca/wp-content/uploads/2017/06/7095615705_a2d02ddaed_o-1600x800.jpg",
    price: 200000,
    categoryId: 4,
  },
];

function FoodCardList(props: IFoodCardListProps) {
  const { activeFoodCategoryId } = props;
  const [filterFoodCard, setFilterFoodCard] = useState<IFoodCard[]>([]);

  useEffect(() => {
    console.log(activeFoodCategoryId);
    const filteredFoodCard = foodCardList.filter((foodCard) => {
      return foodCard.categoryId === activeFoodCategoryId;
    });

    setFilterFoodCard(filteredFoodCard);
  }, [activeFoodCategoryId]);

  return (
    <div className="food-list__wrapper w-100 d-flex flex-wrap justify-content-center justify-content-md-start gap-4 pe-md-5 mt-3">
      {filterFoodCard.map((foodCard, index) => {
        return <FoodCard key={index} foodCard={foodCard} />;
      })}
    </div>
  );
}

export default FoodCardList;
