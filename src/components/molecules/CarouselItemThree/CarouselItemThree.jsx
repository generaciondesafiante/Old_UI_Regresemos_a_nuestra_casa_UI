import './CarouselItemThree.css';

export const CarouselItemThree = () => {
  return (
    <section className="carouselThree-container">
      <iframe
        className="carouselThree-video"
        src="https://www.youtube.com/embed/D4SSeYfTwWo"
        title="¿QUÉ ES GENERACIÓN DESAFIANTE?"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </section>
  );
};
