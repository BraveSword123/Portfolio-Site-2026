import About_Me_Icon from "../src/Images/About_Me_Icon.png"; 
import Project_Icon from "../src/Images/Project_Icon.png"
import Work_Exp_Icon from "../src/Images/Work_Exp_Icon.png"; 
import './App.css'

function App() {

  return (
    <main>
      <figure>
        <img src={About_Me_Icon}/>
        <figcaption>About Me</figcaption>
      </figure>
        <figure>
        <img src={Project_Icon}/> 
        <figcaption>Projects</figcaption>
      </figure>
      <figure>
        <img src={Work_Exp_Icon}/>
        <figcaption>Work Experience</figcaption>
      </figure>
    </main>
  )
}

export default App

/*
Sources: 
https://www.flaticon.com/search?author_id=1&style_id=1298&type=standard&word=document

https://free-images.com/display/seascape_coast_shore_sea.html
*/
