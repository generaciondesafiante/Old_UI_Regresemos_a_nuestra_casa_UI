import './CarouselItem1.css';

export default function CarouselItemOne() {
  return (
    <section className="carouselOne-section_content">
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
          <div className="carouselOne-sub">
            <h1 className="title-carousel-one color-text-title-green size-title-carousel1">
              Regresemos a <br />
              <span className="color-text-title-yellow size-title-carousel1">
                nuestra
              </span>
              casa
            </h1>
          </div>
          <p className="text-paragraf-carousel1">
            un curso que cambiará tu vida y tú relación con el Creador
          </p>
        </div>
      </div>
    </section>
  );
}
