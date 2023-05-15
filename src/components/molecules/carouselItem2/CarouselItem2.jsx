import './CarouselItem2.css';

export default function CarouselItem2() {
  return (
    <section className="section-carousel-two">
      <div className="content-carousel-two">
        <div className="container-text-carousel-two container-text-carousel-two-right">
          <h1 className="carousel-two-title">ENCUNTRA LA LUZ</h1>
          <p className="carousel-two-paragraph">
            La palabra De Dios ilumina nuestros pasos ¡Encuentra el camino a la
            luz de la verdad!
          </p>
        </div>

        <div className="conteiner-img-component-two">
          <img
            className="img-carousel-two"
            src="https://i.ibb.co/Kz0Yfzb/Image-8.png"
            alt="img"
          />
        </div>
        <div className="container-text-carousel-two container-text-carousel-two-left">
          <h1 className="carousel-two-title">CONÉCTATE CON TU FE</h1>
          <p className="carousel-two-paragraph">
            Si tú no conoces a tu pareja ¿como sabes que la estás amando
            correctamente? ¡lo mismo pasa con nuestro Dios! Amemoslo como Él
            desea
          </p>
        </div>
      </div>
    </section>
  );
}
