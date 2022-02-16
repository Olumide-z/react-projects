import React from 'react';
import Tour from './Tour';
const Tours = ({tours, deleteTours}) => {
  return (
    <section>
      <div className='title'>
        <h2>our tours</h2>
        <div className='underline'></div>
      </div>
      <div>
        {
          tours.map((tour) => {
            const {id, name, image, info, price} = tour;
            return(
              <Tour key={id} {...tour} deleteTours={deleteTours}/>
            )
          })
        }
      </div>
    </section>
  );
};

export default Tours;
