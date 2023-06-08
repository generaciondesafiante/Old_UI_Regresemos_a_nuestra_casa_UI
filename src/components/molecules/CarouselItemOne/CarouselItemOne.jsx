import './CarouselItemOne.css';

export const CarouselItemOne = () => {
  return (
    <section className="carouselOne-section">
      <div className="carouselOne-container">
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
          <h1 className="carouselOne-title carouselOne-title_lettersGreen carouselOne-title_size">
            Regresemos a <br />
            <span className="carouselOne-title_lettersYellow carouselOne-title_size">
              nuestra
            </span>
            casa
          </h1>
          <p className="carouselOne-paragraph">
            un curso que cambiará tu vida y tu relación con el Creador
          </p>
        </div>
      </div>
    </section>
  );
};
