import React, { ReactElement } from 'react';
import {Routes, Route } from 'react-router-dom';
import Back from './pages/Back';
import Front from './pages/Front';
import Main from './pages/Main';
import Page404 from './pages/Page404';
import Test from './pages/Test';

interface IRoute {
  path: string;
  element: ReactElement
}

const RootRouter = () => {

  const routes: IRoute[] = [
    {
      path: '/',
      element: <Main />,
    },
    {
      path: '/front',
      element: <Front />,
    },
    {
      path: '/back',
      element: <Back />,
    },
    {
      path: '/test',
      element: <Test />,
    },
    {
      path: '*',
      element: <Page404 />,
    },
  ];

  return (
    <div>
      <Routes>
        {routes.map((route: IRoute, index: number) => (
          <Route key={index} path={route.path} element={route.element} />
        ))}
      </Routes>
    </div>
  );
};

export default RootRouter;