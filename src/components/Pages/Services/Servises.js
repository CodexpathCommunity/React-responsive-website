import React from 'react'
import HeroSection from '../../HeroSection'
import Pricing from '../../Pricing'
import { homeObjFour } from '../HomePage/Data'

function Servises() {
    return (
        <div>
            <Pricing/>
            <HeroSection {...homeObjFour}/>
        </div>
    )
}

export default Servises
