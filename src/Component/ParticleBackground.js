import React from 'react'
import Particles from 'react-particles-js';
import particleCode from "../Config/particle"
export default function ParticleBackground() {
    return (
        <Particles
        params={particleCode} 
        height="100%"
        />
    )
}
