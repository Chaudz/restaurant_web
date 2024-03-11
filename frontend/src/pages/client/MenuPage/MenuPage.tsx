import { useEffect, useState } from "react";
import Breadcrumb from "../../../components/Breadcrumb/Breadcrumb";
import FoodCard from "../../../components/FoodCard/FoodCard";
import {
  foodCategoryList,
  foodCardList,
  priceRanges,
} from "../../../assets/data/data";
import "./MenuPage.scss";

function MenuPage() {
  const [categoryActive, setCategoryActive] = useState(foodCardList[0].id);
  const [visible, setVisible] = useState(3);
  const [idPriceActive, setIdPriceActive] = useState(priceRanges[0].id);
  const [showMoreButton, setShowMoreButton] = useState(true);
  const [filteredFoods, setFilteredFoods] = useState(foodCardList);

  const hanleLoadMore = () => {
    setVisible((visible) => visible + 3);
  };

  useEffect(() => {
    const priceActice = priceRanges.filter(
      (price) => price.id == idPriceActive
    )[0];
    const listFood = foodCardList.filter(
      (food) =>
        food.categoryId === categoryActive &&
        food.price >= priceActice.min &&
        food.price <= priceActice.max
    );
    const visibleFoods = listFood.filter((_, index) => index < visible);

    setFilteredFoods(visibleFoods);
    setShowMoreButton(listFood.length > visible);
  }, [visible, categoryActive, idPriceActive]);

  return (
    <div className="menupage">
      <Breadcrumb />
      <div className="p-4 d-flex flex-column flex-md-row">
        <div className="box-left">
          <div className="nav__wrapper w-100">
            <p className="fw-bold fs-5">Thực đơn</p>
            <div className="d-flex flex-wrap gap-2 flex-md-column">
              {foodCategoryList.map((category, index) => {
                return (
                  <button
                    key={index}
                    className={`nav-menu btn btn-outline-warning ${
                      category.id === categoryActive ? "active" : ""
                    }`}
                    onClick={() => {
                      setCategoryActive(category.id);
                      setVisible(3);
                    }}
                  >
                    {category.title}
                  </button>
                );
              })}
            </div>
          </div>
          <div className="mt-4">
            <p className="fs-5 fw-bold">Bộ lọc</p>
            <div>
              {priceRanges.map((price) => {
                return (
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="flexRadioDefault"
                      id={`${price.id}`}
                      onChange={() => {
                        setIdPriceActive(price.id);
                      }}
                      checked={idPriceActive == price.id && true}
                    />
                    <label className="form-check-label" htmlFor={`${price.id}`}>
                      {price.title}
                    </label>
                  </div>
                );
              })}
              <br></br>
            </div>
          </div>
        </div>
        <div className=" list-food__wrapper d-flex flex-column justify-content-center">
          <div className="mt-2 d-flex flex-wrap gap-2 ms-md-4">
            {filteredFoods.length === 0 && (
              <p className="fs-5 fw-bold text-danger text-center w-100">
                Not food!!{" "}
              </p>
            )}
            {filteredFoods.map((food, index) => {
              return <FoodCard key={index} foodCard={food} />;
            })}
          </div>
          <div className="d-flex justify-content-center mt-2">
            {showMoreButton && (
              <button className="btn btn-success px-4" onClick={hanleLoadMore}>
                Xem thêm
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default MenuPage;
