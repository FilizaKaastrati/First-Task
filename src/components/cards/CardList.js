import CardItem from "./CardItem";
import clasess from "./CardList.module.css"
function CardList(props) {
  return (
    <ul>
      <div className={clasess.container}>
        {props.list.map(card => (
          <CardItem
           key={card.id}
            date={card.date}
            img={card.img}
            button={card.button}
            fullName={card.fullName}
            description={card.description}
          />
        ))}
      </div>
    </ul>
  );
}
export default CardList;
