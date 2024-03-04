import { useState } from "react";

interface IProps {
  id: number;
  title: string;
}

function FoodFilter(props: {
  foodCategoryList: IProps[];
  handleFilterFoodCard: (categoryId: number) => void;
}) {
  const { foodCategoryList, handleFilterFoodCard } = props;

  const [isActice, setIsActice] = useState(foodCategoryList[0].id);

  return (
    <div className="d-flex justify-content-start me-5 mt-3">
      <div className="d-flex gap-2 flex-wrap">
        {foodCategoryList.map((foodTitle, index) => {
          return (
            <button
              key={index}
              className={`btn btn-outline-warning food__nav-btn ${
                isActice == foodTitle.id ? "active" : ""
              }`}
              onClick={() => {
                setIsActice(foodTitle.id);
                handleFilterFoodCard(foodTitle.id);
              }}
            >
              {foodTitle.title}
            </button>
          );
        })}
      </div>
    </div>
  );
}

FoodFilter.propTypes = {};

export default FoodFilter;
