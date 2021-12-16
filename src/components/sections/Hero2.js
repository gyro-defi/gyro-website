import React, { useRef } from 'react'
import tw from 'twin.macro'
import styled from 'styled-components'
import { css } from 'styled-components/macro' //eslint-disable-line
import { useTranslation } from 'react-i18next'

import { SectionDescription } from 'components/misc/Typography.js'

import HeaderBase, { NavLink as NavLinkBase, NavLinks, PrimaryLink as PrimaryLinkBase } from '../headers/light.js'

import logoImageSrc from 'images/logo-light.svg'
import sectionBgImage from 'images/section-01-bg.svg'

const Content2Xl = tw.div`max-w-screen-2xl mx-auto h-screen`
const Header = tw(HeaderBase)`max-w-none py-8 -mx-8 px-8`
const NavLink = tw(NavLinkBase)`lg:text-gray-100 lg:hocus:text-gray-300 lg:hocus:border-gray-100`
const LogoLink = styled.div`
  ${tw`text-gray-100 hocus:text-gray-300`}
  img {
    ${tw`w-20`}
  }
`

const PrimaryLink = tw(PrimaryLinkBase)`rounded-full lg:ml-6` //eslint-disable-line
const Container = styled.div`
  ${tw`relative -mx-8 -mt-8 bg-center bg-cover h-screen min-h-144 text-gray-100`}
  background-image: url("${sectionBgImage}");
`

const OpacityOverlay = tw.div`z-10 absolute inset-0 bg-gray-900 opacity-25`

const HeroContainer = tw.div`z-20 relative px-6 sm:px-8 mx-auto h-full flex flex-col`
const Content = tw.div`px-4 flex flex-1 flex-col justify-center items-center`

const Heading = styled.h1`
  ${tw`text-5xl text-center  sm:text-5xl md:text-6xl lg:text-7xl xl:text-7xl font-bold text-gray-100 leading-tight -mt-24 sm:mt-0`}
  span {
    ${tw`inline-block mt-2`}
  }
`

const Description = tw(SectionDescription)`mt-4 max-w-2xl text-gray-100 text-2xl mx-auto lg:mx-0`

const PrimaryAction = tw.button`rounded-full px-8 py-3 mt-10 mx-4 text-sm sm:text-base sm:mt-16 sm:px-8 sm:py-4 bg-gray-100 font-bold shadow transition duration-300 bg-primary-500 text-gray-100 hocus:bg-primary-700 hocus:text-gray-200 focus:outline-none focus:shadow-outline`

// eslint-disable-next-line
export default () => {
  const myRef = useRef()

  const { t } = useTranslation()

  const logoLink = (
    <LogoLink href="/">
      <img src={logoImageSrc} alt="Logo" />
    </LogoLink>
  )
  const navLinks = [
    <NavLinks key={1}>
      <NavLink href="https://docs.gyro.money">Docs</NavLink>
      <NavLink href="https://github.com/peckshield/publications/blob/master/audit_reports/PeckShield-Audit-Report-Gyro-v1.0.pdf">
        Audit
      </NavLink>
      <NavLink href="#join-community">{t('menu.join-community')}</NavLink>
      {/* <PrimaryLink href="#">Signup</PrimaryLink> */}
    </NavLinks>
  ]

  return (
    <Container>
      <Content2Xl>
        <OpacityOverlay />
        <HeroContainer>
          <Header logoLink={logoLink} links={navLinks} />
          <Content>
            <Heading>{t('hero.heading')}</Heading>
            <Description ref={myRef}>{t('hero.description')}</Description>
            <div>
              <PrimaryAction>
                <a href="https://app.gyro.money">{t('hero.start-app')}</a>
              </PrimaryAction>
              <PrimaryAction>
                <a href="https://pancakeswap.finance/swap?inputCurrency=0x55d398326f99059ff775485246999027b3197955&outputCurrency=0x1b239abe619e74232c827fbe5e49a4c072bd869d">
                  {t('hero.buy-gyro')}
                </a>
              </PrimaryAction>
            </div>
          </Content>
        </HeroContainer>
      </Content2Xl>
    </Container>
  )
}
