import React, { useState } from "react";
import "./CardAbout.css";
import imgAbout from "../../assests/images/img-about.png";
import VisibilitySensor from "react-visibility-sensor";
import { motion } from "framer-motion";

const CardAbout = () => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className="container__card card__about">
      <div className="card card-abut">
        <div className="container__image">
          <VisibilitySensor
            onChange={(isVisible) => {
              if (isVisible) {
                setIsVisible(true);
              }
            }}
          >
            <motion.img
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{
                opacity: isVisible ? 1 : 0,
                scale: isVisible ? 1 : 0.5,
              }}
              transition={{ duration: 0.7 }}
              src={imgAbout}
              alt="img-about"
              className="img__about"
            />
          </VisibilitySensor>
        </div>

        <motion.div
          initial={{ x: 190, opacity: 0 }}
          animate={{ x: isVisible ? 0 : 190, opacity: isVisible ? 1 : 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="texto"
        >
          <div>
            <p className="texto__titulo">Sobre MI</p>
          </div>
          <div>
            <p className="texto__subtitulo">
              Soy estudiante de la Ingenieria de Sistemas de la Universidad
              Nacional de Cajamarca
            </p>
          </div>
          <div>
            <p className="texto__info">
              Me dedico al desarrollo fontend ... Lorem, ipsum dolor sit amet
              consectetur adipisicing elit. Pariatur possimus aliquid eveniet
              voluptas nisi minus magni debitis reprehenderit fuga, labore
              itaque laudantium corrupti! Dolore, sapiente delectus suscipit
              omnis consectetur molestiae.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default CardAbout;
