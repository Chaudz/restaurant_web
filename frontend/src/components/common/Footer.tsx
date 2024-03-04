import { Link } from "react-router-dom";
import Logo from "../../assets/images/logodaihang.jpg";
import screenUrls from "../../constants/screenUrls";
import { FaChevronRight } from "react-icons/fa";
import "./Footer.scss";

const Footer = () => {
  return (
    <footer
      style={{
        background: "black",
        zIndex: "50",
      }}
      className="px-5 py-3 d-flex align-items-md-start flex-column flex-md-row justify-content-md-between align-items-center position-relative"
    >
      <div className="d-flex flex-column align-items-center align-items-md-start footer__wrapper-contact">
        <img
          src={Logo}
          alt=""
          style={{
            width: "100px",
          }}
          className="mb-4"
        />
        <p className="text-center">151 Hồ Nguyên Trừng, Khuê Trung, Cẩm Lệ</p>
        <p>Phone: 0362091690</p>
        <p>Email: buichau40@gmail.com</p>
      </div>
      <div className="footer__wrapper-nav mt-4 mt-md-0 d-flex align-items-md-start flex-column align-items-center">
        <h3>Liên kết</h3>
        <ul className="footer-nav d-flex flex-column fontsize-content">
          <Link to={screenUrls.HOME}>
            <FaChevronRight style={{ color: "yellow" }} /> Trang chủ
          </Link>
          <Link to={screenUrls.MENU}>
            <FaChevronRight style={{ color: "yellow" }} /> Thực đơn
          </Link>
          <Link to={screenUrls.BOOKING}>
            <FaChevronRight style={{ color: "yellow" }} /> Đặt bàn
          </Link>
          <Link to={screenUrls.INTRODUTION}>
            <FaChevronRight style={{ color: "yellow" }} /> Giới thiệu
          </Link>
          <Link to={screenUrls.CONTACT}>
            <FaChevronRight style={{ color: "yellow" }} /> Liên hệ
          </Link>
        </ul>
      </div>
      <div className="footer__wrapper-suport align-items-md-start mt-4 mt-md-0 d-flex flex-column align-items-center">
        <h3>Hỗ trợ</h3>
        <ul className="footer-nav d-flex flex-column align-items-md-start align-items-center fontsize-content">
          <Link to={screenUrls.HOME}>
            <FaChevronRight style={{ color: "yellow" }} /> Điều khoản sử dụng
          </Link>
          <Link to={screenUrls.MENU}>
            <FaChevronRight style={{ color: "yellow" }} /> Hướng dẫn đặt bàn
          </Link>
          <Link to={screenUrls.BOOKING}>
            <FaChevronRight style={{ color: "yellow" }} /> Hướng dẫn đăng ký
          </Link>
          <Link to={screenUrls.INTRODUTION}>
            <FaChevronRight style={{ color: "yellow" }} /> Thẻ thanh toán
          </Link>
        </ul>
      </div>
      <div className="footer__wrapper-fill mt-4 mt-md-0 d-flex flex-column align-items-md-start align-items-center">
        <p className="text-center">Đăng ký nhận tin</p>
        <p className="text-center">
          Đăng ký nhận tin để nhận thông tin mới nhất của chúng tôi
        </p>
        <div className="footer__fill-box mt-2 d-flex">
          <input type="text" className="w-100 px-2 py-3" />
          <button className="btn btn-primary rounded-0">Đăng ký</button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
