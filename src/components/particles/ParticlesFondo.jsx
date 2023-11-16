import React, { useCallback } from 'react'
import Particles from 'react-tsparticles'
import { loadFull } from 'tsparticles'
import particlesConfig from "./ParticlesConfig"

const ParticlesFondo = () => {
const particlesInit=useCallback((engine)=>{loadFull(engine)},[])
  return (
    <div style={{height: "0px" }} >
      <Particles width='100%' height='90vh' style={{zIndex: "-1" }} options={particlesConfig} init = {particlesInit}/>
    </div>
  )
}

export default ParticlesFondo
