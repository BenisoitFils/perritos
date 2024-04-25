import React from "react";
import Header from "./Header";
import MyCard from "./MyCard";
import Footer from "./Footer";
import "./App.css";

const App = () => {
  return (
    <div>
      <Header title="Adopta un perrito" />
      <div className="container">
        <MyCard
          image="./src/assets/img/p1.jpg"
          name="Perrito 1"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          color="success"
        />
        <MyCard
          image="./src/assets/img/p2.jpg"
          name="Perrito 2"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          color="primary"
        />
        <MyCard
          image="./src/assets/img/p3.jpg"
          name="Perrito 3"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          color="danger"
        />
        <MyCard
          image="./src/assets/img/p4.jpg"
          name="Perrito 4"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          color="warning"
        />
      </div>
      <Footer />
    </div>
  );
};

export default App;
