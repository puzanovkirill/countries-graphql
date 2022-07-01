import { Grid, GridItem, VStack, useColorModeValue } from '@chakra-ui/react';
import { Flag, GlobeHemisphereWest, House, Translate } from 'phosphor-react';
import { Outlet } from 'react-router-dom';
import { NavIconLink, Header } from '../components';
import { PATHNAMES } from '../consts';

function MainLayout() {
  const primaryBg = useColorModeValue('gray.300', 'gray.600');

  return (
    <Grid
      templateAreas='"header header" "nav main"'
      gridTemplateRows="max-content 1fr"
      gridTemplateColumns="max-content 1fr"
      gap={0}
      h="100vh"
    >
      <GridItem bg={primaryBg} area="header" h={14} p={0} pl={4} pr={6}>
        <Header />
      </GridItem>
      <GridItem pl="2" bg={primaryBg} area="nav" p={0} w={20}>
        <VStack p={4}>
          <NavIconLink link={PATHNAMES.continents} label="Home" icon={House} />
          <NavIconLink
            link={PATHNAMES.continents}
            label="Continents"
            icon={GlobeHemisphereWest}
          />
          <NavIconLink
            link={PATHNAMES.countries}
            label="Countries"
            icon={Flag}
          />
          <NavIconLink
            link={PATHNAMES.languages}
            label="Languages"
            icon={Translate}
          />
        </VStack>
      </GridItem>
      <GridItem pl="2" bg="green.300" area="main">
        <Outlet />
      </GridItem>
    </Grid>
  );
}

export default MainLayout;
