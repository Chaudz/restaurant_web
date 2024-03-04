import { useState } from "react";
import { VscLayoutMenubar } from "react-icons/vsc";
import FoodFilter from "../FoodFilter/FoodFilter";
import FoodCardList from "../FoodCardList/FoodCardList";
import "./FoodCardTable.scss";

const foodCategoryList = [
  {
    id: 1,
    title: "Các món nướng",
  },
  {
    id: 2,
    title: "Các món lẩu",
  },
  {
    id: 3,
    title: "Món khai vị",
  },
  {
    id: 4,
    title: "Món chính",
  },
];

function FoodCardTable() {
  const [foodCategoryId, setFoodCategoryId] = useState(foodCategoryList[0].id);

  const handleFilterFoodCard = (value: number) => {
    setFoodCategoryId(value);
  };

  return (
    <div className="table__food w-100 py-5">
      <h3 data-aos="fade-right">THỰC ĐƠN</h3>
      <div className="d-flex justify-content-between" data-aos="fade-right">
        <h2>BẠN MUỐN ĂN GÌ</h2>
        <button className="btn btn-warning d-flex align-items-center">
          <VscLayoutMenubar className="me-2" />
          <span>Xem tất cả</span>
        </button>
      </div>
      <FoodFilter
        foodCategoryList={foodCategoryList}
        handleFilterFoodCard={handleFilterFoodCard}
      />
      <FoodCardList activeFoodCategoryId={foodCategoryId} />
    </div>
  );
}

export default FoodCardTable;
