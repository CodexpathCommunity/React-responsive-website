import React from 'react'
import HeroSection from '../../HeroSection'
import { homeObjFour } from '../HomePage/Data'
import { homeObjThree } from './Data'

function Products() {
    return (
        <div>
            <HeroSection {...homeObjThree} />
            <HeroSection {...homeObjFour} />
            
        </div>
    )
}

export default Products
