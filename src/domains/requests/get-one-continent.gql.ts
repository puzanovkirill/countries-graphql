import { gql } from '@apollo/client';

export type TContinentCountries = {
  code: string;
  name: string;
  emoji: string;
};

export type TGetOneContinentResult = {
  continent: {
    name: string;
    code: string;
    countries: TContinentCountries[];
  };
};

const GET_ONE_CONTINENT = gql`
  query GetOneContinent($code: ID!) {
    continent(code: $code) {
      countries {
        code
        name
        emoji
      }
      name
      code
    }
  }
`;

export default GET_ONE_CONTINENT;
