import React from 'react'
import tw from 'twin.macro'
import styled from 'styled-components'
import { css } from 'styled-components/macro' //eslint-disable-line
import { SectionHeading, Subheading as SubheadingBase } from 'components/misc/Headings.js'
import { SectionDescription } from 'components/misc/Typography.js'

import { ReactComponent as TelegramIcon } from 'images/icon-telegram.svg'
import { ReactComponent as TwitterIcon } from 'images/icon-twitter.svg'
import { ReactComponent as GithubIcon } from 'images/icon-github.svg'
import { ReactComponent as DiscordIcon } from 'images/icon-discord.svg'

import sectionBgImage from 'images/section-06-bg.jpg'

const Container = styled.div`
  ${tw`relative bg-cover bg-center -mx-8 px-8 text-gray-100`}
  background-image: url("${sectionBgImage}");
  min-height: 42em;
`

const TwoColumn = tw.div`z-20 flex flex-col md:flex-row justify-between max-w-screen-xl mx-auto py-20 md:py-24 items-center`
const Column = tw.div`w-full max-w-md mx-auto md:max-w-none md:mx-0`
const TextColumn = styled(Column)(props => [
  tw`md:w-6/12 mt-16 md:mt-0`,
  props.textOnLeft ? tw`md:mr-12 lg:mr-16 md:order-first` : tw`md:ml-12 lg:ml-16 md:order-last`
])

const TextContent = tw.div`lg:py-8 text-center md:text-left`

const Subheading = tw(SubheadingBase)`text-center md:text-left text-gray-100` //eslint-disable-line
const Heading = tw(SectionHeading)`mt-4 text-left text-3xl sm:text-4xl lg:text-5xl text-center md:text-left`

const Steps = tw.ul`mt-12`
const Step = tw.li`mt-8 flex flex-col md:flex-row items-center md:items-start`
const StepText = tw.div`mt-3 md:mt-0 md:ml-6`
const StepHeading = tw.h6`leading-none text-xl font-semibold`
const StepDescription = tw.p`mt-3 max-w-xs leading-loose text-sm text-gray-300 font-normal`
const Description = tw(SectionDescription)`w-full`

const FeatureIconContainer = styled.div`
  ${tw`inline-block text-center rounded-full p-2 flex-shrink-0`}
  svg {
    ${tw`w-6 h-6 text-primary-500`}
  }
`
// eslint-disable-next-line
export default ({
  subheading = 'Our Expertise',
  heading = (
    <>
      Designed & Developed by <span tw="text-primary-500">Professionals.</span>
    </>
  ),
  description = false,
  textOnLeft = false
}) => {
  // The textOnLeft boolean prop can be used to display either the text on left or right side of the image.

  const socialChannels = [
    {
      Icon: TelegramIcon,
      title: 'Telegram',
      description: 'Ask general questions and chat with the worldwide community on Telegram',
      link: 'https://t.me/GyroDAO'
    },
    {
      Icon: TwitterIcon,
      title: 'Twitter',
      description: 'Follow @GyroDAO to get the latest news and updates from across the ecosystem',
      link: 'https://twitter.com/GyroDAO'
    },
    {
      Icon: DiscordIcon,
      title: 'Discord',
      description: 'Join our Discord to debate, offer suggestions and propose improvements',
      link: 'https://discord.com/invite/B22gZh4jer'
    },
    {
      Icon: GithubIcon,
      title: 'Repository',
      description: 'Visit our Github repo for the latest codes',
      link: 'https://github.com/gyro-defi/'
    }
  ]

  return (
    <Container id="join-community">
      <TwoColumn>
        <TextColumn>
          <TextContent>
            {/* <Subheading>{subheading}</Subheading> */}
            <Heading>{heading}</Heading>
            <Description>{description}</Description>
          </TextContent>
        </TextColumn>
        <TextColumn textOnLeft={textOnLeft}>
          <TextContent>
            <Steps>
              {socialChannels.map((step, index) => (
                <a key={index} href={step.link}>
                  <Step>
                    <FeatureIconContainer>{<step.Icon />}</FeatureIconContainer>
                    <StepText>
                      <StepHeading>{step.title}</StepHeading>
                      <StepDescription>{step.description}</StepDescription>
                    </StepText>
                  </Step>
                </a>
              ))}
            </Steps>
          </TextContent>
        </TextColumn>
      </TwoColumn>
    </Container>
  )
}
