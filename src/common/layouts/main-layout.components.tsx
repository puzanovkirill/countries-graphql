import { Grid, GridItem, VStack } from '@chakra-ui/react';
import { Flag, GlobeHemisphereWest, House, Translate } from 'phosphor-react';
import { Outlet } from 'react-router-dom';
import { NavIconLink, Header } from '../components';
import { PATHNAMES } from '../consts';

function MainLayout() {
  return (
    <Grid
      templateAreas='"header header" "nav main"'
      gridTemplateRows="max-content 1fr"
      gridTemplateColumns="max-content 1fr"
      gap={0}
      h="100vh"
    >
      <GridItem area="header" h={16} pl={4} pr={6}>
        <Header />
      </GridItem>
      <GridItem area="nav" p={0} w={20}>
        <VStack p={4}>
          <NavIconLink link={PATHNAMES.home} label="Home" icon={House} />
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
      <GridItem
        p={4}
        area="main"
        borderLeftWidth="1px"
        borderTopWidth="1px"
        borderRadius="md"
      >
        <Outlet />
      </GridItem>
    </Grid>
  );
}

export default MainLayout;
