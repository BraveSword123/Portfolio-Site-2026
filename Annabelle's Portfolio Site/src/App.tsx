import About_Me_Icon from "../src/Images/About_Me_Icon.png"; 
import Project_Icon from "../src/Images/Project_Icon.png"; 
import Work_Exp_Icon from "../src/Images/Work_Exp_Icon.png"; 
import Popup from "./Components/Popup/Popup"; 
import './App.css'; 

function App() {

  return (
    <>
      <Popup title="About Me!" 
      URL="https://www.linkedin.com/in/annabelle-moore-0b6342259/" 
      url_header = "Learn more about Me: "
      left_text="Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis."
      />
      <main>
        <figure id="about_me_container">
          <img src={About_Me_Icon} className="homescreen_icons"/>
          <figcaption>About Me</figcaption>
        </figure>
          <figure id="project_icon_container">
          <img src={Project_Icon} id="project_icon_homescreen" className="homescreen_icons"/>
          <figcaption id="project_homescreen_text">Projects</figcaption>
        </figure>
        <figure>
          <img src={Work_Exp_Icon} className="homescreen_icons"/>
          <figcaption>Work <br/> Experience</figcaption>
        </figure>
      </main>
      <footer>
          <img src={About_Me_Icon} className="taskbar_icons"/>
          <img src={Project_Icon} className="taskbar_icons" id="project_icon_taskbar"/>
          <img src={Work_Exp_Icon} className="taskbar_icons"/>

      </footer>
    </>
  )
}

export default App

/*
Sources: 
https://www.flaticon.com/search?author_id=1&style_id=1298&type=standard&word=document

https://free-images.com/display/seascape_coast_shore_sea.html
*/
