import { useEffect, useState } from "react";

const useLocalStorage = (storageKey, prevState) => {
    const [value, setValue] = useState(
      JSON.parse(localStorage.getItem(storageKey)) ?? prevState
    );
    useEffect(() => {
      localStorage.setItem(storageKey, JSON.stringify(value));
    }, [value, storageKey]);
  
    return [value, setValue];
  };
export default useLocalStorage 