import classes from "./DomainItem.module.css";

function DomainItem(props) {
  return (
    <div className={classes.box}>
      <div className={classes.icon}>
        <i>{props.icon} </i>
      </div>
      <div>
        <div className={classes.td}>
          <h4>{props.title}</h4>
        </div>
        <div>
          <p>{props.description}</p>
        </div>
      </div>
    </div>
  );
}
export default DomainItem;
