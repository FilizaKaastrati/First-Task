import classes from "./DomainItem.module.css";

function DomainItem(props) {
  return (
    <div className={classes.box}>
      <div className={classes.icon}>
        <i>{props.icon} </i>
      </div>
      <div>
        <div className={classes.td}>
        <h5 className={classes.title}>{props.title}</h5>
        <div className={classes.paragraf}>
          {props.description}
       </div>
       </div>
      </div>
    </div>
  );
}
export default DomainItem;
