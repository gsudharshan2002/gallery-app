import React, { useState } from 'react';
import './gallery.css';


import img1 from './img/img1.jpg';
import img2 from './img/img2.jpg';
import img3 from './img/img3.jpg';
import img4 from './img/img4.jpg';
import img5 from './img/img5.jpg';
import img6 from './img/img6.jpg';
import img7 from './img/img7.jpg';
import img8 from './img/img8.jpg';
import img9 from './img/img9.jpg';
import img10 from './img/img10.jpg';

const data = [
  { id: 1, imgSrc: img1 },
  { id: 2, imgSrc: img2 },
  { id: 3, imgSrc: img3 },
  { id: 4, imgSrc: img4 },
  { id: 5, imgSrc: img5 },
  { id: 6, imgSrc: img6 },
  { id: 7, imgSrc: img7 },
  { id: 8, imgSrc: img8 },
  { id: 9, imgSrc: img9 },
  { id: 10, imgSrc: img10 },
];

const Gallery = () => {
  const [model, setModel] = useState(false); 
  const [tempImgSrc, setTempImgSrc] = useState(''); 

  const getImg = (imgSrc) => {
    setTempImgSrc(imgSrc);
    setModel(true);
  };

  const closeModel = () => {
    setModel(false);
    setTempImgSrc('');
  };

  return (
    <>
    
      <div className={model ? 'model open' : 'model'} onClick={closeModel}>
        <img src={tempImgSrc} alt="Selected" />
      </div>

    
      <div className="gallery">
        {data.map((item) => (
          <div className="pics" key={item.id} onClick={() => getImg(item.imgSrc)}>
            <img src={item.imgSrc} alt={`pic${item.id}`} />
            
          </div>
        ))}
      </div>
    </>
  );
};

export default Gallery;
