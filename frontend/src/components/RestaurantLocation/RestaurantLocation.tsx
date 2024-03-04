import "./RestaurantLocation.scss";

function RestaurantLocation() {
  return (
    <div className="restaurant-location mt-5">
      <h1 data-aos="fade-right">LIÊN HỆ</h1>
      <h2 data-aos="fade-right">LIÊN HỆ VỚI CHÚNG TÔI</h2>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3847.0104134641865!2d109.09432310890146!3d15.375922357566852!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31683eb59a9c7a5b%3A0x3925c20d8aec67ad!2zTkjDgCBIw4BORyBDxqBNIEjhuqJJIFPhuqJOIMSQ4bqgSSBI4bqwTkc!5e0!3m2!1svi!2s!4v1709564156179!5m2!1svi!2s"
        width="100%"
        height="450"
        allowFullScreen={true}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
}

export default RestaurantLocation;
