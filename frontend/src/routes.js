import { Navigate, useRoutes } from 'react-router-dom';

// layouts
import MainLayout from './layouts/main';
import MapLayout from './layouts/map';
import LoanLayout from './layouts/loan';
import CostLayout from './layouts/cost';
import DuesLayout from './layouts/dues';
import DashboardLayout from './layouts/dashboard';

// pages
import Main from './pages/Main';
import Map from './pages/Map';
import Loan from './pages/Loan';
import Cost from './pages/Cost';
import Dues from './pages/Dues';
import User from './pages/User';
import Login from './pages/Login';
import NotFound from './pages/Page404';
import Register from './pages/Register';
import DashboardApp from './pages/DashboardApp';

// ----------------------------------------------------------------------

export default function Router() {
  return useRoutes([
      {
          path: '/dashboard',
          element: <DashboardLayout />,
          children: [
              { path: 'app', element: <DashboardApp /> },
              { path: 'user', element: <User /> },
          ],
      },
      {
          path: '/dues',
          element: <DuesLayout />,
          children: [
              { path: '', element: <Dues /> },
          ],
      },
      {
          path: '/cost',
          element: <CostLayout />,
          children: [
              { path: '', element: <Cost /> },
          ],
      },
      {
          path: '/loan',
          element: <LoanLayout />,
          children: [
              { path: '', element: <Loan /> },
          ],
      },
      {
          path: '/map',
          element: <MapLayout />,
          children: [
              { path: '', element: <Map /> },
          ],
      },
      {
          path: '/',
          element: <MainLayout />,
          children: [
              { path: '/', element: <Main /> },
              { path: 'login', element: <Login /> },
              { path: 'register', element: <Register /> },
              { path: '404', element: <NotFound /> },
              { path: '*', element: <Navigate to="/404" /> },
          ],
      },
      { path: '*', element: <Navigate to="/404" replace /> },
  ]);
}
