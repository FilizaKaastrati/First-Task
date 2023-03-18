import { fontSize } from "@mui/system";
import clasess from "./CardItem.module.css";
function CardItem(props) {
  
  return (
    <div className={clasess.cards}>
      <div className={clasess.card}>
        <div className={clasess.date}> 
        <p>{props.date}</p>
        </div>
        <div className={clasess.imgbtn}>
        <div >
        <button className={clasess[props.button]}>{props.button}</button>
        </div>
        <div className={clasess.imgFullName}>
          <img src={props.img} alt={props.img}></img>
            <span className={clasess.fullName}>{props.fullName}</span>
          </div>
        </div>
        <div className={clasess.p}>
        <p>{props.description}</p>
        </div>
        <div>
        <button className={clasess.btn}>Download</button>
        </div>
    </div>
    </div>
   
  );
}
export default CardItem;
