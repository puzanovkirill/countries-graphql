import { useQuery } from '@apollo/client';
import { Text } from '@chakra-ui/react';
import { LoadingSpinner } from '../common/components';
import { GET_COUNTRIES, TGetCountriesResult } from '../domains';

function CountriesPage() {
  const { data, loading, error } = useQuery<TGetCountriesResult>(GET_COUNTRIES);

  if (error) {
    return <Text>some error...</Text>;
  }

  if (loading) {
    return <LoadingSpinner />;
  }

  const countries = data?.countries ?? [];

  return (
    <>
      {countries.map((country) => (
        <Text>{country.name}</Text>
      ))}
    </>
  );
}

export default CountriesPage;
