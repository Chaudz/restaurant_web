import CardIntroduce from "../IntroduceCard/IntroduceCard";
import daiHang from "../../assets/images/nhahangdaihang.jpg";
import "./Introduce.scss";
import IntroduceCardList from "../IntroduceCardList/IntroduceCardList";

function Introduce(props) {
  return (
    <div className="homepage__introduce">
      <h3>GIỚI THIỆU</h3>
      <h2>LỰA CHỌN CỦA CHÚNG TÔI?</h2>
      <div className="d-flex gap-5 flex-column flex-md-row">
        <img src={daiHang} alt="" className="homepage__introduce-img" />
        <div>
          <IntroduceCardList />
        </div>
      </div>
    </div>
  );
}

export default Introduce;
