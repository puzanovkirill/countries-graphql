import { useQuery } from '@apollo/client';
import { Text } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import { LoadingSpinner } from '../common/components';
import { GET_ONE_CONTINENT, TGetOneContinentResult } from '../domains';

function SingleContinent() {
  const { code } = useParams();
  const { data, loading, error } = useQuery<TGetOneContinentResult>(
    GET_ONE_CONTINENT,
    {
      variables: { code },
    }
  );

  if (error) {
    return <Text>some error...</Text>;
  }

  if (loading) {
    return <LoadingSpinner />;
  }

  const continent = data?.continent;

  return <Text>{continent?.name}</Text>;
}

export default SingleContinent;
