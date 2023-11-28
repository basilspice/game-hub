import { HStack, Image, Text } from '@chakra-ui/react'
import logo from '../assets/GameHub Resources/Logo/logo.webp'
import React from 'react'

const NavBar = () => {
  return (

        <HStack>
            <Image src={logo} boxSize='60px' />
            <Text>NavBar</Text>
        </HStack>
  )
}

export default NavBar