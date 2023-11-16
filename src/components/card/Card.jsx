import React from "react";
import "./card.css";
import foto from "../../assests/images/logoyo1.png";
import { Typewriter, Cursor } from "react-simple-typewriter";
import LinkMedia from "../media/LinkMedia";
import { motion } from "framer-motion";

const Card = ({ texto1, texto3 }) => {
  return (
    <div className="container__card">
      <div className="card">
        <div className="texto">
          <motion.h2
            initial={{ y: -150 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
            className="subtitulo"
          >
            {texto1}
          </motion.h2>
          <motion.h1
            initial={{ x: -150 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.5 }}
            className="titulo"
          >
            <Typewriter
              words={["María Arana", "Content Manager", "SEM Manager"]}
              loop={0}
              typeSpeed={100}
              deleteSpeed={80}
              delaySpeed={1000}
            />
            <Cursor cursorColor="blue" />
          </motion.h1>
          <motion.h2
            initial={{ x: -750 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="subtitulo"
          >
            {texto3}
          </motion.h2>
          {/*    <LinkMedia />*/}
        </div>
        <motion.div
          animate={{
            scale: [0.5, 1, 1, 0.5, 1],
            rotate: [0, 0, 360, 360, 360],
            borderRadius: ["20%", "20%", "50%", "50%", "20%"],
          }}
          transition={{ duration: 2 }}
          className="container__image"
        >
          <img src={foto} alt="" />
        </motion.div>
      </div>
    </div>
  );
};

export default Card;
