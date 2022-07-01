import { Route, BrowserRouter, Routes } from 'react-router-dom';
import { PATHNAMES } from './common/consts';
import { MainLayout } from './common/layouts';
import {
  ContinentsPage,
  CountriesPage,
  HomePage,
  LanguagesPage,
  NotFoundPage,
  SingleContinent,
  SingleCountry,
  SingleLanguage,
} from './pages';

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route element={<HomePage />} path={PATHNAMES.home} />
          <Route element={<ContinentsPage />} path={PATHNAMES.continents} />
          <Route element={<CountriesPage />} path={PATHNAMES.countries} />
          <Route element={<LanguagesPage />} path={PATHNAMES.languages} />
          <Route element={<SingleContinent />} path={PATHNAMES.continent} />
          <Route element={<SingleCountry />} path={PATHNAMES.country} />
          <Route element={<SingleLanguage />} path={PATHNAMES.language} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
