import React from "react";
import Card from "./card/Card";
import CardAbout from "./about/CardAbout";

const Home = () => {
  return (
    
    <div className="">
      
      <Card texto1={"Hola yo soy"} texto2={"María Arana"} texto3={"Bienvenido a mi página web"} />
      <CardAbout/>
    </div>
  );
};

export default Home;
