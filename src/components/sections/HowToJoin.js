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
import sectionBgImage from 'images/section-05-bg.svg'

const Container = styled.div`
  ${tw`relative -mx-8 px-8 text-gray-100 bg-cover bg-center`}
  background-image: url("${sectionBgImage}");
`

const ThreeColumnContainer = styled.div`
  ${tw`flex flex-col items-center md:items-stretch md:flex-row flex-wrap md:justify-center max-w-screen-lg mx-auto py-20 md:py-24`}
`
const Subheading = tw(SubheadingBase)`mb-4 text-gray-100` //eslint-disable-line
const Heading = tw(SectionHeading)`w-full`
const Description = tw(SectionDescription)`w-full text-center text-gray-300`

const VerticalSpacer = tw.div`mt-10 w-full`

const Column = styled.div`
  ${tw`md:w-1/2 lg:w-1/3 max-w-xs`}
`

const Card = styled.div`
  ${tw`flex flex-col items-center sm:items-start text-center sm:text-left h-full mx-4 px-2 py-8`}
  .imageContainer {
    ${tw`text-center p-5 flex-shrink-0`}
    img {
      ${tw`w-20 h-20`}
    }
  }

  .textContainer {
    ${tw`mt-0`}
  }

  .title {
    ${tw`tracking-wider leading-none text-gray-400`}
  }

  .description {
    ${tw`mt-2 font-normal font-bold text-xl  leading-snug`}
  }
`

// eslint-disable-next-line
export default ({
  cards = null,
  heading = 'Currency built for the new financial system',
  subheading = null,
  description = null
}) => {
  /*
   * This componets has an array of object denoting the cards defined below. Each object in the cards array can have the key (Change it according to your need, you can also add more objects to have more cards in this feature component) or you can directly pass this using the cards prop:
   *  1) imageSrc - the image shown at the top of the card
   *  2) title - the title of the card
   *  3) description - the description of the card
   *  If a key for a particular card is not provided, a default value is used
   */

  const defaultCards = [
    {
      imageSrc: Icon01,
      title: 'GYRO Bonding',
      description: 'Provide liquidity and get GYRO at discount.'
    },
    {
      imageSrc: Icon02,
      title: 'Staking',
      description: 'Stake and earn high rewards.'
    },
    {
      imageSrc: Icon03,
      title: 'Decentralized Exchange',
      description: 'Swap GYRO on any decentralized exchanges.'
    }
  ]

  if (!cards) cards = defaultCards

  return (
    <Container id="how-to-join">
      <ThreeColumnContainer>
        {/* {subheading && <Subheading>{subheading}</Subheading>} */}
        <Heading>{heading}</Heading>
        {description && <Description>{description}</Description>}
        <VerticalSpacer />
        {cards.map((card, i) => (
          <Column key={i}>
            <Card>
              <span className="textContainer">
                <span className="title">{card.title}</span>
              </span>
              <span className="imageContainer">
                <img src={card.imageSrc} alt="" />
              </span>
              <span className="textContainer">
                <p className="description">{card.description}</p>
              </span>
            </Card>
          </Column>
        ))}
      </ThreeColumnContainer>
    </Container>
  )
}
