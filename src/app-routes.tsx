import { Route, BrowserRouter, Routes } from 'react-router-dom';
import { PATHNAMES } from './common/consts';
import { MainLayout } from './common/layouts';

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />} path={PATHNAMES.home}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
