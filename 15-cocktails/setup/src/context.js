import React, { useState, useContext, useEffect } from 'react'
import { useCallback } from 'react'

const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='
const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  // our state values
  const [loading, setLoading] = useState(true);
  // input state
  const [searchTerm, setSearchTerm] = useState('a')
  // cocktails state
  const [cocktails, setCocktails] = useState([]);

  const fetchDrinks = useCallback (async () => {
    setLoading(true)
    try{
      const response = await fetch(`${url}${searchTerm}`);
      const data = await response.json();
      // console.log(data)
      const {drinks} = data;
      if(drinks){
        const newCocktails = drinks.map((item) => {
          const {
            idDrink, 
            strDrink, 
            strDrinkThumb, 
            strAlcoholic, 
            strGlass
          } = item;
          // we did the below, so, the names can be easier
          return {
            id: idDrink, 
            name: strDrink, 
            image:strDrinkThumb, 
            info:strAlcoholic, 
            glass: strGlass}
        });
        setCocktails(newCocktails)
      }else{
        //if cocktail are null
        setCocktails([])
      }
      setLoading(false)
    }catch (error){
      console.log(error)
      setLoading(false)
    }
  }, [searchTerm])

  useEffect(() => {
    fetchDrinks()
  }, [searchTerm, fetchDrinks])
  return <AppContext.Provider 
    value={{
      loading,
      cocktails,
      setSearchTerm,
    }}
    >
    {children}
  </AppContext.Provider>
}

// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
