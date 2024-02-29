import { INavData } from '@coreui/angular';

export const navItems: INavData[] = [
  {
    name: 'Dashboard',
    url: '/dashboard',
    iconComponent: { name: 'cil-speedometer' },
    badge: {
      color: 'info',
      text: 'NEW'
    }
  }
  ,
  {
    name: 'Quiz',
    url: 'base/cards',
    iconComponent: { name: 'cil-cursor' },
    children: [
      {
        name: 'Quizzes',
        url: '/base/cards'
      },
      {
        name: 'Create a new Quiz',
        url: '/forms/form-control'
      }
    ]
  },  
  {
    name: 'Pages',
    url: '/login',
    iconComponent: { name: 'cil-star' },
    children: [
      {
        name: 'Login',
        url: '/login'
      },
      {
        name: 'Register',
        url: '/register'
      },
    ]
  },
];
