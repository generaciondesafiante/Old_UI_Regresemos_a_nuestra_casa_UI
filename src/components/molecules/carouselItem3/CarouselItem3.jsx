import './CarouselItem3.css';

export default function CarouselItem3() {
  return (
    <div className="introduction-video_container">
      <iframe
        className="introduction-video"
        src="https://www.youtube.com/embed/D4SSeYfTwWo"
        title="¿QUÉ ES GENERACIÓN DESAFIANTE?"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
}
