import React, { useContext, useEffect, useState } from "react";

const AppProvider = React.createContext();

const allMeal = "https://www.themealdb.com/api/json/v1/1/search.php?s=";
const randomMeal = "https://www.themealdb.com/api/json/v1/1/random.php";

const ApiLocal = () => {
  let Api = localStorage.getItem("list");
  if (Api) {
    Api = JSON.parse(localStorage.getItem("list"));
  } else {
    Api = [];
  }
  return Api;
};

const AppContent = ({ children }) => {
  const [content, setContent] = useState([]);
  const [searchText, setSearchText] = useState("a");
  const [model, setModel] = useState(false);
  const [single, setSingle] = useState([]);
  const [favourite, setFavourite] = useState(ApiLocal());

  const fetchData = async (url) => {
    const response = await fetch(url);
    const { meals } = await response.json();
    if (meals === null) {
      setContent(null);
    }
    if (meals) {
      const Filter = meals.map((item) => {
        const {
          idMeal,
          strCategory,
          strArea,
          strMealThumb,
          strTags,
          strYoutube,
        } = item;
        return {
          id: idMeal,
          category: strCategory,
          area: strArea,
          image: strMealThumb,
          tag: strTags,
          youtube: strYoutube,
        };
      });
      setContent(Filter);
    }
  };

  const CloseModel = () => {
    setModel(false);
  };

  const Favourite = (id) => {
    const FIndOut = content.find((item) => item.id === id);
    const alreadyExist = favourite.find((item) => item.id === id);
    if (alreadyExist) {
      return;
    }
    setFavourite([...favourite, FIndOut]);
    localStorage.setItem("list", JSON.stringify(favourite));
  };

  const searchEachItem = () => {
    fetchData(`${allMeal}${searchText}`);
  };

  const searchSingleItem = () => {
    fetchData(randomMeal);
  };

  const singleInfo = (id, favouriteMeal) => {
    let Findout;
    if (favouriteMeal) {
      Findout = favourite.find((item) => item.id === id);
    } else {
      Findout = content.find((item) => item.id === id);
    }
    setSingle(Findout);
  };

  const removeFromList = (id) => {
    const remove = favourite.filter((item) => item.id !== id);
    setFavourite(remove);
    let API = localStorage.getItem("list");
    if (API) {
      API = JSON.parse(localStorage.getItem("list"));
      API = API.filter((itme) => {
        return itme.id !== id;
      });
      localStorage.setItem("list", JSON.stringify(API));
    }
  };

  useEffect(() => {
    fetchData(allMeal);
  }, []);

  return (
    <AppProvider.Provider
      value={{
        content,
        setModel,
        model,
        setSearchText,
        searchEachItem,
        searchSingleItem,
        singleInfo,
        single,
        CloseModel,
        Favourite,
        favourite,
        removeFromList,
      }}
    >
      {children}
    </AppProvider.Provider>
  );
};

export const GlobalContent = () => {
  return useContext(AppProvider);
};

export default AppContent;
