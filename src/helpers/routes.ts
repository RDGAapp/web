enum routes {
  Home = '/',
  About = '/about',
  Players = '/players',
  Contacts = '/contacts',
  Join = '#join',
  Service = '/service',
  Calendar = '/calendar',
  Partners = '/partners',
  Blog = '/blog',

  AdminHome = '/admin',
  AdminPlayers = '/admin/players',
  AdminPlayersCreate = '/admin/players/create',
  AdminPlayersUpdate = '/admin/players/update',
  AdminPlayersDelete = '/admin/players/delete',
  AdminPlayersRenew = '/admin/players/renew',
  AdminTournaments = '/admin/tournaments',
  AdminTournamentsCreate = '/admin/tournaments/create',
  AdminTournamentsUpdate = '/admin/tournaments/update',
  AdminTournamentsDelete = '/admin/tournaments/delete',
  AdminBlog = '/admin/blog',
  AdminBlogCreate = '/admin/blog/create',
  AdminBlogUpdate = '/admin/blog/update',
  AdminBlogDelete = '/admin/blog/delete',

  MyProfile = '/my/profile',
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
  [routes.Blog]: 'Блог',

  [routes.AdminHome]: 'Панель администратора',
  [routes.AdminPlayers]: 'Действия над игроком',
  [routes.AdminPlayersCreate]: 'Создать',
  [routes.AdminPlayersUpdate]: 'Обновить',
  [routes.AdminPlayersDelete]: 'Удалить',
  [routes.AdminPlayersRenew]: 'Активировать',
  [routes.AdminTournaments]: 'Действия над турниром',
  [routes.AdminTournamentsCreate]: 'Создать',
  [routes.AdminTournamentsUpdate]: 'Обновить',
  [routes.AdminTournamentsDelete]: 'Удалить',
  [routes.AdminBlog]: 'Действия над блогом',
  [routes.AdminBlogCreate]: 'Создать',
  [routes.AdminBlogUpdate]: 'Обновить',
  [routes.AdminBlogDelete]: 'Удалить',

  [routes.MyProfile]: 'Мой профиль',
};

export default routes;
