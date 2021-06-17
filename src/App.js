import React from 'react'
import tw from 'twin.macro'
import 'tailwindcss/dist/base.css'
import 'style.css'
import { css } from 'styled-components/macro' //eslint-disable-line

import AnimationRevealPage from 'helpers/AnimationRevealPage.js'

import Hero from 'components/sections/Hero.js'
import WhatIsGyro from 'components/sections/WhatIsGyro.js'
import HowItWorks from 'components/sections/HowItWorks.js'
import HowToJoin from 'components/sections/HowToJoin.js'
import JoinCommunity from 'components/sections/JoinCommunity.js'
import Footer from 'components/sections/Footer.js'

const StyledDiv = tw.div`font-display min-h-screen text-gray-100 p-8 overflow-hidden bg-black`

function App() {
  return (
    <StyledDiv className="App">
      <AnimationRevealPage>
        <Hero />
        <WhatIsGyro subheading="What is Gyro" />
        <HowItWorks
          subheading="How it Works"
          heading="The New Face of Money"
          buttonRounded={false}
          textOnLeft={false}
        />
        <HowToJoin
          subheading="How to Join"
          heading="Be part of the open economy of the future"
        />
        <JoinCommunity
          subheading="Join the Community"
          heading="Meet the worldwide community"
          description="Join our burgeoning community of innovators connected all over the wrold, and building the new era of open finance."
        />
      </AnimationRevealPage>
      <Footer />
    </StyledDiv>
  )
}

export default App
