import { useState } from "react";
import Jony from "../button/button";
import "./card.css";

const Card = (props) => {
  const [count, setCount] = useState(0)
  const { course , onAddItem, onRemoveItem} = props;



  const handleIncrement = () => {
    setCount(prev => prev + 1)
    onAddItem(course)
  }

  const handleDecrement = () => {
    setCount(prev => prev - 1)
    onRemoveItem(course)
  }

  return (
    <>
      <div className="card">
        {course.title}
        <span className={`${count != 0 ? 'card__bage' : 'card__bage-hidden'}`}>
           {count}
         </span>

        <div className="image__container">
          <img
            src={course.Image}
            alt={course.title}
            width={"100%"}
            height={"230px"}
          />
        </div>
        <div className="card_body">
          <h2 className="card__title">{course.title}</h2>
          <div className="card__price">{course.price.toLocaleString('en-US',{
					style:'currency',
					currency:'USD'
				})}
        </div>

        </div>
        <div className="hr"></div>


        <div className="btn__container">
          <Jony title={"+"} type={"add"} onClick = {handleIncrement} />
          {count != 0 &&  (
             <Jony title={"-"} type={"remove"} onClick = {handleDecrement} />
          )}
         
        </div>
      </div>
    </>
  );
};

export default Card;
