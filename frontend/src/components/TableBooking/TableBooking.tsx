import TableBookingRow from "../TableBookingRow/TableBookingRow";
import { MdPlayArrow } from "react-icons/md";
import { BsFillCaretLeftFill } from "react-icons/bs";
import "./TableBooking.scss";

const TableBooking = () => {
  return (
    <div className="table-booking">
      <div className=" table-booking__wrapper">
        <table className="table" style={{ minWidth: 700 }}>
          <tr>
            <td className="fw-bold">STT</td>
            <td className="text-start">Món ăn</td>
            <td className="fw-bold">Giá bán</td>
            <td className="fw-bold">Số lượng</td>
            <td className="fw-bold">Thành tiền</td>
            <td></td>
          </tr>
          <TableBookingRow />
        </table>
      </div>
      <div className="d-flex flex-md-row flex-column justify-content-between mt-1">
        <div className="d-flex gap-1 flex-wrap" style={{ height: 40 }}>
          <button className="btn btn-primary d-flex align-items-center">
            <BsFillCaretLeftFill />
            Tiếp tục chọn món
          </button>
          <button className="btn btn-danger">Xoá hết</button>
          <button className="btn btn-success d-flex align-items-center">
            Thanh toán <MdPlayArrow />
          </button>
        </div>
        <div
          className="d-flex flex-column mt-5 mt-md-0"
          style={{ minWidth: 250 }}
        >
          <div className="d-flex justify-content-between">
            <p>Tạm tính:</p>
            <p className="fw-bold">300.000 đ</p>
          </div>
          <div className="d-flex justify-content-between">
            <p>Khuyến mãi:</p>
            <p></p>
          </div>
          <div className="d-flex justify-content-between">
            <p>Tổng cộng:</p>
            <p className="text-danger fw-bold">300.000 đ</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TableBooking;
