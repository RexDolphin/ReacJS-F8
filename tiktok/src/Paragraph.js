import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";
function Paragraph () {
  const themeContext = useContext(ThemeContext);
  console.log(themeContext)
  return (
    <div className={themeContext.theme} style={{width: '20rem', padding: '1rem', background: (themeContext.theme === 'dark' ? 'black' : 'white'), color: (themeContext.theme === 'dark' ? 'white' : 'black'), transition: 'ease .3s ' }}>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non quo inventore incidunt harum unde odit fugit sed natus aliquid sint, distinctio corrupti earum quae aut molestias, alias rerum illum voluptates.
    </div>
  )
} 
export default Paragraph;