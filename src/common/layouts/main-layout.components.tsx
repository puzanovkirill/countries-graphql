import {
  HStack,
  IconButton,
  Grid,
  Tooltip,
  GridItem,
  VStack,
  useColorModeValue,
  Flex,
  Avatar,
  Text,
  Icon,
  useColorMode,
} from '@chakra-ui/react';
import { House, Moon, Sun } from 'phosphor-react';
import { Outlet } from 'react-router-dom';

function MainLayout() {
  const { toggleColorMode } = useColorMode();
  const text = useColorModeValue('dark', 'light');
  const SwitchIcon = useColorModeValue(Moon, Sun);
  const primaryBg = useColorModeValue('gray.300', 'gray.600');

  return (
    <Grid
      templateAreas='"header header" "nav main"'
      gridTemplateRows="max-content 1fr"
      gridTemplateColumns="max-content 1fr"
      gap={0}
      h="100vh"
    >
      <GridItem pl="2" bg={primaryBg} area="header" h={14} p={0} px={4}>
        <Flex justifyContent="space-between" alignItems="center" h="full">
          <HStack alignItems="center">
            <Avatar />
            <Text>Powered by Kirill Puzanov</Text>
          </HStack>
          <Tooltip label={`Switch to ${text} mode`}>
            <IconButton
              size="md"
              fontSize="lg"
              variant="ghost"
              color="current"
              onClick={toggleColorMode}
              icon={<Icon as={SwitchIcon} w="6" h="6" />}
              aria-label={`Switch to ${text} mode`}
            />
          </Tooltip>
        </Flex>
      </GridItem>
      <GridItem pl="2" bg={primaryBg} area="nav" p={0} w={20}>
        <VStack p={4}>
          <Tooltip label="Home">
            <IconButton
              w="full"
              as={House}
              variant="ghost"
              aria-label="Navigate to home page"
            />
          </Tooltip>
        </VStack>
      </GridItem>
      <GridItem pl="2" bg="green.300" area="main">
        <Outlet />
      </GridItem>
    </Grid>
  );
}

export default MainLayout;
