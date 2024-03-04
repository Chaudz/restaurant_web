import Carousel from "react-bootstrap/Carousel";
import FoodCardTable from "../../components/FoodCardTable/FoodCardTable";
import "./HomePage.scss";
import Introduce from "../../components/Introduce/Introduce";

const HomePage = () => {
  return (
    <div className="homepage">
      <div className=" homepage-banner">
        <Carousel
          className="position-relative"
          style={{ zIndex: 50, height: "100vh" }}
        >
          <Carousel.Item
            interval={1000}
            style={{
              height: "100vh",
            }}
          >
            <div className="h-100 homepage-banner__wrapper-img">
              <img
                className="h-100 w-100 homepage-banner__img"
                src="https://th.bing.com/th/id/R.6a8e954074eefc930901aad221cfceb3?rik=54Wr8FZobUr%2fgw&pid=ImgRaw&r=0"
                alt=""
              />
              <div className="carousel__overlay position-absolute top-0 bottom-0 start-0 end-0"></div>
            </div>

            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item
            interval={1000}
            style={{
              height: "100vh",
            }}
          >
            <div className="h-100 homepage-banner__wrapper-img">
              <img
                className="h-100 w-100 homepage-banner__img"
                src="https://th.bing.com/th/id/R.6a8e954074eefc930901aad221cfceb3?rik=54Wr8FZobUr%2fgw&pid=ImgRaw&r=0"
                alt=""
              />
              <div className="carousel__overlay position-absolute top-0 bottom-0 start-0 end-0"></div>
            </div>

            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item
            interval={1000}
            style={{
              height: "100vh",
            }}
          >
            <div className="h-100 homepage-banner__wrapper-img">
              <img
                className="h-100 w-100 homepage-banner__img"
                src="https://th.bing.com/th/id/R.6a8e954074eefc930901aad221cfceb3?rik=54Wr8FZobUr%2fgw&pid=ImgRaw&r=0"
                alt=""
              />
              <div className="carousel__overlay position-absolute top-0 bottom-0 start-0 end-0"></div>
            </div>

            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item
            interval={1000}
            style={{
              height: "100vh",
            }}
          >
            <div className="h-100 homepage-banner__wrapper-img">
              <img
                className="h-100 w-100 homepage-banner__img"
                src="https://th.bing.com/th/id/R.6a8e954074eefc930901aad221cfceb3?rik=54Wr8FZobUr%2fgw&pid=ImgRaw&r=0"
                alt=""
              />
              <div className="carousel__overlay position-absolute top-0 bottom-0 start-0 end-0"></div>
            </div>

            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        <div className="position-absolute carousel__content d-flex flex-column align-items-center">
          <h1 className="text-center">Nhà Hàng ChouChou</h1>
          <h3 className="text-center">
            Chúng tôi rất hân hạnh được phục vụ quý khách
          </h3>
          <div>
            <button className="btn carousel__btn btn-outline-warning me-3">
              Thực đơn
            </button>
            <button className="btn carousel__btn btn-outline-warning">
              Đặt bàn
            </button>
          </div>
        </div>
      </div>
      <div
        className="position-relative homepage-content"
        style={{
          marginTop: "100vh",
          zIndex: "50",
          background: "white",
        }}
      >
        <FoodCardTable />
        <Introduce />
      </div>
    </div>
  );
};

export default HomePage;
