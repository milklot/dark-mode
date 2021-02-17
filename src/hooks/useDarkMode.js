import useLocalStorage from "./useLocalStorage"
 
 
const useDarkMode = (intialValue) => {
 
   const [value, setValue] = useLocalStorage('dark-mode', intialValue);
   const toggleMode = () => {
       setValue(!value);
	}
	return [value,toggleMode];
 }
  
 export default useDarkMode;