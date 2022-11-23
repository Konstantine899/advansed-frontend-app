// crs/components/App.tsx
import React, { Suspense, useEffect } from "react";
import "shared/config/i18n/i18n";
import { classNames } from "shared/lib/classNames/classNames";
import { AppRouter } from "app/providers/router";
import { Navbar } from "widgets/Navbar";
import { Sidebar } from "widgets/Sidebar";
import { useDispatch, useSelector } from "react-redux";
import { getUserInited, userActions } from "entities/User";

export const App = () => {
  const dispatch = useDispatch();
  const inited = useSelector(getUserInited);
  console.log('inited', inited);
  useEffect(() => {
    dispatch(userActions.initAuthData());
  }, [dispatch]);

  return (
    <div className={classNames("app", {}, [])}>
      <Suspense fallback="">
        <Navbar />
        <div className="content-page">
          <Sidebar />
          {inited && <AppRouter />}
        </div>
      </Suspense>
    </div>
  );
};
