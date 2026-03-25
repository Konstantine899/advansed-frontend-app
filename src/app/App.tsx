// app/App.tsx
import { getUserInited, userActions } from '@/entities/User';
import '@/shared/config/i18n/i18n';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Navbar } from '@/widgets/Navbar';
import { Sidebar } from '@/widgets/Sidebar';
import { Suspense, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppRouter } from './providers/router';
import { ToastProvider } from './providers/ToastProvider';

export const App = () => {
  const dispatch = useDispatch();
  const inited = useSelector(getUserInited);

  useEffect(() => {
    dispatch(userActions.initAuthData());
  }, [dispatch]);

  return (
    <ToastProvider>
      <div className={classNames('app', {}, [])}>
        <Suspense fallback="">
          <Navbar />
          <div className="content-page">
            <Sidebar />
            {inited && <AppRouter />}
          </div>
        </Suspense>
      </div>
    </ToastProvider>
  );
};

App.displayName = 'App';
