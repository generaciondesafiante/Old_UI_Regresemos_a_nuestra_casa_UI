import { useEffect, useRef } from 'react';

import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

import { CarouselItemOne } from '../../molecules/CarouselItemOne/CarouselItemOne';
import { CarouselItemThree } from '../../molecules/CarouselItemThree/CarouselItemThree';
import { CarouselItemTwo } from '../../molecules/CarouselItemTwo/CarouselItemTwo';
import './Carousel.css';

export const Carousel = () => {
  const slideshow = useRef(null);
  const slideshowInterval = useRef(null);

  const following = () => {
    //Comprobamos que slideshow tenga elementos
    if (slideshow.current.children.length > 0) {
      //* we get the first element of slideshow
      const firstElement = slideshow.current.children[0];

      //* We establish the transition for the slideshow
      slideshow.current.style.transition = `500ms ease-out all`;

      const sizeSlide = slideshow.current.children[0].offsetWidth;

      //* we move the slideshow
      slideshow.current.style.transform = `translateX(-${sizeSlide}px)`;

      const transicion = () => {
        //* we reset the position of the slideshow
        slideshow.current.style.transition = 'none';
        slideshow.current.style.transform = `translateX(0)`;
        //*We take the first element and send it to the end
        slideshow.current.appendChild(firstElement);
        //* so that when the code is executed it stops listening to the event
        slideshow.current.removeEventListener('transitionend', transicion);
      };
      //* evenlistener for when the animation ends
      slideshow.current.addEventListener('transitionend', transicion);
    }
  };

  const former = () => {
    if (slideshow.current.children.length > 0) {
      //* Get the last element of the slideshow
      const index = slideshow.current.children.length - 1;
      const lastElement = slideshow.current.children[index];

      slideshow.current.insertBefore(lastElement, slideshow.current.firstChild);

      slideshow.current.style.transition = 'none';

      const sizeSlide = slideshow.current.children[0].offsetWidth;
      slideshow.current.style.transform = `translateX(-${sizeSlide}px)`;

      setTimeout(() => {
        slideshow.current.style.transition = '500ms ease-out all';

        slideshow.current.style.transform = `translateX(0)`;
      }, 1);
    }
  };

  useEffect(() => {
    slideshowInterval.current = setInterval(() => {
      following();
    }, 8000);
  }, []);

  return (
    <div className="carousel-container">
      <div className="carousel-content_view" ref={slideshow}>
        <div className="carousel-view">
          <CarouselItemOne />
        </div>
        <div className="carousel-view">
          <CarouselItemTwo />
        </div>
        <div className="carousel-view">
          <CarouselItemThree />
        </div>
      </div>
      <button className="carousel-btn carousel-btn_right" onClick={former}>
        <ArrowBackIosIcon fontSize="large" />
      </button>
      <button className="carousel-btn carousel-btn_left" onClick={following}>
        <ArrowForwardIosIcon fontSize="large" />
      </button>
    </div>
  );
};
