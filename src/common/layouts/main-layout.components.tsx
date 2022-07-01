import {
  HStack,
  IconButton,
  Grid,
  Tooltip,
  GridItem,
  VStack,
  useColorModeValue,
} from '@chakra-ui/react';
import { House } from 'phosphor-react';
import { Outlet } from 'react-router-dom';

function MainLayout() {
  const navBg = useColorModeValue('gray.300', 'gray.600');
  return (
    <Grid
      templateAreas='"header header" "nav main"'
      gridTemplateRows="max-content 1fr"
      gridTemplateColumns="max-content 1fr"
      gap={0}
      h="100vh"
    >
      <GridItem pl="2" bg="orange.300" area="header" h={14}></GridItem>
      <GridItem pl="2" bg={navBg} area="nav" p={0} w={20}>
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
