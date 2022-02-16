import React from 'react';

const Categories = ({ filterItems, categories }) => {
  return (
    <div className='btn-container'>
       {
         categories.map((category, index) => {
           return(
             <div key={index}>
                <button 
                  type='button'
                  className='filter-btn'
                  onClick={() => filterItems(category)}
                  >
                  {category}
                </button>
             </div>
           )
         })
       }
    </div>
  );
};

export default Categories;
