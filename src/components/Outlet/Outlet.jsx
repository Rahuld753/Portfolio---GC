import React, { useState } from 'react'
import './Outlet.css'
import Modal from 'react-modal';
import { images } from '../../constants';
import { MdOutlineRestaurantMenu } from 'react-icons/md'

const Outlet = ({ image, title, url }) => {
  const [modalIsOpen, setIsOpen] = useState(false);

  const explore = (url) => {
    window.open(url, '__black')
  }

  return (
    <div className='outlet-container_article'>
      <div className='outlet-container_article-image'>
        <img src={image} alt={title} />
      </div>
      <div className='outlet-container_article-content'>
        <div style={{ height: 100 }}>
          <p className='p__opensans'>{title}</p>
        </div>
        <div className='outlet-container_article-content__buttons'>
          <button className='app__header-btn' onClick={() => explore(url)}>Explore</button>
          <button className='app__header-btn' onClick={() => setIsOpen(true)}>View Menu</button>
        </div>
      </div>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setIsOpen(false)}
        contentLabel="Example Modal"
        style={{
          content: {
            width: 'fit-content',
            left: '50%',
            marginRight: '-50%',
            right: 'auto',
            transform: 'translateX(-50%)',
          }
        }}
      >
        <div className='modal__content'>
          <MdOutlineRestaurantMenu style={{ position: 'absolute', top: 5, right: 5, cursor: 'pointer' }} fontSize={27} className='overlay__close' onClick={() => setIsOpen(false)} />
          <h1 className='headtext__cormorant' style={{ marginBottom: '1.5rem', textAlign: 'center' }}>Menu</h1>
          <img src={images.menu} alt="menu" />
        </div>
      </Modal>
    </div >
  )
}

export default Outlet
