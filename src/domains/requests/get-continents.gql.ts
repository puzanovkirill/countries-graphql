import { gql } from '@apollo/client';

export type TContinent = {
  code: string;
  name: string;
  countries: string[];
};

export type TGetContinentsResult = {
  continents: TContinent[];
};

const GET_CONTINENTS = gql`
  query GetContinents {
    continents {
      code
      name
      countries {
        code
      }
    }
  }
`;

export default GET_CONTINENTS;
