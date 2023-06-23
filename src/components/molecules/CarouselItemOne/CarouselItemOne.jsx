import './CarouselItemOne.css';

export const CarouselItemOne = () => {
  return (
    <section className="carouselOne-section">
      <img
        className="carouselOne-img_one "
        src="https://i.ibb.co/pZL0RjN/Image-4.png"
        alt=""
      />
      <img
        className="carouselOne-img_two"
        src="https://i.imgur.com/tqqRire.png"
        alt=""
      />
      <div className="carouselOne-content_text">
        <h1 className="carouselOne-title">
          Regresemos a<span> nuestra </span>
          casa
        </h1>
        <p className="carouselOne-paragraph">
          Un curso que cambiará tu vida y tu relación con el Creador
        </p>
      </div>
    </section>
  );
};
