import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import screenUrls from "../../constants/screenUrls";
import { CiShoppingCart, CiSearch } from "react-icons/ci";
import { AiOutlineMenu } from "react-icons/ai";
import "./Header.scss";

const Header = () => {
  return (
    <div className="header d-flex align-items-center justify-content-between">
      <img src={logo} alt="" className="header_logo" />
      <div className="d-flex align-items-center gap-5 d-none">
        <ul className="d-flex gap-2 header_nav fontsize-content">
          <Link to={screenUrls.HOME}>Trang chủ</Link>
          <Link to={screenUrls.MENU}>Thực đơn</Link>
          <Link to={screenUrls.BOOKING}>Đặt bàn</Link>
          <Link to={screenUrls.INTRODUTION}>Giới thiệu</Link>
          <Link to={screenUrls.CONTACT}>Liên hệ</Link>
        </ul>
        <div className="header_search-box position-relative">
          <input type="text" placeholder="Tìm kiếm theo tên" />
          <CiSearch className="header_search-icon position-absolute top-50" />
        </div>
      </div>
      <div className="d-flex gap-1 d-none">
        <button className="btn btn-success">Đăng nhập</button>
        <button className="btn btn-success">
          <CiShoppingCart style={{ fontSize: "30px" }} />
        </button>
      </div>
      <button className="btn btn-success d-lg-none">
        <AiOutlineMenu style={{ fontSize: "25px" }} />
      </button>
    </div>
  );
};

export default Header;
