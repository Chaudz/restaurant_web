import daiHang from "../../assets/images/nhahangdaihang.jpg";
import IntroduceCardList from "../IntroduceCardList/IntroduceCardList";
import "./Introduce.scss";

function Introduce() {
  return (
    <div className="homepage__introduce">
      <h3 data-aos="fade-right">GIỚI THIỆU</h3>
      <h2 data-aos="fade-right">LỰA CHỌN CỦA CHÚNG TÔI?</h2>
      <div className="d-flex mt-2 gap-5 flex-column flex-md-row">
        <img
          data-aos="zoom-in"
          src={daiHang}
          alt=""
          className="homepage__introduce-img"
        />
        <div>
          <IntroduceCardList />
        </div>
      </div>
    </div>
  );
}

export default Introduce;
