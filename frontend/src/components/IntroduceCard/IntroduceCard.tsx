import { ReactNode } from "react";
import "./IntroduceCard.scss";

interface CardIntroduceProps {
  title: string;
  desc: string;
  icon: ReactNode;
}

function IntroduceCard({ title, desc, icon }: CardIntroduceProps) {
  return (
    <div className="d-flex align-items-start gap-2">
      <div className="introduce-card__wrapper-icon d-flex">{icon}</div>
      <div>
        <h3>{title}</h3>
        <p>{desc}</p>
      </div>
    </div>
  );
}

export default IntroduceCard;
