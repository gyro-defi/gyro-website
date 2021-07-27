import React from 'react'
import styled from 'styled-components'
import tw from 'twin.macro'
//eslint-disable-next-line
import { css } from 'styled-components/macro'
import { SectionHeading, Subheading as SubheadingBase } from 'components/misc/Headings.js'
import { SectionDescription } from 'components/misc/Typography.js'

import Icon01 from 'images/icon-01.svg'
import Icon02 from 'images/icon-02.svg'
import Icon03 from 'images/icon-03.svg'
import sectionBgImage from 'images/section-02-bg.svg'

const Container = styled.div`
  ${tw`relative bg-contain bg-center min-h-screen -mx-8 px-8 text-gray-100 bg-no-repeat`}
  background-image: url("${sectionBgImage}");
`

const ThreeColumnContainer = styled.div`
  ${tw`flex flex-col items-center md:items-stretch md:flex-row flex-wrap md:justify-center max-w-screen-lg mx-auto py-20 md:py-24`}
`
const Subheading = tw(SubheadingBase)`mb-4 text-gray-100`
const Heading = tw(SectionHeading)`w-full`
const Description = tw(SectionDescription)`w-full text-center`

const VerticalSpacer = tw.div`mt-10 w-full`

const Column = styled.div`
  ${tw`md:w-1/2 lg:w-1/3 max-w-xs`}
`

const Card = styled.div`
  ${tw`flex flex-col items-center sm:items-start text-center sm:text-left h-full mx-4 px-2 py-8`}
  .imageContainer {
    ${tw`text-center p-2 flex-shrink-0`}
    img {
      ${tw`w-16 h-16`}
    }
  }

  .textContainer {
    ${tw`mt-6`}
  }

  .title {
    ${tw`tracking-wider font-bold text-xl leading-none`}
  }

  .description {
    ${tw`mt-2 font-normal text-gray-400 leading-snug`}
  }
`

// eslint-disable-next-line
export default ({
  cards = null,
  heading = 'Currency built for the new financial system',
  subheading = null,
  description = "Gyro is a decentralized currency that isn't pegged to any fiat currency. By using algorithmic control of market dynamics, Gyro's stable-currency aims to curb inflation and give users the same purchasing power tomorrow as they do today"
}) => {
  const defaultCards = [
    {
      imageSrc: Icon01,
      title: 'Asset-backed',
      description:
        'Every GYRO is backed by multi-asset stablecoins and GYRO-USDT LP in the treasury. This ensures GYRO will be greater than or equal to 1 USDT.'
    },
    {
      imageSrc: Icon02,
      title: 'Protocol-controlled',
      description:
        'The treasury and reserve are managed and controlled by the protocol itself; allowing transparency and fairness for all participants.'
    },
    {
      imageSrc: Icon03,
      title: 'Community Governed',
      description:
        'Gyro is a community-driven open protocol where GYRO token holders can suggest, debate and implement changes to Gyro.'
    }
  ]

  if (!cards) cards = defaultCards

  return (
    <Container id="what-is-gyro">
      <ThreeColumnContainer>
        {subheading && <Subheading>{subheading}</Subheading>}
        <Heading>{heading}</Heading>
        {description && <Description>{description}</Description>}
        <VerticalSpacer />
        {cards.map((card, i) => (
          <Column key={i}>
            <Card>
              <span className="imageContainer">
                <img src={card.imageSrc} alt="" />
              </span>
              <span className="textContainer">
                <span className="title">{card.title || 'Fully Secure'}</span>
                <p className="description">{card.description}</p>
              </span>
            </Card>
          </Column>
        ))}
      </ThreeColumnContainer>
    </Container>
  )
}
