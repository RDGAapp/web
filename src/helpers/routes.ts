enum routes {
  Home = '/',
  About = '/about',
  Players = '/players',
  Contacts = '/contacts',
  Join = '#join',
  Service = '/service',
  Calendar = '/calendar',
  Partners = '/partners',
  AdminHome = '/admin',
  AdminPlayers = '/admin/players',
  AdminTournaments = '/admin/tournaments',
}

export const routeNames: Record<routes, string> = {
  [routes.Home]: 'Главная',
  [routes.About]: 'О нас',
  [routes.Players]: 'Игроки',
  [routes.Contacts]: 'Контакты',
  [routes.Join]: '',
  [routes.Service]: 'Услуги',
  [routes.Calendar]: 'Календарь',
  [routes.Partners]: 'Партнеры',
  [routes.AdminHome]: 'Панель администратора',
  [routes.AdminPlayers]: 'Действия над игроком',
  [routes.AdminTournaments]: 'Действия над турниром',
};

export default routes;
