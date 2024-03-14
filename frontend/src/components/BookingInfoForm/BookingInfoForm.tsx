import { IoIosSend } from "react-icons/io";
import "./BookingInfoForm.scss";

const BookingInfoForm = () => {
  return (
    <div className="booking-info__form p-4">
      <h1 className="text-center">Thông tin đặt bàn</h1>
      <div>
        <div className="d-flex gap-md-5 gap-2 flex-wrap">
          <input type="text" placeholder="Họ tên" />
          <input type="date" placeholder="Chọn ngày" />
          <input type="text" placeholder="Số khách" />
        </div>
        <div className="mt-3 d-flex gap-md-5 gap-2 flex-wrap">
          <input type="text" placeholder="Số điện thoại" />
          <select className="ours-option">
            <option>Chọn khung giờ</option>
            <option value="">7 - 8 giờ</option>
            <option value="">8 - 10 giờ</option>
            <option value="">10 - 12 giờ</option>
          </select>
        </div>
        <textarea
          placeholder="Lời nhắn với nhà hàng"
          className="w-100 mt-4 p-2"
          style={{ outline: "none" }}
        />
        <div className="d-flex justify-content-center mt-3">
          <button className="btn btn-warning d-flex align-items-center gap-2">
            <IoIosSend />
            <p> Gửi đơn đặt bàn</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookingInfoForm;
