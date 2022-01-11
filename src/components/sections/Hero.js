import React, { useRef } from 'react'
import NumberFormat from 'react-number-format'
import tw from 'twin.macro'
import styled from 'styled-components'
import { css } from 'styled-components/macro' //eslint-disable-line
import { useTranslation } from 'react-i18next'

import { SectionDescription } from 'components/misc/Typography.js'

import sectionBgImage from 'images/section-01-bg.svg'
import telegramIcon from 'images/icon-telegram-colored.svg'
import twitterIcon from 'images/icon-twitter-colored.svg'
import discordIcon from 'images/icon-discord-colored.svg'

const Content2Xl = tw.div`max-w-screen-2xl mx-auto h-screen`

const Container = styled.div`
  ${tw`relative -mx-8 -mt-8 bg-center bg-cover h-screen min-h-144 text-gray-100`}
  background-image: url("${sectionBgImage}");
`

const OpacityOverlay = tw.div`z-10 absolute inset-0 bg-black opacity-75 mix-blend-overlay`

const HeroContainer = tw.div`z-20 relative px-6 sm:px-8 mx-auto h-screen flex flex-col`
const Content = tw.div`px-4 flex flex-1 flex-col justify-center items-center mt-2 md:mt-24`

const ButtonContainer = tw.div`flex flex-col sm:flex-row justify-center items-center`

const Heading = styled.h1`
  ${tw`text-4xl text-center sm:text-4xl md:text-6xl lg:text-7xl xl:text-7xl font-bold text-gray-100 leading-tight -mt-24`}
  span {
    ${tw`inline-block mt-2`}
  }
`

const Description = tw(SectionDescription)`mt-4 max-w-3xl text-gray-100 text-xl md:text-2xl mx-auto lg:mx-0 text-center`

const PrimaryAction = tw.button`rounded-full px-8 py-3 mt-4 sm:mt-5 mx-4 text-sm sm:text-base sm:mt-16 sm:px-8 sm:py-4 bg-gray-100 font-bold shadow transition duration-300 bg-primary-500 text-gray-100 hocus:bg-primary-700 hocus:text-gray-200 focus:outline-none focus:shadow-outline`

const SocialSticky = tw.div`flex flex-col justify-center items-center fixed bottom-0 right-0 pr-4 md:pr-10 pb-5 md:pb-8 z-40`
const SocialAction = tw.button`sm:mt-4 font-bold shadow transition duration-300 mb-3 md:mb-0`
const SocialLink = styled.a`
  img {
    ${tw`w-6`}
  }
`
const ThreeColumnContainer = styled.div`
  ${tw`flex flex-col items-center md:items-stretch md:flex-row flex-wrap md:justify-center max-w-screen-lg mx-auto w-full`}
`
const Column = styled.div`
  ${tw`md:w-1/2 lg:w-1/3 max-w-xs text-center mb-2 md:mb-0`}
`
const HeroFooterTitle = styled.p`
  ${tw`text-center font-normal text-white`}
`
const HeroFooterValue = styled.h1`
  ${tw`text-2xl md:text-3xl text-center font-bold text-white`}
`

// eslint-disable-next-line
const Hero = props => {
  const myRef = useRef()

  const { t } = useTranslation()

  let currentAPY = ''
  let totalStaked = ''
  let treasuryBalance = ''
  let loading = true
  if (props.protocolMetrics) {
    const protocolMretrics = props.protocolMetrics

    currentAPY = protocolMretrics.apy
    totalStaked = protocolMretrics.totalStaked
    treasuryBalance = protocolMretrics.treasuryMarketValue
    loading = false
  }

  return (
    <Container>
      <Content2Xl>
        <OpacityOverlay />
        <HeroContainer>
          <Content>
            <Heading>{t('hero.heading')}</Heading>
            <Description ref={myRef}>{t('hero.description')}</Description>
            <ButtonContainer>
              <PrimaryAction>
                <a href="https://app.gyro.money">{t('hero.start-app')}</a>
              </PrimaryAction>
              <PrimaryAction>
                <a href="https://pancakeswap.finance/swap?inputCurrency=0x55d398326f99059ff775485246999027b3197955&outputCurrency=0x1b239abe619e74232c827fbe5e49a4c072bd869d">
                  {t('hero.buy-gyro')}
                </a>
              </PrimaryAction>
            </ButtonContainer>
          </Content>
        </HeroContainer>

        <SocialSticky>
          <SocialAction>
            <SocialLink href="https://t.me/GyroDAO" target="_blank">
              <img src={telegramIcon} alt="Telegram" />
            </SocialLink>
          </SocialAction>
          <SocialAction>
            <SocialLink href="https://twitter.com/GyroDAO" target="_blank">
              <img src={twitterIcon} alt="Twitter" />
            </SocialLink>
          </SocialAction>
          <SocialAction>
            <SocialLink href="https://discord.com/invite/gyrodao" target="_blank">
              <img src={discordIcon} alt="Discord" />
            </SocialLink>
          </SocialAction>
        </SocialSticky>
      </Content2Xl>

      <div className="hero-footer">
        <ButtonContainer>
          <ThreeColumnContainer>
            <Column>
              <HeroFooterTitle>Total Staked</HeroFooterTitle>
              <HeroFooterValue>
                {loading ? (
                  '-'
                ) : (
                  <NumberFormat
                    value={totalStaked}
                    displayType={'text'}
                    thousandSeparator={true}
                    renderText={(value, props) => value}
                    suffix="%"
                  />
                )}
              </HeroFooterValue>
            </Column>
            <Column>
              <HeroFooterTitle>Treasury Balance</HeroFooterTitle>
              <HeroFooterValue>
                {loading ? (
                  '-'
                ) : (
                  <NumberFormat
                    value={treasuryBalance}
                    displayType={'text'}
                    thousandSeparator={true}
                    renderText={(value, props) => value}
                    prefix="$"
                  />
                )}
              </HeroFooterValue>
            </Column>
            <Column>
              <HeroFooterTitle>Current APY</HeroFooterTitle>
              <HeroFooterValue>
                {loading ? (
                  '-'
                ) : (
                  <NumberFormat
                    value={currentAPY}
                    displayType={'text'}
                    thousandSeparator={true}
                    suffix={'%'}
                    renderText={(value, props) => value}
                  />
                )}
              </HeroFooterValue>
            </Column>
          </ThreeColumnContainer>
        </ButtonContainer>
      </div>
    </Container>
  )
}

export default Hero
