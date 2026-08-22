import styles from "./Popup.module.css";


function Popup(props: any) {

  return (
    <>
      <div id={styles.popup_container}>
        <button>X</button> 
        <div id={styles.url_container}>
          <a href={props.URL}>
          <span>{props.url_header}{props.URL}</span>
          </a>
        </div>
        <h1>{props.title}</h1>
        <p id="left_text_box">{props.left_text}</p>
        <div id="img_container">
          <img id="right_top_img" className="right_img" src={props.top_img}/>
          <img id="right_bottom_img" className="right_img" src={props.bottom_img}/>
        </div>
      </div>
    </>
  );
}

export default Popup