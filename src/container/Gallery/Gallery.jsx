import React from 'react';
import { BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs'
import { data } from '../../constants'
import './Gallery.css';

const Gallery = () => {
  const scrollRef = React.useRef(null)

  const scroll = (direction) => {
    const { current } = scrollRef
    if (direction === 'left') {
      current.scrollLeft -= 700
    }
    else {
      current.scrollLeft += 700
    }
  }

  return (
    <div id='gallery' className='app__bg app__gallery'>
      <h1 className='headtext__cormorant' style={{ marginBottom: '1.5rem', textAlign: 'center' }}>Photo Gallery</h1>
      <div className='app__gallery-images'>
        <div className='app__gallery-images_container' ref={scrollRef}>
          {data.imagesGallery.map((gallery, index) =>
            <div className='app__gallery-images_card flex__center' key={`gallery-${index}`}>
              <img src={gallery.image} alt="gallery" />
              <div className='gallery__image-icon'>{gallery.name}</div>
            </div>
          )}
        </div>
        <div className='app__gallery-images_arrows'>
          <BsArrowLeftShort className='gallery__arrow-icon' onClick={() => scroll('left')} />
          <BsArrowRightShort className='gallery__arrow-icon' onClick={() => scroll('right')} />
        </div>
      </div>
    </div>
  );
}

export default Gallery;
