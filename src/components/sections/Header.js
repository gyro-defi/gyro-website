import React, { useEffect } from 'react'
import tw from 'twin.macro'
import styled from 'styled-components'
import { css } from 'styled-components/macro' //eslint-disable-line
import { useTranslation } from 'react-i18next'
import NumberFormat from 'react-number-format'

import HeaderBase, { NavLink as NavLinkBase, NavLinks, PrimaryLink as PrimaryLinkBase } from '../headers/light.js'
import logoImageSrc from 'images/logo-light.svg'

const Header = tw(HeaderBase)`max-w-none w-full`
const NavLink = tw(NavLinkBase)`lg:text-gray-100 lg:hocus:text-gray-300 lg:hocus:border-gray-100`
const LogoLink = styled.div`
  ${tw`text-gray-100 hocus:text-gray-300`}
  img {
    ${tw`w-20`}
  }
`

const PrimaryLink = tw(PrimaryLinkBase)`rounded-full lg:ml-6` //eslint-disable-line

// eslint-disable-next-line
const HeaderFC = props => {
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

  let marqueeData = null

  if (props.protocolMetrics) {
    const protocolMetrics = props.protocolMetrics

    marqueeData = (
      <div className="header-data">
        <div className="marquee">
          <div className="marquee-inner">
            <ul className="header-data-scroll">
              <li>
                Price{' '}
                <strong>
                  <NumberFormat
                    value={protocolMetrics.price}
                    displayType={'text'}
                    thousandSeparator={true}
                    renderText={(value, props) => value}
                    prefix="$"
                  />
                </strong>
              </li>
              <li>
                APY{' '}
                <strong>
                  <NumberFormat
                    value={protocolMetrics.apy}
                    displayType={'text'}
                    thousandSeparator={true}
                    suffix={'%'}
                    renderText={(value, props) => value}
                  />
                </strong>
              </li>
              <li>
                Runway{' '}
                <strong>
                  <NumberFormat
                    value={protocolMetrics.runway}
                    displayType={'text'}
                    thousandSeparator={true}
                    renderText={(value, props) => value}
                  />{' '}
                  Days
                </strong>
              </li>
              <li>
                Treasury{' '}
                <strong>
                  <NumberFormat
                    value={protocolMetrics.treasury}
                    displayType={'text'}
                    thousandSeparator={true}
                    prefix="$"
                    renderText={(value, props) => value}
                  />
                </strong>
              </li>
              <li>
                Market Cap{' '}
                <strong>
                  <NumberFormat
                    value={protocolMetrics.marketCap}
                    displayType={'text'}
                    thousandSeparator={true}
                    prefix="$"
                    renderText={(value, props) => value}
                  />
                </strong>
              </li>
              <li>
                Next Yield{' '}
                <strong>
                  <NumberFormat
                    value={protocolMetrics.nextYield}
                    displayType={'text'}
                    thousandSeparator={true}
                    suffix="%"
                    renderText={(value, props) => value}
                  />
                </strong>
              </li>
              <li>
                RFV{' '}
                <strong>
                  <NumberFormat
                    value={protocolMetrics.rfv}
                    displayType={'text'}
                    thousandSeparator={true}
                    prefix="$"
                    renderText={(value, props) => value}
                  />
                </strong>
              </li>
              <li>
                Price{' '}
                <strong>
                  <NumberFormat
                    value={protocolMetrics.price}
                    displayType={'text'}
                    thousandSeparator={true}
                    renderText={(value, props) => value}
                    prefix="$"
                  />
                </strong>
              </li>
              <li>
                APY{' '}
                <strong>
                  <NumberFormat
                    value={protocolMetrics.apy}
                    displayType={'text'}
                    thousandSeparator={true}
                    suffix={'%'}
                    renderText={(value, props) => value}
                  />
                </strong>
              </li>
            </ul>
          </div>
        </div>
      </div>
    )
  }

  useEffect(() => {
    const header = document.getElementById('appHeader')
    if (header) {
      const sticky = header.offsetTop
      window.addEventListener('scroll', () => {
        if (window.pageYOffset > sticky) {
          header.classList.add('is-sticky')
        } else {
          header.classList.remove('is-sticky')
        }
      })
    }
  }, [])

  return (
    <div id="appHeader" className="header-horizontal">
      <Header logoLink={logoLink} links={navLinks} marqueeData={marqueeData} className="" />
    </div>
  )
}

export default HeaderFC
