import { useQuery } from '@apollo/client';
import {
  Center,
  Spinner,
  Text,
  VStack,
  Wrap,
  WrapItem,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { LoadingSpinner } from '../common/components';
import { PATHNAMES } from '../common/consts';
import { GET_CONTINENTS, TGetContinentsResult } from '../domains';

function ContinentsPage() {
  const { data, loading, error } = useQuery<TGetContinentsResult>(
    GET_CONTINENTS,
    { fetchPolicy: 'cache-and-network' }
  );

  if (error) {
    return <Text>'some error...'</Text>;
  }

  console.log(data);

  const continents = data?.continents ?? [];

  return (
    <>
      {loading && <LoadingSpinner />}
      {data && !loading && (
        <Wrap p={4}>
          {continents.map((continent) => (
            <WrapItem>
              <Link to={`${PATHNAMES.continents}/${continent.code}`}>
                <VStack
                  border="1px solid black"
                  borderRadius="sm"
                  cursor="pointer"
                >
                  <Text>{continent.name}</Text>
                  <Text>Number of countries: {continent.countries.length}</Text>
                </VStack>
              </Link>
            </WrapItem>
          ))}
        </Wrap>
      )}
    </>
  );
}

export default ContinentsPage;
