import {
  faHome,
  faUsers,
  faBroadcastTower,
  faBalanceScale,
  faInfoCircle,
  faUserAstronaut,
} from '@fortawesome/free-solid-svg-icons';

export default [
  {
    title: 'Home',
    href: '/',
    icon: faHome,
  },
  {
    title: 'Community',
    href: 'https://www.google.com',
    icon: faUsers,
  },
  {
    title: 'Comms',
    href: '#',
    icon: faBroadcastTower,
  },
  {
    title: 'Government',
    icon: faBalanceScale,
    href: '/gov',
    nav: [
      {
        title: 'Constitution',
        href: '/gov/constiution',
        nav: [
          {
            title: 'Section 1',
            href: '/gov/constiution/1',
          },
          {
            title: 'Section 2',
            href: '/gov/constiution/2',
            nav: [
              {
                title: 'Section A',
                href: '/gov/constiution/2/a',
              },
            ],
          },
          {
            title: 'Section 3',
            href: '/gov/constiution/1',
          },
          {
            title: 'Section 4',
            href: '/gov/constiution/1',
          },
        ],
      },
    ],
  },
  {
    title: 'About',
    href: '/about',
    icon: faInfoCircle,
    nav: [
      {
        title: 'Contact Us',
        href: '/about/contact-us',
      },
      {
        title: 'History',
        href: '/about/history',
      },
    ],
  },
  {
    title: 'Login',
    href: '#',
    icon: faUserAstronaut,
  },
];
