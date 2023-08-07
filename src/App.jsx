import "./App.css";
import Card from "./comp/card/card";
import { getData } from "./comp/const/db";
import { useEffect, useState } from "react";
import Carta from ".//comp/cart/cart";

const courses = getData();


const telegram = window.Telegram.WebApp;


const App = () => {
  const [cartItems, setCrtItems] = useState([]);


  useEffect(() =>{
    telegram.ready();
  })


  const onAddItem = (item) => {
    const existItem = cartItems.find((c) => c.id === item.id);


    if (existItem) {
      const newdata = cartItems.map((c) =>
        c.id == item.id ? { ...existItem, quantity: existItem.quantity + 1 } : c
      );


      setCrtItems(newdata);
    } else {
      const newdata = [...cartItems, { ...item, quantity: 1 }];
      setCrtItems(newdata);
     
    }
  };

  const onRemoveItem = (item) => {
    const existItem = cartItems.find((c) => c.id === item.id);

   

    if (existItem.quantity === 1) {
      const newData = cartItems.filter((c) => (c.id = !existItem.id));
      setCrtItems(newData);
      
    } else {
      const newData = cartItems.map((c) =>
        c.id === existItem.id
          ? { ...existItem, quantity: existItem.quantity - 1 }
          : c
      );
      
      setCrtItems(newData)
    }
  };


  const onCheckOut = () =>{
    telegram.MainButton.text = "Sotib olish :)"
    telegram.MainButton.show()
  }


  return (
    <>
      <h1 className="heading">343.aja</h1>

      <Carta cartItems={cartItems} onCheckOut ={onCheckOut} />

      <div className="cards__container">
        {courses.map((course) => (
          <Card key={course.id}
           course={course} 
           onAddItem={onAddItem}
           onRemoveItem= {onRemoveItem} />
        ))}
      </div>
    </>
  );
};

export default App;
