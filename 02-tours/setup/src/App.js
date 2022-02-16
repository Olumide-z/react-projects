import React, { useState, useEffect } from 'react'
import Loading from './Loading'
import Tours from './Tours'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tours-project'
function App() {
  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState([]);

  //fetch data
  const fetchTours = async () => {
    setLoading(true);
    try{
      const response = await fetch(url);
      const newTours = await response.json();
      setTours(newTours);
      setLoading(false);
      console.log(newTours)
    }catch(error){
      setLoading(false);
      console.log(error)
    }
    
  };

  useEffect(() => {
    fetchTours();
  }, []);

  // delete data
const deleteTours = (id) => {
  const tour = tours.filter((tour) => tour.id !== id);
  setTours(tour);
}

  //if it is loading
  if(loading){
    return(
      <main>
        <Loading />
      </main>
    )
  }
  
  if(tours.length === 0) {
    return(
      <main>
        <div className='title'>
        <h2>No tours left</h2>
        <button onClick={fetchTours} className='btn'>Refresh</button>
      </div>
      </main>
      
    )
  }

  return (
    <main>
      <Tours tours={tours} deleteTours={deleteTours}/>
    </main>

  )
}

export default App
