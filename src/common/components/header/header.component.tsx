import { Avatar, Flex, HStack, Text } from '@chakra-ui/react';
import ColorModeSwitcher from './color-mode-switcher.component';

function Header() {
  return (
    <Flex justifyContent="space-between" alignItems="center" h="full">
      <HStack alignItems="center">
        <Avatar />
        <Text>Powered by Kirill Puzanov</Text>
      </HStack>
      <ColorModeSwitcher />
    </Flex>
  );
}

export default Header;
