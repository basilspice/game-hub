import {Button, Menu, MenuButton, MenuItem, MenuList} from '@chakra-ui/react'
import React from 'react'
import { BsChevronDown } from 'react-icons/bs'
import usePlatforms from '../hooks/usePlatforms'
import { Platform } from '../hooks/useGames'

const SortSelector = () => {
    return (
        <Menu>
            <MenuButton as={Button} rightIcon={<BsChevronDown />}>Order by: Relevance</MenuButton>
            <MenuList>
<MenuItem>Relevance</MenuItem>
<MenuItem>Date Added</MenuItem>
<MenuItem>Name</MenuItem>
<MenuItem>Release Date</MenuItem>
<MenuItem>Average Rating</MenuItem>
<MenuItem>Popularity</MenuItem>    
            </MenuList>
        </Menu>
      )
}

export default SortSelector