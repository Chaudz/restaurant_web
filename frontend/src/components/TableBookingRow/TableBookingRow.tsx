import Food from "../../assets/images/food.jpg";
import { FaRegTrashAlt } from "react-icons/fa";
import "./TableBookingRow.scss";

const TableBookingRow = () => {
  return (
    <tr>
      <td>1</td>
      <td>
        <div className="d-flex align-items-center gap-2">
          <img
            src={Food}
            alt=""
            style={{ width: 50, height: 40, objectFit: "cover" }}
          />
          <p>Tôm trứng muối</p>
        </div>
      </td>
      <td>85.000 đ</td>
      <td>
        <div className="d-flex align-items-center gap-2 justify-content-center">
          <button className="btn btn-primary px-3">-</button>
          <p>5</p>
          <button className="btn btn-primary px-3">+</button>
        </div>
      </td>
      <td>85.000 đ</td>
      <td>
        <div>
          <button className="btn btn-danger">
            <FaRegTrashAlt />
          </button>
        </div>
      </td>
    </tr>
  );
};

export default TableBookingRow;
