import React from 'react'
import tw from 'twin.macro'
import styled from 'styled-components' //eslint-disable-line
import { Container as ContainerBase } from 'components/misc/Layouts.js'
import logo from '../../images/logo.svg'

const Container = tw(ContainerBase)`bg-black text-gray-100 -mx-8 -mb-8`
const Content = tw.div`max-w-screen-xl mx-auto py-20 lg:py-24`

const Row = tw.div`flex items-center justify-center flex-col px-8`

const LogoContainer = tw.div`flex items-center justify-center md:justify-start`
const LogoImg = tw.img`w-20`

const CopyrightText = tw.p`text-center mt-10 font-medium tracking-wide text-sm text-gray-600`
// eslint-disable-next-line
export default () => {
  return (
    <Container>
      <Content>
        <Row>
          <LogoContainer>
            <LogoImg src={logo} />
          </LogoContainer>
          <CopyrightText>&copy; Copyright 2021, Gyro DAO. All Rights Reserved.</CopyrightText>
        </Row>
      </Content>
    </Container>
  )
}
