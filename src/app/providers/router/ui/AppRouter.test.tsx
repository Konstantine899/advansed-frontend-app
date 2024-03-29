// app/providers/router/ui/AppRouter.test.tsx
import { screen } from '@testing-library/react';
import AppRouter from './AppRouter';
import {
  getRouteAbout,
  getRouteAdminPanel,
  getRouteProfile,
} from '@/shared/const/router';
import { UserRole } from '@/entities/User';
import { componentRender } from '@/shared/lib/tests/componentRender/componentRender';

describe('app/router/AppRouter', () => {
  test('Страница должна отрендерится', async () => {
    componentRender(<AppRouter />, { route: getRouteAbout() }); // В AppRouter добавляю страницу About
    const page = await screen.findByTestId('AboutPage'); // асинхронно ищу data-testid
    expect(page).toBeInTheDocument(); // Проверяю что страница About внедрилась в DOM Tree
  });
  test('Страница не найдена', async () => {
    componentRender(<AppRouter />, { route: '/ededdedededed' }); // В пути просто набор символов
    const page = await screen.findByTestId('NotFoundPage');
    expect(page).toBeInTheDocument(); // Проверяю что страница About внедрилась в DOM Tree
  });
  test('Редирект не авторизованного пользователя на главную страницу', async () => {
    componentRender(<AppRouter />, { route: getRouteProfile('1') });
    const page = await screen.findByTestId('MainPage');
    expect(page).toBeInTheDocument(); // Проверяю что страница About внедрилась в DOM Tree
  });
  test('Доступ авторизованного пользователя к закрытой странице', async () => {
    componentRender(<AppRouter />, {
      route: getRouteProfile('1'),
      initialState: { user: { _inited: true, authData: {} } },
    });
    const page = await screen.findByTestId('ProfilePage');
    expect(page).toBeInTheDocument(); // Проверяю что страница About внедрилась в DOM Tree
  });
  test('Доступ запрещен (отсутствует роль)', async () => {
    componentRender(<AppRouter />, {
      route: getRouteAdminPanel(),
      initialState: { user: { _inited: true, authData: {} } },
    });
    const page = await screen.findByTestId('ForbiddenPage');
    expect(page).toBeInTheDocument(); // Проверяю что страница About внедрилась в DOM Tree
  });
  test('Доступ разрешен (присутствует роль)', async () => {
    componentRender(<AppRouter />, {
      route: getRouteAdminPanel(),
      initialState: {
        user: { _inited: true, authData: { roles: [UserRole.ADMIN] } },
      },
    });
    const page = await screen.findByTestId('AdminPanelPage');
    expect(page).toBeInTheDocument(); // Проверяю что страница About внедрилась в DOM Tree
  });
});
