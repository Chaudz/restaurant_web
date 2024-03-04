import ContactRow from "../ContactRow/ContactRow";
import { TiLocationOutline } from "react-icons/ti";
import { IoMdMail } from "react-icons/io";
import { FaPhone } from "react-icons/fa6";
import "./Contact.scss";

const contactRowList = [
  {
    id: 1,
    title: "Địa chỉ",
    content: "151 Hồ Nguyên Trừng, Khuê Trung, Cẩm Lệ",
    icon: <TiLocationOutline />,
  },
  {
    id: 2,
    title: "Email",
    content: "buichau40@gmail.com",
    icon: <IoMdMail />,
  },
  {
    id: 3,
    title: "Điện thoại",
    content: "0362091690",
    icon: <FaPhone />,
  },
];

function Contact() {
  return (
    <div className="d-flex flex-column flex-md-row gap-2 mt-3 contact__wrapper pb-5">
      <div className="contact__wrapper-left d-flex flex-column gap-3">
        {contactRowList.map((contactRow, index) => {
          return (
            <ContactRow
              key={index}
              title={contactRow.title}
              content={contactRow.content}
              icon={contactRow.icon}
            />
          );
        })}
      </div>
      <div className="ps-md-4 contact__wrapper-right">
        <div className="d-flex gap-2">
          <input
            type="text"
            className="contact__fill name p-2"
            placeholder="Họ và tên"
          />
          <input
            type="text"
            className="contact__fill email p-2"
            placeholder="Địa chỉ Email"
          />
        </div>
        <div className="mt-2">
          <textarea
            name=""
            id=""
            cols={30}
            rows={10}
            style={{
              width: "100%",
            }}
            placeholder="Nội dung tin nhắn"
            className="contact__fill p-2"
          ></textarea>
        </div>
        <div className="d-flex justify-content-center">
          <button className="btn btn-warning">Gửi tin nhắn</button>
        </div>
      </div>
    </div>
  );
}
export default Contact;
