import { useQuery } from '@apollo/client';
import { Text } from '@chakra-ui/react';
import { LoadingSpinner } from '../common/components';
import { GET_LANGUAGES, TGetLanguages } from '../domains';

function LanguagesPage() {
  const { data, loading, error } = useQuery<TGetLanguages>(GET_LANGUAGES);

  if (error) {
    return <Text>some error...</Text>;
  }

  if (loading) {
    <LoadingSpinner />;
  }

  const languages = data?.languages ?? [];
  return (
    <>
      {languages.map((language) => (
        <Text>{language.name}</Text>
      ))}
    </>
  );
}

export default LanguagesPage;
