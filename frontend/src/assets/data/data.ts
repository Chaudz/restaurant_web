interface IFoodCard {
  id: number;
  title: string;
  img: string;
  price: number;
  categoryId: number;
}

export const foodCardList: IFoodCard[] = [
  {
    id: 1,
    title: "Tôm hải sản",
    img: "https://healingthebody.ca/wp-content/uploads/2017/06/7095615705_a2d02ddaed_o-1600x800.jpg",
    price: 200000,
    categoryId: 1,
  },
  {
    id: 2,
    title: "Mực xào sa tế",
    img: "https://healingthebody.ca/wp-content/uploads/2017/06/7095615705_a2d02ddaed_o-1600x800.jpg",
    price: 200000,
    categoryId: 1,
  },
  {
    id: 3,
    title: "Cua sốt ớt",
    img: "https://healingthebody.ca/wp-content/uploads/2017/06/7095615705_a2d02ddaed_o-1600x800.jpg",
    price: 200000,
    categoryId: 1,
  },
  {
    id: 4,
    title: "Gỏi cuốn",
    img: "https://healingthebody.ca/wp-content/uploads/2017/06/7095615705_a2d02ddaed_o-1600x800.jpg",
    price: 200000,
    categoryId: 2,
  },
  {
    id: 5,
    title: "Bún riêu cua",
    img: "https://healingthebody.ca/wp-content/uploads/2017/06/7095615705_a2d02ddaed_o-1600x800.jpg",
    price: 200000,
    categoryId: 2,
  },
  {
    id: 6,
    title: "Phở gà",
    img: "https://healingthebody.ca/wp-content/uploads/2017/06/7095615705_a2d02ddaed_o-1600x800.jpg",
    price: 200000,
    categoryId: 3,
  },
  {
    id: 7,
    title: "Bánh mì chảo",
    img: "https://healingthebody.ca/wp-content/uploads/2017/06/7095615705_a2d02ddaed_o-1600x800.jpg",
    price: 200000,
    categoryId: 3,
  },
  {
    id: 8,
    title: "Sushi cá ngừ",
    img: "https://healingthebody.ca/wp-content/uploads/2017/06/7095615705_a2d02ddaed_o-1600x800.jpg",
    price: 200000,
    categoryId: 4,
  },
  {
    id: 9,
    title: "Mì quảng",
    img: "https://healingthebody.ca/wp-content/uploads/2017/06/7095615705_a2d02ddaed_o-1600x800.jpg",
    price: 200000,
    categoryId: 4,
  },
  {
    id: 10,
    title: "Cua rang me",
    img: "https://healingthebody.ca/wp-content/uploads/2017/06/7095615705_a2d02ddaed_o-1600x800.jpg",
    price: 200000,
    categoryId: 1,
  },
  {
    id: 11,
    title: "Cua rang me",
    img: "https://healingthebody.ca/wp-content/uploads/2017/06/7095615705_a2d02ddaed_o-1600x800.jpg",
    price: 200000,
    categoryId: 1,
  },
  {
    id: 12,
    title: "Cua rang me",
    img: "https://healingthebody.ca/wp-content/uploads/2017/06/7095615705_a2d02ddaed_o-1600x800.jpg",
    price: 200000,
    categoryId: 1,
  },
  {
    id: 13,
    title: "Cua rang me",
    img: "https://healingthebody.ca/wp-content/uploads/2017/06/7095615705_a2d02ddaed_o-1600x800.jpg",
    price: 200000,
    categoryId: 1,
  },
  {
    id: 14,
    title: "Cua rang me",
    img: "https://healingthebody.ca/wp-content/uploads/2017/06/7095615705_a2d02ddaed_o-1600x800.jpg",
    price: 200000,
    categoryId: 1,
  },
  {
    id: 15,
    title: "Ốc hấp",
    img: "https://healingthebody.ca/wp-content/uploads/2017/06/7095615705_a2d02ddaed_o-1600x800.jpg",
    price: 50000,
    categoryId: 1,
  },
];

export const foodCategoryList = [
  {
    id: 1,
    title: "Các món nướng",
  },
  {
    id: 2,
    title: "Các món lẩu",
  },
  {
    id: 3,
    title: "Món khai vị",
  },
  {
    id: 4,
    title: "Món chính",
  },
];

export const priceRanges = [
  {
    id: 1,
    title: "Giá dưới 100.000đ",
    min: 0,
    max: 100000,
  },
  {
    id: 2,
    title: "100.000 - 200.000đ",
    min: 100000,
    max: 200000,
  },
  {
    id: 3,
    title: "200.000 - 300.000đ",
    min: 200000,
    max: 300000,
  },
  {
    id: 4,
    title: "300.000 - 500.000đ",
    min: 300000,
    max: 500000,
  },
  {
    id: 5,
    title: "500.000 - 1.000.000đ",
    min: 500000,
    max: 1000000,
  },
  {
    id: 6,
    title: "Giá trên 1.000.000đ",
    min: 1000000,
    max: 100000000,
  },
];
