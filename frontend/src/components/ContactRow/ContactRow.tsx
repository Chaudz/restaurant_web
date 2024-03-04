import { ReactNode } from "react";
import "./ContactRow.scss";

interface IProps {
  title: string;
  content: string;
  icon: ReactNode;
}

function ContactRow(props: IProps) {
  return (
    <div className="d-flex align-items-center gap-2">
      <div
        className="d-flex p-2"
        style={{
          fontSize: "20px",
          backgroundColor: "orange",
        }}
      >
        {props.icon}
      </div>
      <div>
        <h2>{props.title}</h2>
        <p>{props.content}</p>
      </div>
    </div>
  );
}

export default ContactRow;
