import React, { useEffect, useState } from 'react'
import { ApolloProvider, ApolloClient, InMemoryCache, useQuery, gql } from '@apollo/client'

import tw from 'twin.macro'
import 'tailwindcss/dist/base.css'
import 'style.css'
import { css } from 'styled-components/macro' //eslint-disable-line
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { ethers } from 'ethers'

import AnimationRevealPage from 'helpers/AnimationRevealPage.js'

import Header from 'components/sections/Header'
import Hero from 'components/sections/Hero.js'
import WhatIsGyro from 'components/sections/WhatIsGyro.js'
import HowItWorks from 'components/sections/HowItWorks.js'
import HowToJoin from 'components/sections/HowToJoin.js'
import JoinCommunity from 'components/sections/JoinCommunity.js'
import Footer from 'components/sections/Footer.js'
import { JSON_RPC_PROVIDER, GYRO_CONTRACT_ADDRESS } from 'config.js'

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

const LandingPage = () => {
  const [contractBalance, setContractBalance] = useState(null)
  const [protocolMetrics, setProtocolMetrics] = useState(null)

  const GYRO_PROTOCOL = gql`
    {
      protocolMetrics(first: 1, orderBy: timestamp, orderDirection: desc) {
        timestamp
        gyroCirculatingSupply
        sGyroCirculatingSupply
        totalSupply
        gyroPrice
        marketCap
        totalValueLocked
        treasuryMarketValue
        treasuryRiskFreeValue
        runwayCurrent
        currentAPY
        nextEpochRebase
        nextRebaseRewards
      }
    }
  `
  const { data, loading, error } = useQuery(GYRO_PROTOCOL)

  useEffect(() => {
    const loadContractBalance = async contractBalance => {
      if (contractBalance) {
        return
      }
      const provider = new ethers.providers.JsonRpcProvider(JSON_RPC_PROVIDER)
      const factory = new ethers.Contract(
        GYRO_CONTRACT_ADDRESS,
        ['function contractBalance() public view returns (uint256)'],
        provider
      )
      const newContractBalance = await factory.contractBalance()
      setContractBalance(newContractBalance.toString())

      if (!loading && data) {
        const protocolMetrics = data.protocolMetrics[0]
        const price = parseFloat(protocolMetrics.gyroPrice).toFixed(2)
        const runway = parseInt(protocolMetrics.runwayCurrent)
        const treasury = parseInt(protocolMetrics.treasuryMarketValue)
        const marketCap = parseInt(parseFloat(protocolMetrics.totalSupply) * parseFloat(protocolMetrics.gyroPrice))

        const contractBalanceGwei = ethers.utils.formatUnits(newContractBalance, 'gwei')
        const nextYield = (
          (Number.parseFloat(protocolMetrics.nextRebaseRewards) / Number.parseFloat(contractBalanceGwei)) *
          100
        ).toFixed(4)

        let nextEpochRebase_number = Number.parseFloat(nextYield)
        const apy = (Math.pow(nextEpochRebase_number / 100 + 1, 365 * 3 - 1) * 100).toFixed(2)

        const rfv = parseInt(protocolMetrics.treasuryRiskFreeValue)

        const totalStaked = parseFloat(
          (parseFloat(protocolMetrics.sGyroCirculatingSupply) / parseFloat(protocolMetrics.gyroCirculatingSupply)) * 100
        ).toFixed(2)

        setProtocolMetrics({
          price,
          runway,
          treasury,
          marketCap,
          nextYield,
          apy,
          rfv,
          totalStaked,
          treasuryMarketValue: parseInt(protocolMetrics.treasuryMarketValue)
        })
      }
    }

    if (!contractBalance) loadContractBalance(contractBalance)
  }, [contractBalance, data, loading])

  return (
    <StyledDiv className="App">
      <Header protocolMetrics={protocolMetrics} />
      <AnimationRevealPage>
        <Hero protocolMetrics={protocolMetrics} />
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
