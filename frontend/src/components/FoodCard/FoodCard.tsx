import { Card, CardImg, Button, CardBody, CardText } from "react-bootstrap";
import "./FoodCard.scss";

interface IFoodCard {
  id: number;
  title: string;
  img: string;
  desc: string;
}

function FoodCard(props: { foodCard: IFoodCard }) {
  const { foodCard } = props;

  return (
    <Card style={{ width: "18rem" }} className="food-card" data-aos="zoom-in">
      <div className="food-card__wrapper-img">
        <CardImg variant="top" src={foodCard.img} />
      </div>
      <CardBody>
        <Card.Title>{foodCard.title}</Card.Title>
        <CardText>{foodCard.desc}</CardText>
        <div className="mt-2">
          <Button className="me-2 btn btn-warning">Đặt món</Button>
          <Button className="btn btn-warning">Xem chi tiết</Button>
        </div>
      </CardBody>
    </Card>
  );
}

export default FoodCard;
