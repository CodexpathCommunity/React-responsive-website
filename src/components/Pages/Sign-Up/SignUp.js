import React from 'react'
import HeroSection from '../../HeroSection'
import { homeObjOne, homeObjTwo } from '../HomePage/Data'

function SignUp() {
    return (
        <div>
            <HeroSection {...homeObjTwo}/>
            <HeroSection {...homeObjOne}/>
        </div>
    )
}

export default SignUp
