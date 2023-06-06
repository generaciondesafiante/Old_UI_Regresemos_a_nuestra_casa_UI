import './CarouselItemTwo.css';

export const CarouselItemTwo = () => {
  return (
    <section className="carouselTwo-section">
      <div className="carouselTwo-container">
        <div className="carouselTwo-content_text">
          <h1 className="carouselTwo-title">ENCUENTRA LA LUZ</h1>
          <p className="carouselTwo-paragraph">
            La palabra de Dios ilumina nuestros pasos ¡Encuentra el camino a la
            luz de la verdad!
          </p>
        </div>

        <div className="carouselTwo-container_img">
          <img
            className="carouselTwo-img"
            src="https://i.ibb.co/Kz0Yfzb/Image-8.png"
            alt="Image book carrousel item two"
          />
        </div>
        <div className="carouselTwo-content_text">
          <h1 className="carouselTwo-title">CONÉCTATE CON TU FE</h1>
          <p className="carouselTwo-paragraph">
            Si tú no conoces a tu pareja ¿como sabes que la estás amando
            correctamente? ¡lo mismo pasa con nuestro Dios! Amemoslo como Él
            desea
          </p>
        </div>
      </div>
    </section>
  );
};
