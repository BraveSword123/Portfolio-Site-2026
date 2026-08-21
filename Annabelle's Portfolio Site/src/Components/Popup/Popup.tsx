import styles from "./Popup.module.css";


function Popup(props: any) {

  return (
    <>
      <div id={styles.popup_wrapper}>
        <div>{props.URL}</div>
        <h1>{props.title}</h1>
        <p id="left_text_box">{props.left_text}</p>
        <img id="right_top_img" src={props.top_img}/>
        <img id="right_bottom_img" src={props.bottom_img}/>
      </div>
    </>
  );
}

export default Popup