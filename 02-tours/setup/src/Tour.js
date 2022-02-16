import React, { useState } from 'react';

const Tour = ({id, image, info, name, price, deleteTours}) => {
  const [textShow, setTextShow] = useState(false);
  
  return (
    <article className='single-tour'>
     <img src={image} alt={name} />
     <footer>
        <div className='tour-info'>
          <h4>{name}</h4>
          <h4 className='tour-price'>${price}</h4>
        </div>
        <p>
          {textShow ? info : `${info.substring(0, 200)}...` }
          <button onClick={() => setTextShow(!textShow)}>
            {
              textShow ? 'showLess' : 'readmore'
            }
          </button>
        </p>
        <button className='delete-btn'
        onClick={() => deleteTours(id)}
        >
       not interested
        </button>
     </footer>
     
    </article>
  );
};

export default Tour;
