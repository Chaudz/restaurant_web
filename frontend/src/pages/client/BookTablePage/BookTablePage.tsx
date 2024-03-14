import BookingInfoForm from "../../../components/BookingInfoForm/BookingInfoForm";
import Breadcrumb from "../../../components/Breadcrumb/Breadcrumb";
import TableBooking from "../../../components/TableBooking/TableBooking";
import "./BookTablePage.scss";

const BookTablePage = () => {
  return (
    <div className="booking-page">
      <Breadcrumb />
      <div className="p-4">
        <TableBooking />
        <div className="mt-5"></div>
        <BookingInfoForm />
      </div>
    </div>
  );
};

export default BookTablePage;
