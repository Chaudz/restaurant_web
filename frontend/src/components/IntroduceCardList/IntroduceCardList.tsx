import { MdMenuBook } from "react-icons/md";
import IntroduceCard from "../IntroduceCard/IntroduceCard";

const introduceList = [
  {
    id: 1,
    title: "Thực đơn phong phú",
    desc: "Đa dạng thực đơn nhiều combo hấp dẫn",
    icon: <MdMenuBook />,
  },
  {
    id: 2,
    title: "Không gian rộng rãi",
    desc: "Ấm cúng - độc lạ - Tha hồ Check in. Phòng riêng biệt danh cho sinh nhật, hội họp",
    icon: <MdMenuBook />,
  },
  {
    id: 3,
    title: "Phục vụ miễn chê",
    desc: "Chu đáo - tận tình - hết mình vì thực khách",
    icon: <MdMenuBook />,
  },
];

function IntroduceCardList() {
  return (
    <div className="d-flex flex-column gap-3">
      {introduceList.map((introduceCard, index) => {
        return (
          <IntroduceCard
            key={index}
            title={introduceCard.title}
            desc={introduceCard.desc}
            icon={introduceCard.icon}
          />
        );
      })}
    </div>
  );
}

export default IntroduceCardList;
