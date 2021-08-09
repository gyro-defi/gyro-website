import React from 'react'
import tw from 'twin.macro'
import styled from 'styled-components'
import { css } from 'styled-components/macro' //eslint-disable-line
import { SectionHeading, Subheading as SubheadingBase } from 'components/misc/Headings.js'
import { PrimaryButton as PrimaryButtonBase } from 'components/misc/Buttons.js'
import FeaturedImage from 'images/section-03-bg.svg'
import { SectionDescription } from 'components/misc/Typography.js'

const Container = styled.div`
  ${tw`relative text-gray-100 bg-left`}
`
const TwoColumn = tw.div`flex flex-col md:flex-row justify-between max-w-screen-xl mx-auto py-20 md:py-24 items-center`
const Column = tw.div`w-full max-w-md mx-auto md:max-w-none md:mx-0`
const ImageColumn = tw(Column)`md:w-6/12 flex-shrink-0 relative`

const TextColumn = styled(Column)(props => [
  tw`md:w-6/12 mt-16 md:mt-0`,
  props.textOnLeft ? tw`md:mr-12 lg:mr-16 md:order-first` : tw`md:ml-12 lg:ml-16 md:order-last`
])

const Image = styled.img`
  ${tw`-ml-12`}
  min-width: 140%;
`

const TextContent = tw.div`lg:py-8 text-center md:text-left`

const Subheading = tw(SubheadingBase)`text-center md:text-left text-gray-100`
const Heading = tw(SectionHeading)`mt-4 text-left text-3xl sm:text-4xl lg:text-5xl text-center md:text-left`
const Description = tw(SectionDescription)`text-center md:text-left text-sm md:text-base lg:text-lg leading-relaxed`

// eslint-disable-next-line
const PrimaryButton = styled(PrimaryButtonBase)(props => [
  tw`mt-8 md:mt-8 text-sm inline-block mx-auto md:mx-0`,
  props.buttonRounded && tw`rounded-full`
])

// eslint-disable-next-line
export default ({
  subheading = 'Our Expertise',
  heading = (
    <>
      Designed & Developed by <span tw="text-primary-500">Professionals.</span>
    </>
  ),
  primaryButtonText = 'Learn More',
  primaryButtonUrl = 'https://timerse.com',
  imageSrc = FeaturedImage,
  buttonRounded = true,
  imageRounded = true,
  imageBorder = false,
  imageShadow = false,
  imageCss = null,
  textOnLeft = true
}) => {
  // The textOnLeft boolean prop can be used to display either the text on left or right side of the image.

  return (
    <Container id="how-it-works">
      <TwoColumn>
        <ImageColumn>
          <Image
            css={imageCss}
            src={imageSrc}
            imageBorder={imageBorder}
            imageShadow={imageShadow}
            imageRounded={imageRounded}
          />
        </ImageColumn>
        <TextColumn textOnLeft={textOnLeft}>
          <TextContent>
            <Subheading>{subheading}</Subheading>
            <Heading>{heading}</Heading>
            <Description>
              Fundamentally, Gyro consists of a treasury and liquidity that is managed and owned by the protocol itself.
              Gyro's algorithm dynamically mints GYRO tokens based on a bond mechanism, and high staking rewards that
              are designed to control inflation and dilution.
            </Description>
            <Description>
              The treasury issues Bonds which then generates profit for the protocol. This allows the treasury to use
              the profit to mint GYRO and distribute them to stakers. With LP bonds, the protocol is able to accumulate
              liquidity, ensuring system stability.
            </Description>
            {/* <PrimaryButton
              buttonRounded={buttonRounded}
              as="a"
              href={primaryButtonUrl}
            >
              {primaryButtonText}
            </PrimaryButton> */}
          </TextContent>
        </TextColumn>
      </TwoColumn>
    </Container>
  )
}
