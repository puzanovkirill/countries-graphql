import GET_CONTINENTS, {
  TContinent,
  TGetContinentsResult,
} from './requests/get-continents.gql';
import GET_ONE_CONTINENT, {
  TContinentCountries,
  TGetOneContinentResult,
} from './requests/get-one-continent.gql';
import GET_COUNTRIES, {
  TCountries,
  TGetCountriesResult,
} from './requests/get-countries.gql';
import GET_LANGUAGES, {
  TGetLanguages,
  TLanguage,
} from './requests/get-languages.gql';

export {
  GET_CONTINENTS,
  GET_ONE_CONTINENT,
  GET_COUNTRIES,
  GET_LANGUAGES,
  type TGetLanguages,
  type TLanguage,
  type TCountries,
  type TGetCountriesResult,
  type TGetOneContinentResult,
  type TContinentCountries,
  type TContinent,
  type TGetContinentsResult,
};
