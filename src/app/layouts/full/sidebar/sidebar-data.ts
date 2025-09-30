import { NavItem } from './nav-item/nav-item';

export const navItems: NavItem[] = [
  {
    navCap: 'Bienvenido',
  },
  {
    displayName: 'Incio',
    iconName: 'layout-dashboard',
    route: '/dashboard',
  },

/* ----------------------------------------------------------sw */
  {
    displayName: 'Diagramador',
    iconName: 'tooltip',
    route: '/ui-components/aulas', //------------este es link de diagramdor
  },

  {
    navCap: 'Auth',
  },
  {
    displayName: 'Usuarios',
    iconName: 'tooltip',
    route: '/ui-components/admin/usuarios',
  },
  {
    displayName: 'Login',
    iconName: 'lock',
    route: '/authentication/login',
  },
  {
    displayName: 'Register',
    iconName: 'user-plus',
    route: '/authentication/register',
  },

];
