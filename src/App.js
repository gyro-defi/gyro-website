import React, { useEffect } from 'react'
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client'
import tw from 'twin.macro'
import 'tailwindcss/dist/base.css'
import 'style.css'
import { css } from 'styled-components/macro' //eslint-disable-line
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import AnimationRevealPage from 'helpers/AnimationRevealPage.js'

import Header from 'components/sections/Header'
import Hero from 'components/sections/Hero.js'
import WhatIsGyro from 'components/sections/WhatIsGyro.js'
import HowItWorks from 'components/sections/HowItWorks.js'
import HowToJoin from 'components/sections/HowToJoin.js'
import JoinCommunity from 'components/sections/JoinCommunity.js'
import Footer from 'components/sections/Footer.js'

const StyledDiv = tw.div`font-display min-h-screen text-gray-100 p-8 overflow-hidden bg-black`

const client = new ApolloClient({
  uri: 'https://api.thegraph.com/subgraphs/name/gyro-defi/gyro-v2',
  cache: new InMemoryCache()
})

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Switch>
          <Route exact path="/">
            <LandingPage />
          </Route>
          <Route path="/sweepstakes">
            <Sweepstakes />
          </Route>
        </Switch>
      </Router>
    </ApolloProvider>
  )
}

function LandingPage() {
  return (
    <StyledDiv className="App">
      <Header />
      <AnimationRevealPage>
        <Hero />
        <WhatIsGyro subheading="What is Gyro" />
        <HowItWorks
          subheading="How it Works"
          heading="The New Face of Money"
          buttonRounded={false}
          textOnLeft={false}
        />
        <HowToJoin subheading="How to Join" heading="Be part of the open economy of the future" />
        <JoinCommunity
          subheading="Join the Community"
          heading="Meet the worldwide community"
          description="Join our burgeoning community of innovators connected all over the world, and building the new era of open finance."
        />
      </AnimationRevealPage>
      <Footer />
    </StyledDiv>
  )
}

function Sweepstakes() {
  useEffect(() => {
    window.location.href = 'https://app.viralsweep.com/sweeps/full/75f7a1-92366?framed=1'
  }, [])
  return <h2>Redirecting ...</h2>
}

export default App
