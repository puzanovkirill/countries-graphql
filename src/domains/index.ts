import GET_CONTINENTS, {
  TContinent,
  TGetContinentsResult,
} from './requests/get-continents.gql';
import GET_ONE_CONTINENT, {
  TContinentCountries,
  TGetOneContinentResult,
} from './requests/get-one-continent.gql';

export {
  GET_CONTINENTS,
  GET_ONE_CONTINENT,
  type TGetOneContinentResult,
  type TContinentCountries,
  type TContinent,
  type TGetContinentsResult,
};
