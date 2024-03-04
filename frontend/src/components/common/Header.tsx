import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logodaihang.jpg";
import screenUrls from "../../constants/screenUrls";
import { CiShoppingCart, CiSearch } from "react-icons/ci";
import { AiOutlineMenu } from "react-icons/ai";
import { IoCloseSharp } from "react-icons/io5";
import "./Header.scss";

const Header = () => {
  const [dropMenu, setDropMenu] = useState(false);

  const handleToggleMenu = () => {
    setDropMenu(!dropMenu);
  };

  return (
    <div className="header position-fixed start-0 top-0 end-0 d-flex align-items-center justify-content-between">
      <img src={logo} alt="" className="header_logo" />
      <div
        className={`header_nav-menu align-md-items-center gap-md-5 d-flex flex-md-row flex-column ${
          dropMenu ? "active" : ""
        }`}
      >
        <ul className="d-flex flex-md-row align-md-items-center flex-column gap-2 header_nav fontsize-content">
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
        <button
          className="btn btn-outline-primary btn-close_dropmenu position-absolute d-md-none"
          onClick={handleToggleMenu}
        >
          <IoCloseSharp style={{ fontSize: "30px" }} />
        </button>
      </div>
      <div className="gap-1 d-none d-md-flex">
        <button className="btn btn-success">Đăng nhập</button>
        <button className="btn btn-success">
          <CiShoppingCart style={{ fontSize: "30px" }} />
        </button>
      </div>
      <button
        className="btn btn-outline-warning d-lg-none"
        onClick={handleToggleMenu}
      >
        <AiOutlineMenu style={{ fontSize: "25px" }} />
      </button>
      <div
        onClick={handleToggleMenu}
        className={`overlay d-none ${dropMenu ? "active" : ""}`}
      ></div>
    </div>
  );
};

export default Header;
