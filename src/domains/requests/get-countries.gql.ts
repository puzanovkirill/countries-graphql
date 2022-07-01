import { gql } from '@apollo/client';

export type TCountries = {
  code: string;
  name: string;
  native: string;
  phone: string;
  currency: string;
  emoji: string;
  languages: string[];
  states: string[];
};

export type TGetCountriesResult = {
  countries: TCountries[];
};

const GET_COUNTRIES = gql`
  query GetCountries {
    countries {
      code
      name
      native
      phone
      currency
      emoji
      languages {
        code
      }
      states {
        code
      }
    }
  }
`;

export default GET_COUNTRIES;
