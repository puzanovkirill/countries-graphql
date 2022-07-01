import { gql } from '@apollo/client';

export type TLanguage = {
  code: string;
  name: string;
  native: string;
  rtl: boolean;
};

export type TGetLanguages = {
  languages: TLanguage[];
};

const GET_LANGUAGES = gql`
  query GetLanguages {
    languages {
      code
      name
      native
      rtl
    }
  }
`;

export default GET_LANGUAGES;
