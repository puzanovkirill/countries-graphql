import { Center, Spinner } from '@chakra-ui/react';

function LoadingSpinner() {
  return (
    <Center h="full">
      <Spinner size="xl" />
    </Center>
  );
}

export default LoadingSpinner;
